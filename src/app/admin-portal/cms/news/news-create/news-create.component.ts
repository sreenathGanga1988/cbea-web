import { Component ,NgModule} from '@angular/core';
import { news } from '../../../../models/Common/news.model';
import { Router } from '@angular/router';
import { NewsService } from '../../../../Services/news.service';
import { NotificationService } from '../../../../Services/Common/notification.service';
import { FormBuilder,Validators,AbstractControl,FormGroup, FormsModule } from '@angular/forms';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { CommonModule, DatePipe } from '@angular/common';
@Component({
  selector: 'app-news-create',
  standalone: true,
  imports: [TitleBarComponent,FormsModule,CommonModule],
  templateUrl: './news-create.component.html',
  styleUrl: './news-create.component.css'
})
export class NewsCreateComponent {
  headingText = "Create News Items";
  newNews: news = {
    id: 0,
    newslink: '',
    newstext: '',
    isActive: true,
    createdByUserId: null,
    MainPageId: null,
    modifiedByUserId: null,
    modifiedDate: null,
    isDeleted: false,
    deletedByByUserId: null,
    createdDate:null,
    dateofaction:null,
    addedUser: '',
    modifiedUser: '',
    deletedUser: '',
   deletedDate: '',
  };
  formSubmitted = false;
  myform:FormGroup;
 textControl!: AbstractControl;
 text!:String;
 isAlive = true;
  constructor(private router: Router, private newsService: NewsService, private notificationService: NotificationService ,private formbuilder:FormBuilder) {
    this.myform=this.formbuilder.group({
     text: [null, [Validators.required, Validators.minLength(2),this.noWhiteSpaceValidator]]
    
    });
   
     }
     noWhiteSpaceValidator(control: AbstractControl) {
       const isWhitespace = (control.value || '').trim().length === 0;
       const isValid = !isWhitespace;
       return isValid ? null : { 'whitespace': true }
     }
     handleCreateNewItem() {

     // this.router.navigate(['/categories-create']);
    }
    
    onSubmit(form: any) {
  
      this.formSubmitted=true;
      
  
  
      this.newNews.createdDate=new Date().toISOString();
     
     
      this.newNews.modifiedDate=new Date().toISOString();
  
      this.newNews.modifiedByUserId=1
      this.newsService.postNews(this.newNews).subscribe({
        next: (res) => {
  
  
          this.notificationService.showSuccess("News Added Successfully", "Added")
          this.router.navigate(['/DailyNews']);
        },
      
       error: (res) => {
         alert("Erro while Adding")
        }
      })
      
    
  }
  }
  


