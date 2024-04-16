import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../../shared/kidu-table/kidu-table.component';
import { CustomApiResponse } from '../../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { CategoryService } from '../../../../Services/category.service';

@Component({
  selector: 'app-managingcommitee-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent],
  templateUrl: './managingcommitee-list.component.html',
  styleUrl: './managingcommitee-list.component.css'
})
export class ManagingcommiteeListComponent {
  headingText="Managing Commtiee";
  response!: CustomApiResponse;
  Items!:any[];

  constructor(private router: Router,private categoryService: CategoryService ) {


  }
  handleCreateNewItem() {

    this.router.navigate(['/managingcomitee-create']);
  }

}
