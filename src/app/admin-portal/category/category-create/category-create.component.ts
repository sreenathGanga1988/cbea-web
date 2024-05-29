import { Component, NgModule } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { Router } from '@angular/router';
import { CategoryService } from '../../../Services/category.service';
import { Category } from '../../../models/Common/category.model';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../Services/Common/notification.service';

@Component({
  selector: 'app-category-create',
  standalone: true,
  imports: [TitleBarComponent, FormsModule],
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
  constructor(private router: Router, private categoryService: CategoryService, private notificationService: NotificationService) {


  }
  handleCreateNewItem() {

    this.router.navigate(['/categories-create']);
  }


  onSubmit() {


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




