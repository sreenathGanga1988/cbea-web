import { Component,NgModule } from '@angular/core';
import { Quotes } from '../../../../models/Common/quotes.model';
import { Route, Router } from '@angular/router';
import { NotificationService } from '../../../../Services/Common/notification.service';
import { Title } from '@angular/platform-browser';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { FormsModule } from '@angular/forms';
import { DayquotesService } from '../../../../Services/dayquotes.service';

@Component({
  selector: 'app-dailyquotes-create',
  standalone: true,
  imports: [TitleBarComponent,FormsModule],
  templateUrl: './dailyquotes-create.component.html',
  styleUrl: './dailyquotes-create.component.css'
})
export class DailyquotesCreateComponent {
  headingText = "New Quotes";
  
  newQuotes: Quotes = {
    id: 0,
    Day: 0,
    MonthCode: 0,
    monthname: '',
    ToDayQuote: '',
    isActive: false,
    isDeleted: false,
    createdByUserId: null,
    addedUser: '',
    createdDate: null,
    modifiedByUserId: null,
    modifiedUser: '',
    modifiedDate: null,
    deletedByByUserId: null,
    deletedUser: '',
    deletedDate: null
  };
constructor(private router:Router,private notification:NotificationService,private dayquotes:DayquotesService){

}
onSubmit() {

this.newQuotes.createdDate=new Date().toISOString();
this.newQuotes.modifiedDate=new Date().toISOString();
this.newQuotes.modifiedByUserId=1;
  

this.dayquotes.postQuotes(this.newQuotes).subscribe({
    next: (res) => {


      this.notification.showSuccess("Quotes Added Successfully", "Added")
      this.router.navigate(['/dailyquotes']);
    },
    error: (res) => {
      alert("Error while Adding")
    }
  })
}
handleCreateNewItem(){
  this.router.navigate(['dailyquotes-create']);
}

}
