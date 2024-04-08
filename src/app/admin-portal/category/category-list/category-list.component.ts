import { Component } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CellType, Column } from '../../shared/kidu-table/columns';
import { Router } from '@angular/router';
import { CategoryService } from '../../../Services/category.service';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { ListRequest } from '../../../models/Common/listrequest.model';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  headingText="Categories";
  response!: CustomApiResponse;
  Items!:any[];

  constructor(private router: Router,private categoryService: CategoryService ) {


  }
  tableColumns: Array<Column> = [
    {columnDef:'id',header:'Serial#',colType:CellType.Text}
    ,{columnDef:'abbreviation',header:'Code',colType:CellType.Text},
    {columnDef:'name',header:'Name',colType:CellType.Text}
    ,{columnDef:'isActive',header:'Status',colType:CellType.Status}
    ,{columnDef:'btnString',header:'Actions',colType:CellType.Button} ];
    handleCreateNewItem() {

      this.router.navigate(['/categories-create']);
    }
    ngOnInit(): void {


      this.GetItems();
    }

    GetItems() {


      this.categoryService.getCategories("",0,0).subscribe({
        next: (res) => {
          this.response = res;
          if (this.response.isSucess == true) {
            this.Items=this.response.value;
            console.log(res);

          }
          else {
            alert(this.response.error);
          }

        },
        error: (res) => {
          alert("Erro while Adding")
        }
      })
    }
}
