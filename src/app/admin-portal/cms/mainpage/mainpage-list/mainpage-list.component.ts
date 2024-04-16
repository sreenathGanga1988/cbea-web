import { Component } from '@angular/core';
import { CustomApiResponse } from '../../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { CellType, Column } from '../../../shared/kidu-table/columns';

import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../../shared/kidu-table/kidu-table.component';
import { CategoryService } from '../../../../Services/category.service';

@Component({
  selector: 'app-mainpage-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent],
  templateUrl: './mainpage-list.component.html',
  styleUrl: './mainpage-list.component.css'
})
export class MainpageListComponent {
  headingText="MainPage";
  response!: CustomApiResponse;
  Items!:any[];

  constructor(private router: Router,private categoryService:CategoryService ) {


  }
  tableColumns: Array<Column> = [
    {columnDef:'id',header:'Serial#',colType:CellType.Text}
    ,{columnDef:'abbreviation',header:'Code',colType:CellType.Text},
    {columnDef:'name',header:'Name',colType:CellType.Text}
    ,{columnDef:'isActive',header:'Status',colType:CellType.Status}
    ,{columnDef:'btnString',header:'Actions',colType:CellType.Button} ];

    handleCreateNewItem() {

      this.router.navigate(['/mainPage-create']);
    }


}
