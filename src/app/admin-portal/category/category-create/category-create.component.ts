import { Component, NgModule } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { Router, RouterModule } from '@angular/router';
import { CategoryService } from '../../../Services/category.service';
import { Category } from '../../../models/Common/category.model';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../Services/Common/notification.service';
import { CommonModule } from '@angular/common';
import { FormGroup,Validators,FormBuilder ,AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-category-create',
  standalone: true,
  imports: [TitleBarComponent, FormsModule,CommonModule,RouterModule,],
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css'
})
export class CategoryCreateComponent {
  
  headingText = "New Categories";
  newCategory: Category = {
    id: 0,
    name: '',
    abbreviation: '',
    isActive: false,
    createdByUserId: null,
    createdDate: null,
    modifiedByUserId: null,
    modifiedDate: null,
    isDeleted: false,
    deletedByByUserId: null,
    statusString: '',
    btnString: '',
    addedUser: '',
    modifiedUser: '',
    deletedUser: '',
    deletedDate: null
  };
 
  formSubmitted = false;
 
abbreviation: any;
 myform:FormGroup;
 textControl!: AbstractControl;
 text!:String;
 isAlive = true;
  constructor(private router: Router, private categoryService: CategoryService, private notificationService: NotificationService ,private createcategory:FormBuilder) {
 this.myform=this.createcategory.group({
  text: [null, [Validators.required, Validators.minLength(2),this.noWhiteSpaceValidator]]
 
 });

  }
  noWhiteSpaceValidator(control: AbstractControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true }
  }
    
  
  handleCreateNewItem() {

    
  }
  gotoPreviousPage(){
   alert("back")
   this.router.navigate(['/categories']);
  }
  
  get name() {
    return this.myform.get('name');
  }
  
  

  onSubmit(form: any) {

    this.formSubmitted=true;
    


    
    this.categoryService.postCategories(this.newCategory).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("Category Added Successfully", "Added")
        this.router.navigate(['/categories']);
      },
    
     error: (res) => {
       alert("Erro while Adding")
      }
    })
    
  
}
}





