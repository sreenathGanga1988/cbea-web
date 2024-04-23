import { Component } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CellType, Column } from '../../shared/kidu-table/columns';
import { Router } from '@angular/router';
import { CategoryService } from '../../../Services/category.service';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { ListRequest } from '../../../models/Common/listrequest.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [TitleBarComponent, KiduTableComponent,FormsModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  headingText = "Categories";
  response!: CustomApiResponse;
  Items!: any[];

  constructor(private router: Router, private categoryService: CategoryService) {


  }
  tableColumns: Array<Column> = [
    { columnDef: 'ID', header: 'Serial#', colType: CellType.Text }
    , { columnDef: 'Abbreviation', header: 'Code', colType: CellType.Text },
    { columnDef: 'Name', header: 'Name', colType: CellType.Text }
    , { columnDef: 'IsActive', header: 'Status', colType: CellType.Status }
    // ,{columnDef:'btnString',header:'Actions',colType:CellType.Button} 
  ];
  handleCreateNewItem() {

    this.router.navigate(['/categories-create']);
  };
  GlobalSearch(sarchtxt:string) {
    this.GlobalSearch(sarchtxt)
  }
  ngOnInit(): void {


    this.GetItems("");
  }

  GetItems(searchtext: string) {


    this.categoryService.getCategoriesAsync(searchtext, 0, 0).subscribe({
      next: (res) => {

        if (res) {
          this.Items = res.rowData;
        }
        console.log(this.Items)
        // this.response = res;
        // alert("Hi")
        // if (this.response.isSucess === true) {


        //   console.log(res);

        // }
        // else {
        //   alert(this.response.error);
        // }

      },
      error: (res) => {
        alert("Erro while Adding")
      }
    })
  }
}
