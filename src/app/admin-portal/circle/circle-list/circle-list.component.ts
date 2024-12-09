import { Component } from '@angular/core';
import { TitleBarComponent } from "../../shared/title-bar/title-bar.component";
import { Router } from '@angular/router';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CellType, Column, KiduTableModel } from '../../shared/kidu-table/columns';
import { CommonModule } from '@angular/common';
import { KiduConfirmModalComponent } from '../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component';
import { FormsModule } from '@angular/forms';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { CircleService } from '../../../Services/circle.service';
import { NotificationService } from '../../../Services/Common/notification.service';

@Component({
    selector: 'app-circle-list',
    standalone: true,
    templateUrl: './circle-list.component.html',
    styleUrl: './circle-list.component.css',
    imports: [TitleBarComponent,KiduTableComponent,CommonModule,FormsModule]
})
export class CircleListComponent {

  headingText="Circles";
  response!: CustomApiResponse;
  Items!: any[];

  constructor(private router: Router, private circleService: CircleService, private notificationService: NotificationService) {


  }
  data = 'Are you sure you want to proceed?';
  show = false; // Flag to control modal visibility
  _kiduTableModel: KiduTableModel = {
    tableColumns: [
      { columnDef: 'ID', header: 'Serial#', colType: CellType.Text },
      { columnDef: 'CircleCode', header: 'Circle-Code', colType: CellType.Text },
      { columnDef: 'Abbreviation', header: 'Code', colType: CellType.Text },
      
      { columnDef: 'Name', header: 'Circle-Name', colType: CellType.Text },
      { columnDef: 'IsActive', header: 'Status', colType: CellType.Status }],
    isDeleteButton: true,
    isEditButton: true,
    rows: [{}],
    StatusColumns:["IsActive"],
    deleteconfirmationmessage: 'Are you sure you want to delete this circle?'


  };
  
  



  handleCreateNewItem() {

    this.router.navigate(['/admin/circles-create']);
  }
  EditButtonClicked(item: any) {

    this.router.navigate(['/admin/Circles-edit', item.ID]);

  }

  ngOnInit(): void {
    this.configureKidutable();
    this.GetItems("");

  }
  configureKidutable() {
    //throw new Error('Method not implemented.');
  }
  GlobalSearch(sarchtxt: string) {
    console.log("search text--->",sarchtxt);
    
    this.GetItems(sarchtxt)
  }
  GetItems(searchtext: string) {
    this.circleService.getCircleAsync(searchtext, 0, 0).subscribe({
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
  DeleteItem(id: number) {

    this.circleService.deleteCircle(id).subscribe({
      next: (res) => {
        if (res.isSucess) {
          this.notificationService.showSuccess('Successfully deleted Circle!!',"Deleted");
          this.GetItems("");
        }
        else {

          this.notificationService.showError('Failed to Delete Circle:' + res.error,"Error")

        }

      },
      error: (res) => {

      }
    })
  }


  openModal() {
    this.show = true;
  }

  closeModal() {
    this.show = false;
  }
  handleConfirmation(obj: any) {

    if (obj[0]==true) {

      this. DeleteItem(obj[1].ID)
      
    } else {
      console.log('Cancelled!');
      
    }
  }

}


