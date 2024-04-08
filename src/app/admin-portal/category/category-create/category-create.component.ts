import { Component } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { Router } from '@angular/router';
import { CategoryService } from '../../../Services/category.service';

@Component({
  selector: 'app-category-create',
  standalone: true,
  imports: [TitleBarComponent],
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css'
})
export class CategoryCreateComponent {
  headingText="New Categories"
  constructor(private router: Router,private categoryService: CategoryService ) {


  }
  handleCreateNewItem() {

    this.router.navigate(['/categories-create']);
  }
}
