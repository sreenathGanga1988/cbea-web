import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../../shared/kidu-table/kidu-table.component';
import { CustomApiResponse } from '../../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { CategoryService } from '../../../../Services/category.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeathclaimService } from '../../../../Services/Common/deathclaim.service';
import { NotificationService } from '../../../../Services/Common/notification.service';
import { CellType, KiduTableModel } from '../../../shared/kidu-table/columns';

@Component({
  selector: 'app-deathclaim-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent,CommonModule,KiduTableComponent,FormsModule],
  templateUrl: './deathclaim-list.component.html',
  styleUrl: './deathclaim-list.component.css'
})
export class DeathclaimListComponent {
  headingText="Death Claims";
  response!: CustomApiResponse;
  Items!:any[];

  constructor(private router: Router,private deathclaimervice: DeathclaimService,private notification:NotificationService ) {


  }
  data = 'Are you sure you want to proceed?';
  show = false; // Flag to control modal visibility
  _kiduTableModel: KiduTableModel = {
  tableColumns:  [
    {columnDef:'Id',header:'Serial#',colType:CellType.Text},
    {columnDef:'StaffNo',header:'Staff Number',colType:CellType.Text},
    {columnDef:'Name',header:'Name',colType:CellType.Text}
    ,{columnDef:'Nominee',header:'Nominee',colType:CellType.Text},
    {columnDef:'NomineeRelation',header:'Nominee Relation',colType:CellType.Text},
    {columnDef:'NomineeIDentity',header:'NomineeIDentity',colType:CellType.Text},
    {columnDef:'Amount',header:'Amount',colType:CellType.Text},
    {columnDef:'LastContribution',header:'LastContribution',colType:CellType.Text},
    { columnDef: 'IsActive', header: 'Status', colType: CellType.Status }
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
  //  throw new Error('Method not implemented.');
  }
  handleCreateNewItem() {

    this.router.navigate(['/admin/deathclaims-create']);
  }
  EditButtonClicked(item: any) {

    this.router.navigate(['/admin/deathclaims-edit', item.Id]);

  }
  GlobalSearch(sarchtxt: string) {
    console.log("search text--->",sarchtxt);
    
    this.GetItems(sarchtxt)
  }
  GetItems(searchtext: string) {
    this.deathclaimervice.getClaimAsync(searchtext, 0, 0).subscribe({
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

    this.deathclaimervice.deleteItem(id).subscribe({
      next: (res) => {
        if (res.isSucess) {
          this.notification.showSuccess('Successfully deleted claim!!',"Deleted");
          this.GetItems("");
        }
        else {

          this.notification.showError('Failed to Delete claim :' + res.error,"Error")

        }

      },
      error: (res) => {

      }
    })
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
