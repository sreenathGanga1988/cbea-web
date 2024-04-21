import { Component } from '@angular/core';
import { BranchService } from '../../../Services/branch.service ';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CellType, Column } from '../../shared/kidu-table/columns';

@Component({
  selector: 'app-branch-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent],
  templateUrl: './branch-list.component.html',
  styleUrl: './branch-list.component.css'
})
export class BranchListComponent {
  headingText="Branches";
  response!: CustomApiResponse;
  Items!:any[];
  constructor(private router: Router,private categoryService: BranchService ) {


  }
  tableColumns: Array<Column> = [
    {columnDef:'id',header:'Serial#',colType:CellType.Text}
    ,{columnDef:'abbreviation',header:'Code',colType:CellType.Text},
    {columnDef:'name',header:'Name',colType:CellType.Text}
    ,{columnDef:'isActive',header:'Status',colType:CellType.Status}
    ,{columnDef:'btnString',header:'Actions',colType:CellType.Button} ];
    handleCreateNewItem() {

      this.router.navigate(['/branch-create']);
    }

}
