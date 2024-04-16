import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../../shared/kidu-table/kidu-table.component';
import { CustomApiResponse } from '../../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../Services/Common/notification.service';

@Component({
  selector: 'app-dailyquotes-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent],
  templateUrl: './dailyquotes-list.component.html',
  styleUrl: './dailyquotes-list.component.css'
})
export class DailyquotesListComponent {
  headingText="Quotes";
  response!: CustomApiResponse;
  Items!:any[];
  constructor(private router: Router,private categoryService: NotificationService ) {


  }
  handleCreateNewItem() {

    this.router.navigate(['/dailyquotes-create']);
  }

}
