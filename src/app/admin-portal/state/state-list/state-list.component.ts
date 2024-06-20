import { Component } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CellType, Column, KiduTableModel } from '../../shared/kidu-table/columns';
import { Router } from '@angular/router';
import { StateService } from '../../../Services/state.service';
import { CommonModule } from '@angular/common';
import { KiduConfirmModalComponent } from '../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../Services/Common/notification.service';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';


@Component({
  selector: 'app-state-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent,CommonModule,KiduConfirmModalComponent,FormsModule],
  templateUrl: './state-list.component.html',
  styleUrl: './state-list.component.css'
})
export class StateListComponent {
  response!: CustomApiResponse;
  headingText="State";
  Items!:any[];

  constructor(private router: Router, private categoryService:StateService, private notificationService: NotificationService) {


  }

  data = 'Are you sure you want to proceed?';
  show = false; // Flag to control modal visibility
  _kiduTableModel: KiduTableModel = {
    tableColumns: [
      { columnDef: 'ID', header: 'Serial#', colType: CellType.Text },
      { columnDef: 'Abbreviation', header: 'Code', colType: CellType.Text },
      { columnDef: 'Name', header: 'Name', colType: CellType.Text },
      { columnDef: 'IsActive', header: 'Status', colType: CellType.Status }],
    isDeleteButton: true,
    isEditButton: true,
    rows: [{}],
    StatusColumns:["IsActive"],
    deleteconfirmationmessage: 'Are you sure you want to delete this state?'


  };
  ngOnInit(): void {

    this.configureKidutable();
    this.GetItems(" ");
  }

  configureKidutable() {

  }

    handleCreateNewItem() {

      this.router.navigate(['/states-create']);
    };
    EditButtonClicked(item: any) {

      this.router.navigate(['/states-edit', item.ID]);
  
    }
    GlobalSearch(sarchtxt: string) {
      this.GetItems(sarchtxt)
    }

   
    GetItems(searchtext: string) {
      this.categoryService.getCategoriesAsync(searchtext, 0, 0).subscribe({
        next: (res) => {
  
          if (res) {
            this._kiduTableModel.rows = res.rowData;
          }
          console.log(this.Items)
  
        },
        error: (res) => {
          alert("Erro while Adding")
        }
      })
    }
  
}
