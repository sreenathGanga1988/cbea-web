import { Component } from '@angular/core';
import { StatusService } from '../../../Services/status.service';
import { Router } from '@angular/router';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CellType, Column, KiduTableModel } from '../../shared/kidu-table/columns';
import { CommonModule } from '@angular/common';
import { KiduConfirmModalComponent } from '../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { NotificationService } from '../../../Services/Common/notification.service';
@Component({
  selector: 'app-status-list',
  standalone: true,
  imports: [TitleBarComponent, CommonModule, KiduTableComponent,FormsModule],
  templateUrl: './status-list.component.html',
  styleUrl: './status-list.component.css'
})
export class StatusListComponent {
  headingText="Status";
  response!: CustomApiResponse;
  Items!:any[];

  constructor(private router: Router,private statusService: StatusService ,private notificationservice:NotificationService,private formbuilder:FormBuilder ) {


  }
  data = 'Are you sure you want to proceed?';
  show = false; // Flag to control modal visibility
  _kiduTableModel: KiduTableModel = {
    tableColumns: [
      { columnDef: 'ID', header: 'Serial#', colType: CellType.Text },
      
      { columnDef: 'Name', header: 'Name', colType: CellType.Text },
      { columnDef: 'Abbreviation', header: 'Code', colType: CellType.Text },
      { columnDef: 'Description', header: 'Description', colType: CellType.Text },
      { columnDef: 'GroupID', header: 'GroupID', colType: CellType.Text },],
      //{ columnDef: 'IsActive', header: 'Status', colType: CellType.Status }],
    isDeleteButton: true,
    isEditButton: true,
    rows: [{}],
    StatusColumns:["IsActive"],
    deleteconfirmationmessage: 'Are you sure you want to delete this Status?'


  };
    handleCreateNewItem() {

      this.router.navigate(['/admin/status-create']);
    }
    ngOnInit(): void {

      this.configureKidutable();
      this.GetItems("");
    }
  configureKidutable() {
   // throw new Error('Method not implemented.');
  }
  EditButtonClicked(item: any) {

    this.router.navigate(['/admin/status-edit', item.ID]);

  }
  
  GlobalSearch(sarchtxt: string) {
    console.log("search text--->",sarchtxt);
    
    this.GetItems(sarchtxt)
  }
  GetItems(searchtext: string) {
    this.statusService.getstatusAsync(searchtext, 0, 0).subscribe({
      next: (res) => {

        if (res) {
          this._kiduTableModel.rows = res.rowData;
        }
        console.log(this.Items)

      },
      error: (res) => {
        alert("Error while Adding")
      }
    })
  }
}
