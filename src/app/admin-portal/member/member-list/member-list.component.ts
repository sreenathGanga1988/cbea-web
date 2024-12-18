import { Component } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CellType, Column, KiduTableModel } from '../../shared/kidu-table/columns';
import { MemberService } from '../../../Services/member.service';
import { NotificationService } from '../../../Services/Common/notification.service';
import { KiduConfirmModalComponent } from '../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent,FormsModule,CommonModule],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent {
  headingText="Member";
  response!: CustomApiResponse;
  Items!:any[];

  constructor(private route: ActivatedRoute,private router: Router,private memberService:MemberService,private notificationservice:NotificationService) {
  
  }
  data = 'Are you sure you want to proceed?';
  show = false; // Flag to control modal visibility
  _kiduTableModel: KiduTableModel = {
    tableColumns: [
      { columnDef: 'ID', header: 'Serial #', colType: CellType.Text },
      { columnDef: 'StaffNo', header: 'Staff Number', colType: CellType.Text },
      { columnDef: 'Name',header: 'Name', colType: CellType.Text },
      { columnDef: 'Gender', header: ' Gender', colType: CellType.Text },
      { columnDef: 'Designation', header: 'Designation ', colType: CellType.Text },
      { columnDef: 'Status', header: 'Status', colType: CellType.Status }],
    isDeleteButton: true,
    isEditButton: true,
    rows: [{}],
    StatusColumns:["IsActive"],
    deleteconfirmationmessage: 'Are you sure you want to delete this member?'


  };
  ngOnInit(): void {

    this.configureKidutable();
    this.GetItems("");
  }
  handleCreateNewItem() {

    this.router.navigate(['/admin/member-create']);
  };
  configureKidutable() {
  
  }
  EditButtonClicked(item: any) {

    this.router.navigate(['/admin/member-edit',item.ID]);

  }
  GlobalSearch(sarchtxt: string) {
    console.log("search text--->",sarchtxt);

    this.GetItems(sarchtxt)
  }
  GetItems(searchtext: string) {
    this.memberService.getMembersAsync(searchtext, 1, 10).subscribe({
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

    this.memberService.deleteItem(id).subscribe({
      next: (res) => {
        if (res.isSucess) {
          this.notificationservice.showSuccess('Successfully deleted !!',"Deleted");
          this.GetItems("");
        }
        else {

          this.notificationservice.showError('Failed to Delete  :' + res.error,"Error")

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
