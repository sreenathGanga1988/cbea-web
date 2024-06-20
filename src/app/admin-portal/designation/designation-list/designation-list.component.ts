import { Component } from '@angular/core';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { DesignationService } from '../../../Services/designation-service';
import { CellType, Column, KiduTableModel } from '../../shared/kidu-table/columns';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { NotificationService } from '../../../Services/Common/notification.service';

@Component({
  selector: 'app-designation-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent],
  templateUrl: './designation-list.component.html',
  styleUrl: './designation-list.component.css'
})
export class DesignationListComponent {
  headingText="Designaton";
  response!: CustomApiResponse;
  Items!:any[];
  constructor(private router: Router,private categoryService: DesignationService,private notificationService: NotificationService ) {


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
    deleteconfirmationmessage: 'Are you sure you want to delete this category?'


  };

    ngOnInit(): void {


      this.GetItems("");
    }
    configureKidutable() {

    }
    handleCreateNewItem() {

      this.router.navigate(['/designation-create']);
    };
    EditButtonClicked(item: any) {
  
      this.router.navigate(['/designation-edit', item.ID]);
  
    }
    GlobalSearch(sarchtxt: string) {
      this.GetItems(sarchtxt)
    }
  GetItems(searchtext: string) {
    this.categoryService.getDesignations(searchtext,0,0).subscribe({
      next: (res) => {
        this.response = res;
        if (this.response.isSucess == true) {
          this.Items=this.response.value;
          console.log(res);

        }
        else {
          alert(this.response.error);
        }

      },
      error: (res) => {
        alert("Error while Adding")
      }
    })
  }
  DeleteItem(id: number) {

    this.categoryService.deleteDesignation(id).subscribe({
      next: (res) => {
        if (res.isSucess) {
          this.notificationService.showSuccess('Successfully deleted Category!!',"Deleted");
          this.GetItems("");
        }
        else {

          this.notificationService.showError('Failed to Delete Category :' + res.error,"Error")

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
      // Handle confirmation logic here
    } else {
      console.log('Cancelled!');
      // Handle cancellation logic here
    }
  }


}
