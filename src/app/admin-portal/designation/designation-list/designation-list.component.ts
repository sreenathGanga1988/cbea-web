import { Component, EventEmitter } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CellType, Column, KiduTableModel } from '../../shared/kidu-table/columns';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KiduConfirmModalComponent } from '../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../Services/Common/notification.service';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { DesignationService } from '../../../Services/designation-service';



@Component({
  selector: 'app-designation-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent,CommonModule,FormsModule,],
  templateUrl: './designation-list.component.html',
  styleUrl: './designation-list.component.css'
})
export class DesignationListComponent {
  response!: CustomApiResponse;
  headingText="Designation";
  Items!:any[];
  sarchtxt:any;
  
 constructor(private router: Router, private designationService:DesignationService, private notificationService: NotificationService) {


  }

  data = 'Are you sure you want to proceed?';
  show = false; // Flag to control modal visibility
  _kiduTableModel: KiduTableModel = {
    tableColumns: [
      { columnDef: 'ID', header: 'Serial#', colType: CellType.Text },
      { columnDef: 'Name', header: 'Code', colType: CellType.Text },
      { columnDef: 'Description', header: 'Name', colType: CellType.Text },
      { columnDef: 'IsActive', header: 'Status', colType: CellType.Status }],
    isDeleteButton: true,
    isEditButton: true,
    rows: [{}],
    StatusColumns:["IsActive"],
    deleteconfirmationmessage: 'Are you sure you want to delete this designation?'


  };
  ngOnInit(): void {

    this.configureKidutable();
    this.GetItems(" ");
  }

  configureKidutable() {

  }

  handleCreateNewItem() {

    this.router.navigate(['/admin/designation-create']);
  };
    EditButtonClicked(item: any) {

      this.router.navigate(['/admin/designations-edit', item.ID]);
  
    }
    GlobalSearch(sarchtxt: string) {
      this.GetItems(sarchtxt)
     
    }
 
   
    GetItems(searchtext: string) {
      this.designationService.getdesignationAsync(searchtext, 0, 0).subscribe({
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
    openModal() {
      this.show = true;
    }
  
    closeModal() {
      this.show = false;
    }
    DeleteItem(id: number) {

      this.designationService.deleteDesignaton(id).subscribe({
        next: (res) => {
          if (res.isSucess) {
            this.notificationService.showSuccess('Successfully deleted state!!',"Deleted");
            this.GetItems("");
          }
          else {
  
            this.notificationService.showError('Failed to Delete state :' + res.error,"Error")
  
          }
  
        },
        error: (res) => {
  
        }
      })
    }
   
    handleConfirmation(obj: any) {

      if (obj[0]==true) {
  
        this. DeleteItem(obj[1].ID)
        // Handle confirmation logic here
      } else {
        console.log('Cancelled!');
        // Handle cancellation logic here
      }
    }
  }
