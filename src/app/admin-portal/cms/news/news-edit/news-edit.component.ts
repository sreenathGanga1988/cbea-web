import { Component } from '@angular/core';
import { news } from '../../../../models/Common/news.model';
import { AbstractControl,FormBuilder,FormGroup, FormsModule,Validators } from '@angular/forms';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../../../Services/news.service';
import { NotificationService } from '../../../../Services/Common/notification.service';

@Component({
  selector: 'app-news-edit',
  standalone: true,
  imports: [TitleBarComponent,CommonModule,FormsModule],
  templateUrl: './news-edit.component.html',
  styleUrl: './news-edit.component.css'
})
export class NewsEditComponent {
headingText = "Edit Categories";
  id: string = '';
  newNews! :news;
  textControl!: AbstractControl;
  myform:FormGroup;
  isAlive = true;
  formSubmitted = false;
  // constructor(private route: ActivatedRoute,private categoryService :CategoryService) { }
  constructor(private route: ActivatedRoute,private router: Router, private newsService: NewsService, private notificationService: NotificationService,private formbuilder:FormBuilder) {

    this.myform=this.formbuilder.group({
      name: [null, [Validators.required, Validators.minLength(2),this.noWhiteSpaceValidator]]
     
     });
    
  }
  noWhiteSpaceValidator(control: AbstractControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true }
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.id = id;
      this.getItem(id)
    } else {
      // Handle the case where id is null (e.g., redirect or show an error)
      console.error('ID is null');
    }
  }
  
  handleCreateNewItem() {

   
  }
  getItem(Id:string){
    this.newsService.getNewsById(Number(Id)).subscribe({
      next: (res) => {

        if (res) {

          if (res.isSucess === true) {


              console.log(res);
              this.newNews=res.value;
              console.log(this.newNews);

            }
            else {
             alert(res.error);
          }
         // this._kiduTableModel.rows = res.rowData;
        }


      },
      error: (res) => {
        alert("Erro while Adding")
      }
    })

  }

  onSubmit(form:any) {
    this.formSubmitted=true;
    this.newsService.putNews(Number(this.id),this.newNews).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("News Updated Successfully", "Added")
        this.router.navigate(['/DailyNews']);
      },
      error: (res) => {
        alert("Error while Adding")
      }
    })

  }
}
