import { Component, OnInit, inject,EventEmitter } from '@angular/core';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../../shared/kidu-table/kidu-table.component';
import { CustomApiResponse } from '../../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../Services/Common/notification.service';
import { KiduConfirmModalComponent } from '../../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component';
import { FormsModule } from '@angular/forms';
import { CellType, KiduTableModel } from '../../../shared/kidu-table/columns';
import { AuditEntity } from '../../../../models/Common/audit-entity.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHelperService } from '../../../../Services/Common/http-helper.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dailyquotes-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent,KiduConfirmModalComponent,FormsModule,HttpClientModule],
  templateUrl: './dailyquotes-list.component.html',
  styleUrl: './dailyquotes-list.component.css'
})
export class DailyquotesListComponent implements OnInit {
  headingText="Quotes";
  response!: CustomApiResponse;
  Items!:any[];
  httpclient=inject(HttpClient);
  
  constructor(private router: Router,private notificationService: NotificationService,private httphelper:HttpHelperService ) {

  }
  data = 'Are you sure you want to proceed?';
  show = false; // Flag to control modal visibility
  _kiduTableModel: KiduTableModel = {
    tableColumns: [
      { columnDef: 'Id', header: 'Serial#', colType: CellType.Text },
      { columnDef: 'Day', header: 'day', colType: CellType.Text },
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
 
     this.router.navigate(['/dailyquotes-create']);
   }
  GlobalSearch(sarchtxt: string) {
    console.log("search text--->",sarchtxt);
    this.getData(sarchtxt)
    
   
  }
  getData(searchtext:string){
    this.httpclient.get('http://sreenathganga-001-site7.jtempurl.com/API/api_DataTable/GetPageinatedDataAsync?ReportType=dayquote&SearchText=&PageSize=50&PageNumber=0')
    
   .subscribe({
    
      next: (res:any) => {

        if (res) {
          this._kiduTableModel.rows = res.value.rowData;
       
        
           }
       },
      error: (res) => {
        alert("Error while Adding")
      }
      
    })
     
    

  } 

  }
 
