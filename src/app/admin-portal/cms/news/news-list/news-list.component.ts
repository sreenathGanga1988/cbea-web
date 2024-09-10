import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../../shared/kidu-table/kidu-table.component';
import { CustomApiResponse } from '../../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../Services/Common/notification.service';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../../../Services/news.service';
import { CellType, KiduTableModel } from '../../../shared/kidu-table/columns';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent,CommonModule,],
 templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
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
    EditButtonClicked(item: any) {

      this.router.navigate(['/newsitem-edit', item.Id]);
  
    }
    GlobalSearch(sarchtxt: string) {
      console.log("search text--->",sarchtxt);
      
      this.GetItems(sarchtxt)
    }
    configureKidutable() {
      // throw new Error('Method not implemented.');
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
           alert("Erro while Adding")
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
     
      this.newsService.deleteItem(id).subscribe({
        next: (res) => {
          if (res.isSucess) {
            this.notification.showSuccess('Successfully deleted Newsitems!!',"Deleted");
            this.GetItems("");
          }
          else {
  
            this.notification.showError('Failed to Delete Newsitems:' + res.error,"Error")
  
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


