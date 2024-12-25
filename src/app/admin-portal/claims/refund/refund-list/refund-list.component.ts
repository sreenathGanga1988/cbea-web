import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../../shared/kidu-table/kidu-table.component';
import { CustomApiResponse } from '../../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../Services/Common/notification.service';
import { CellType, KiduTableModel } from '../../../shared/kidu-table/columns';
import { RefundService } from '../../../../Services/refund.service';
import { MemberService } from '../../../../Services/member.service';
import { DeathclaimService } from '../../../../Services/Common/deathclaim.service';

@Component({
  selector: 'app-refund-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent,],
  templateUrl: './refund-list.component.html',
  styleUrl: './refund-list.component.css'
})
export class RefundListComponent {
  headingText="Refunds";
  response!: CustomApiResponse;
  Items!:any[];

  constructor(private router: Router,private refundService: RefundService,private notification:NotificationService ) {



  }
  data = 'Are you sure you want to proceed?';
  show = false; // Flag to control modal visibility
  _kiduTableModel: KiduTableModel = {
  tableColumns:  [
    {columnDef:'Id',header:'Serial#',colType:CellType.Text},
    {columnDef:'StaffNoNavigationStaffNo',header:'Staff Number',colType:CellType.Text},
    {columnDef:'Name',header:'Name',colType:CellType.Text}
    ,{columnDef:'Nominee',header:'Nominee',colType:CellType.Text},
    {columnDef:'RefundDate',header:'Refund Date',colType:CellType.Text},
    {columnDef:'Amount',header:'Amount',colType:CellType.Text},
    {columnDef:'LastContribution',header:'LastContribution',colType:CellType.Text},
   
],
    // ,{columnDef:'btnString',header:'Actions',colType:CellType.Button}
    isDeleteButton: true,
    isEditButton: true,
    rows: [{}],
    StatusColumns:[""],
    deleteconfirmationmessage: 'Are you sure you want to delete this Death claim?'
  };
  ngOnInit(): void {

    this.configureKidutable();
    this.GetItems("");
  }
  configureKidutable() {
   // throw new Error('Method not implemented.');
  }
  
  handleCreateNewItem() {

    this.router.navigate(['/admin/refunds-create']);
  }
  EditButtonClicked(item: any) {

    this.router.navigate(['/admin/refunds-edit', item.Id]);

  }
  GlobalSearch(sarchtxt: string) {
    console.log("search text--->",sarchtxt);
    
    this.GetItems(sarchtxt)
  }
  GetItems(searchtext: string) {
    this.refundService.getRefundAsync(searchtext, 0, 0).subscribe({
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

    this.refundService.deleteItem(id).subscribe({
      next: (res) => {
        if (res.isSucess) {
          this.notification.showSuccess('Successfully deleted Refund!!',"Deleted");
          this.GetItems("");
        }
        else {

          this.notification.showError('Failed to Delete Refund :' + res.error,"Error")

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
