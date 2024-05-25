import { Component } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { UserTypeService } from '../../../Services/usertype.service';
import { Router } from '@angular/router';
import { CellType, Column } from '../../shared/kidu-table/columns';

@Component({
  selector: 'app-usertype-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent],
  templateUrl: './usertype-list.component.html',
  styleUrl: './usertype-list.component.css'
})
export class UsertypeListComponent {
  headingText="User Types";
  response!: CustomApiResponse;
  Items!:any[];
  constructor(private router: Router,private categoryService: UserTypeService ) {


  }
  tableColumns: Array<Column> = [
    {columnDef:'id',header:'Serial#',colType:CellType.Text}
    ,{columnDef:'abbreviation',header:'Abbreviation',colType:CellType.Text}

    ,{columnDef:'description',header:'Description',colType:CellType.Button}
    ,{columnDef:'isActive',header:'Status',colType:CellType.Status}
    // ,{columnDef:'btnString',header:'Actions',colType:CellType.Button}
  ];
    handleCreateNewItem() {

      this.router.navigate(['/usertypes-create']);
    }
    ngOnInit(): void {


      this.GetItems();
    }
  GetItems() {
    this.categoryService.getUserTypes().subscribe({
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
        alert("Error while Adding")
      }
    })

  }

}
