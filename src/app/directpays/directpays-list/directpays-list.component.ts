import { Component } from '@angular/core';
import { TitleBarComponent } from '../../admin-portal/shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../admin-portal/shared/kidu-table/kidu-table.component';
import { CustomApiResponse } from '../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-directpays-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent],
  templateUrl: './directpays-list.component.html',
  styleUrl: './directpays-list.component.css'
})
export class DirectpaysListComponent {
  headingText="Direct Pays";
  response!: CustomApiResponse;
  Items!:any[];

  constructor(private router: Router,private categoryService: CategoryService ) {


  }
  handleCreateNewItem() {

    this.router.navigate(['/directpays-create']);
  }

}
