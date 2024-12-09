import { Component, OnInit, inject } from '@angular/core';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../../shared/kidu-table/kidu-table.component';
import { CustomApiResponse } from '../../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../Services/Common/notification.service';
import { KiduConfirmModalComponent } from '../../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component';
import { FormsModule } from '@angular/forms';
import { CellType, KiduTableModel } from '../../../shared/kidu-table/columns';

import { DayquotesService } from '../../../../Services/dayquotes.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dailyquotes-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent,FormsModule,CommonModule],
  templateUrl: './dailyquotes-list.component.html',
  styleUrl: './dailyquotes-list.component.css'
})
export class DailyquotesListComponent implements OnInit {
  headingText="Quotes";
  response!: CustomApiResponse;
  Items!:any[];
  
  
  constructor(private router: Router,private notificationService: NotificationService,private dayQuoteservice:DayquotesService ) {

  }
  data = 'Are you sure you want to proceed?';
  show = false; // Flag to control modal visibility
  _kiduTableModel: KiduTableModel = {
    tableColumns: [
      { columnDef: 'Id', header: 'Serial#', colType: CellType.Text },
      { columnDef: 'Day', header: 'Day', colType: CellType.Text },
      { columnDef: 'MonthCode', header: 'MonthCode', colType: CellType.Text },
     
      //{ columnDef: 'UnformatedContent', header: 'Content', colType: CellType.Text },
     // { columnDef: 'Abbrivation', header: 'Code', colType: CellType.Text },
      { columnDef: 'MonthName', header: 'Month', colType: CellType.Text },
       { columnDef: 'ToDayQuote', header: 'Day Quotes', colType: CellType.Text },
      { columnDef: 'IsActive', header: 'Status', colType: CellType.Status }],
    isDeleteButton: true,
    isEditButton: true,
    rows: [{}],
    StatusColumns:["IsActive"],
    deleteconfirmationmessage: 'Are you sure you want to delete this dayquote?'
  

  };
  
  ngOnInit(): void {
   
    this.configureKidutable();
    this.getData(" ");
    
    
    
  }
  configureKidutable() {
    // throw new Error('Method not implemented.');
   }
   handleCreateNewItem() {
 
     this.router.navigate(['/admin/dailyquotes-create']);
   };
   EditButtonClicked(item: any) {

    this.router.navigate(['/admin/dailyquotes-edit', item.Id]);

  }
  GlobalSearch(sarchtxt: string) {
    console.log("search text--->",sarchtxt);
    this.getData(sarchtxt)
    
   
  }
  getData(searchtext:string){
    this.dayQuoteservice.getQuoteAsync(searchtext, 0, 0).subscribe({
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
  handleConfirmation(obj: any) {

    if (obj[0]==true) {

      this. DeleteItem(obj[1].Id)
      // Handle confirmation logic here
    } else {
      console.log('Cancelled!');
      // Handle cancellation logic here
    }
  }
  DeleteItem(id:number) {
   
    this.dayQuoteservice.deleteQuote(id).subscribe({
      next: (res) => {
        if (res.isSucess) {
          this.notificationService.showSuccess('Successfully deleted Quotes!!',"Deleted");
          this.getData("");
        }
        else {

          this.notificationService.showError('Failed to Delete Quotes:' + res.error,"Error")

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

  }

  
 
