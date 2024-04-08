import { Component } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CellType, Column } from '../../shared/kidu-table/columns';
import { Router } from '@angular/router';
import { StateService } from '../../../Services/state.service';
import { CategoryService } from '../../../Services/category.service';

@Component({
  selector: 'app-state-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent],
  templateUrl: './state-list.component.html',
  styleUrl: './state-list.component.css'
})
export class StateListComponent {


  constructor(private router: Router,private categoryService: CategoryService ) {


  }

  headingText="State";
  Items!:any[];
  tableColumns: Array<Column> = [
    {columnDef:'id',header:'Serial#',colType:CellType.Text}
    ,{columnDef:'abbreviation',header:'Code',colType:CellType.Text},
    {columnDef:'name',header:'Name',colType:CellType.Text}
    ,{columnDef:'isActive',header:'Status',colType:CellType.Status}
    ,{columnDef:'btnString',header:'Actions',colType:CellType.Button} ];

    handleCreateNewItem() {

      this.router.navigate(['/states-create']);
    }

}
