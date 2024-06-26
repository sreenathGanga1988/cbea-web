import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoryService } from '../../../Services/category.service';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { Category } from '../../../models/Common/category.model';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../Services/Common/notification.service';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [TitleBarComponent,FormsModule],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent {
  headingText = "Edit Categories";
  id: string = '';
  newCategory! :Category;

  // constructor(private route: ActivatedRoute,private categoryService :CategoryService) { }
  constructor(private route: ActivatedRoute,private router: Router, private categoryService: CategoryService, private notificationService: NotificationService) {


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
        alert("Erro while Adding")
      }
    })

  }

  onSubmit() {

    this.categoryService.putCategories(Number(this.id),this.newCategory).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("Category Updated Successfully", "Added")
        this.router.navigate(['/categories']);
      },
      error: (res) => {
        alert("Erro while Adding")
      }
    })

  }
}
