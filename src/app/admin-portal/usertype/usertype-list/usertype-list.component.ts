import { Component,EventEmitter } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { UserTypeService } from '../../../Services/usertype.service';
import { Router } from '@angular/router';
import { CellType, Column, KiduTableModel } from '../../shared/kidu-table/columns';
import { CommonModule } from '@angular/common';
import { KiduConfirmModalComponent } from '../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../Services/Common/notification.service';



@Component({
  selector: 'app-usertype-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent,CommonModule,KiduConfirmModalComponent,FormsModule],
  templateUrl: './usertype-list.component.html',
  styleUrl: './usertype-list.component.css'
})
export class UsertypeListComponent {

  headingText="User Types";
  response!: CustomApiResponse;
  Items!:any[];
  constructor(private router: Router,private usertypeService: UserTypeService,private notitficationService:NotificationService) {


  }
  data = 'Are you sure you want to proceed?';
  show = false; // Flag to control modal visibility
  _kiduTableModel: KiduTableModel = {
  tableColumns:  [
    {columnDef:'ID',header:'Serial#',colType:CellType.Text},
    {columnDef:'Description',header:'Description',colType:CellType.Text}
    ,{columnDef:'Abbreviation',header:'Abbreviation',colType:CellType.Text}
],
    // ,{columnDef:'btnString',header:'Actions',colType:CellType.Button}
    isDeleteButton: true,
    isEditButton: true,
    rows: [{}],
    StatusColumns:[""],
    deleteconfirmationmessage: 'Are you sure you want to delete this Usertype?'
  };
    handleCreateNewItem() {

      this.router.navigate(['/usertypes-create']);
    }
    ngOnInit(): void {
      this.configureKidutable();

      this.GetItems(" ");
    }
  configureKidutable() {
   // throw new Error('Method not implemented.');
  }
  EditButtonClicked(item: any) {

    this.router.navigate(['/usertypes-edit', item.ID]);

  }
  GlobalSearch(sarchtxt: string) {
   this.GetItems(sarchtxt)

    }
  GetItems(searchtext: string) {
    this.usertypeService.getUserTypeAsync(searchtext, 0, 0).subscribe({
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