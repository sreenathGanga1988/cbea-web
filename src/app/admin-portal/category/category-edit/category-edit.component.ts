import { Component ,NgModule} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoryService } from '../../../Services/category.service';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { Category } from '../../../models/Common/category.model';
import { FormsModule,Validators,FormBuilder,AbstractControl } from '@angular/forms';
import { NotificationService } from '../../../Services/Common/notification.service';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [TitleBarComponent,FormsModule,CommonModule],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent {
  headingText = "Edit Categories";
  id: string = '';
  newCategory! :Category;
  textControl!: AbstractControl;
  myform:FormGroup;
  isAlive = true;
  formSubmitted = false;
  // constructor(private route: ActivatedRoute,private categoryService :CategoryService) { }
  constructor(private route: ActivatedRoute,private router: Router, private categoryService: CategoryService, private notificationService: NotificationService,private editcategory:FormBuilder) {

    this.myform=this.editcategory.group({
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

   // this.router.navigate(['/categories-create']);
  }
  gotoPreviousPage(){
    alert("back")
     this.router.navigate(['/admin/categories']);
    }
  get name() {
    return this.myform.get('name');
  }
  getItem(id:string){
    this.categoryService.getCategoriesById(Number(id)).subscribe({
      next: (res) => {

        if (res) {

          if (res.isSucess === true) {


              console.log(res);
              this.newCategory=res.value;
              console.log(this.newCategory);

            }
            else {
             alert(res.error);
          }
         // this._kiduTableModel.rows = res.rowData;
        }


      },
      error: (res) => {
        alert("Error while Adding")
      }
    })

  }

  onSubmit(form:any) {
    this.formSubmitted=true;
    this.categoryService.putCategories(Number(this.id),this.newCategory).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("Category Updated Successfully", "Added")
        this.router.navigate(['/admin/categories']);
      },
      error: (res) => {
        alert("Error while Adding")
      }
    })

  }
}
