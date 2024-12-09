import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../../shared/kidu-table/kidu-table.component';
import { CustomApiResponse } from '../../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { CategoryService } from '../../../../Services/category.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KiduConfirmModalComponent } from '../../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component';
import { ManagingcomiteeService } from '../../../../Services/managingcomitee.service';
import { NotificationService } from '../../../../Services/Common/notification.service';
import { CellType, KiduTableModel } from '../../../shared/kidu-table/columns';

@Component({
  selector: 'app-managingcommitee-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent,CommonModule,FormsModule],
  templateUrl: './managingcommitee-list.component.html',
  styleUrl: './managingcommitee-list.component.css'
})
export class ManagingcommiteeListComponent {
  headingText="Managing Commtiee";
  response!: CustomApiResponse;
  Items!:any[];

  constructor(private router: Router,private managingComiteService: ManagingcomiteeService,private notificationService:NotificationService ) {


  }
  data = 'Are you sure you want to proceed?';
  show = false; // Flag to control modal visibility
  _kiduTableModel: KiduTableModel = {
    tableColumns: [
      { columnDef: 'Id', header: 'Serial#', colType: CellType.Text },
      { columnDef: 'Name', header: 'Name', colType: CellType.Text },
      { columnDef: 'Position', header: 'Position', colType: CellType.Text },
      { columnDef: 'Description1', header: 'Description1', colType: CellType.Text },
      { columnDef: 'Description2', header: 'Description2', colType: CellType.Text },
      { columnDef: 'IsActive', header: 'Status', colType: CellType.Status }],
    isDeleteButton: true,
    isEditButton: true,
    rows: [{}],
    StatusColumns:["IsActive"],
    deleteconfirmationmessage: 'Are you sure you want to delete this?'


  };

  handleCreateNewItem() {

    this.router.navigate(['/admin/managingcomitee-create']);
  }
  ngOnInit(): void {

    this.configureKidutable();
    this.GetItems("");
  }
  configureKidutable() {
   // throw new Error('Method not implemented.');
  }
  EditButtonClicked(item: any) {

    this.router.navigate(['/admin/managingcommitee-edit', item.Id]);

  }
  GlobalSearch(sarchtxt: string) {
    console.log("search text--->",sarchtxt);
    
    this.GetItems(sarchtxt)
  }

  GetItems(searchtext: string) {
    this.managingComiteService.getManagingComiteeAsync(searchtext, 0, 0).subscribe({
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

  this.managingComiteService.deleteItem(id).subscribe({
    next: (res) => {
      if (res.isSucess) {
        this.notificationService.showSuccess('Successfully deleted managing comitee!!',"Deleted");
        this.GetItems("");
      }
      else {

        this.notificationService.showError('Failed to Delete managing comitee :' + res.error,"Error")

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

    this. DeleteItem(obj[1].Id)
    // Handle confirmation logic here
  } else {
    console.log('Cancelled!');
    // Handle cancellation logic here
  }
}


}

