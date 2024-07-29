import { Component } from '@angular/core';
import { BranchService } from '../../../Services/branch.service ';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CellType, Column, KiduTableModel } from '../../shared/kidu-table/columns';
import { NotificationService } from '../../../Services/Common/notification.service';
import { CommonModule } from '@angular/common';
import { KiduConfirmModalComponent } from '../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-branch-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent,CommonModule,KiduConfirmModalComponent,FormsModule],
  templateUrl: './branch-list.component.html',
  styleUrl: './branch-list.component.css'
})
export class BranchListComponent {


  headingText="Branches";
  response!: CustomApiResponse;
  Items!:any[];
  constructor(private router: Router,private branchService: BranchService, private notificationServices:NotificationService ) {


  }
  data = 'Are you sure you want to proceed?';
  show = false; // Flag to control modal visibility
  _kiduTableModel: KiduTableModel = {
    tableColumns: [
      { columnDef: 'ID', header: 'Serial#', colType: CellType.Text },
      { columnDef: 'DPCode', header: 'DP-Code', colType: CellType.Text },
      { columnDef: 'CircleID', header: 'CircleID', colType: CellType.Text },
      { columnDef: 'StateID', header: 'StateID', colType: CellType.Text },
      { columnDef: 'Name', header: 'Name', colType: CellType.Text },
      { columnDef: 'Address1', header: 'Address1', colType: CellType.Text },
      { columnDef: 'Address2', header: 'Address2', colType: CellType.Text },
      { columnDef: 'Address3', header: 'Address3', colType: CellType.Text },
      { columnDef: 'District', header: 'District', colType: CellType.Text },
      { columnDef: 'CircleCode', header: 'Circle-Code', colType: CellType.Text },
      { columnDef: 'CircleName', header: 'Circle-Name', colType: CellType.Text },
      { columnDef: 'StateName', header: 'State-Name', colType: CellType.Text },
      { columnDef: 'StateCode', header: 'State-Code', colType: CellType.Text },
     // { columnDef: 'Status', header: 'Status', colType: CellType.Text },
      { columnDef: 'IsActive', header: 'Status', colType: CellType.Status }],
    isDeleteButton: false,
    isEditButton: true,
    
    rows: [{}],
    StatusColumns:["IsActive"],
    deleteconfirmationmessage: 'Are you sure you want to delete this Branch?'

};
ngOnInit(): void {
  this.configureKidutable();
  this.GetItems("");

}
handleCreateNewItem() {
  this.router.navigate(['/branch-create']);
};
  configureKidutable() {
   
  }
  GlobalSearch(sarchtxt: string) {
    console.log("search text--->",sarchtxt);
      
      this.GetItems(sarchtxt)
  //throw new Error('Method not implemented.');
  }
  GetItems(searchtext: string) {
    console.log("get data-------------");
    
   // throw new Error('Method not implemented.');
   this.branchService.getBranchAsync(searchtext,1,10).subscribe({
    next: (res) => {

      if (res) {
        this._kiduTableModel.rows = res.rowData;
      }
      console.log("res----",res)

    },
    error: (res) => {
      alert("Error while Adding")
    }
  })

   
  }
}
