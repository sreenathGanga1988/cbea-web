import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Quotes } from '../../../../models/Common/quotes.model';
import { DayquotesService } from '../../../../Services/dayquotes.service';
import { NotificationService } from '../../../../Services/Common/notification.service';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dailyquotes-edit',
  standalone: true,
  imports: [TitleBarComponent,FormsModule],
  templateUrl: './dailyquotes-edit.component.html',
  styleUrl: './dailyquotes-edit.component.css'
})
export class DailyquotesEditComponent {
  headingText = "Edit Quotes";
  id: string = '';
  newQuotes! :Quotes;

  constructor(private route: ActivatedRoute,private router: Router, private quotesService:DayquotesService, private notificationService: NotificationService) {


  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.id = id;
      this.getItem(id)
    } else {
      
      console.error('ID is null');
    }
  }
  handleCreateNewItem() {

    
  };
  getItem(id:string){
    this.quotesService.getQuotessById(Number(id)).subscribe({
      next: (res) => {

        if (res) {

          if (res.isSucess === true) {


              console.log(res);
              this.newQuotes=res.value;
              console.log(this.newQuotes);

            }
            else {
             alert(res.error);
          }
         
        }


      },
      error: (res) => {
        alert("Error while Adding")
      }
    })

  }
onSubmit() {

    this.quotesService.putQuotes(Number(this.id),this.newQuotes).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("Quotes Updated Successfully", "Added")
        this.router.navigate(['/dailyquotes']);
      },
      error: (res) => {
        alert("Error while Adding")
      }
    })

  }


}
