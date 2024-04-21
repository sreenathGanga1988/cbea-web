import { Component } from '@angular/core';
import { StatusService } from '../../../Services/status.service';
import { Router } from '@angular/router';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CellType, Column } from '../../shared/kidu-table/columns';

@Component({
  selector: 'app-status-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent],
  templateUrl: './status-list.component.html',
  styleUrl: './status-list.component.css'
})
export class StatusListComponent {
  headingText="Status";
  response!: CustomApiResponse;
  Items!:any[];

  constructor(private router: Router,private categoryService: StatusService ) {


  }
  tableColumns: Array<Column> = [
    {columnDef:'id',header:'Serial#',colType:CellType.Text}
    ,{columnDef:'abbreviation',header:'Code',colType:CellType.Text},
    {columnDef:'name',header:'Status',colType:CellType.Text}
    ,{columnDef:'description',header:'Description',colType:CellType.Button} 
    ,{columnDef:'btnString',header:'Actions',colType:CellType.Button} ];
    handleCreateNewItem() {

      this.router.navigate(['/status-create']);
    }
    ngOnInit(): void {


      this.GetItems();
    }
  GetItems() {
    this.categoryService.getStatus().subscribe({
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
