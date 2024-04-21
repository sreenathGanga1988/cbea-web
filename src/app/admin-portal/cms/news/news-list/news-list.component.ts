import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../../shared/kidu-table/kidu-table.component';
import { CustomApiResponse } from '../../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../Services/Common/notification.service';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  headingText="DailyNews";
  response!: CustomApiResponse;
  Items!:any[];

  constructor(private router: Router,private categoryService:NotificationService) {
    
    }
    handleCreateNewItem() {

      this.router.navigate(['/newsitem-create']);
    }

      
  
  }


