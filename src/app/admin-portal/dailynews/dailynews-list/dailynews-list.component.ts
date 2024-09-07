import { Component } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CommonModule } from '@angular/common';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { NewsService } from '../../../Services/news.service';
import { NotificationService } from '../../../Services/Common/notification.service';
import { CellType,Column, KiduTableModel } from '../../shared/kidu-table/columns';
import { KiduConfirmModalComponent } from '../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dailynews-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent,CommonModule,KiduConfirmModalComponent,FormsModule],
  templateUrl: './dailynews-list.component.html',
  styleUrl: './dailynews-list.component.css'
})
export class NewsListComponent {

  headingText="DailyNews";
  response!: CustomApiResponse;
  Items!:any[];

  constructor(private router:Router,private newsService:NewsService,private notification:NotificationService) {
    
    }
    handleCreateNewItem() {

      this.router.navigate(['/newsitem-create']);
    }
    data = 'Are you sure you want to proceed?';
    show = false; // Flag to control modal visibility
    _kiduTableModel: KiduTableModel = {
      tableColumns: [
        { columnDef: 'Id', header: 'Serial#', colType: CellType.Text },
        { columnDef: 'NewsText', header: 'News', colType: CellType.Text },
        { columnDef: 'DateofAction', header: 'Date', colType: CellType.Text },
        { columnDef: 'IsActive', header: 'Status', colType: CellType.Status }],
      isDeleteButton: true,
      isEditButton: true,
      rows: [{}],
      StatusColumns:["IsActive"],
      deleteconfirmationmessage: 'Are you sure you want to delete this news?'
  
  
    };
    ngOnInit(): void {
  
      this.configureKidutable();
      this.GetItems("");
    }
    configureKidutable() {
      // throw new Error('Method not implemented.');
     }
     GlobalSearch(sarchtxt: string) {
      console.log("search text--->",sarchtxt);
      
      this.GetItems(sarchtxt)
    }
     GetItems(searchtext: string) {
       this.newsService.getNewsAsync(searchtext, 0, 0).subscribe({
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


