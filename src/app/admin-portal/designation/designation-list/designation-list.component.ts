import { Component } from '@angular/core';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { DesignationService } from '../../../Services/designation-service';
import { CellType, Column } from '../../shared/kidu-table/columns';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';

@Component({
  selector: 'app-designation-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent],
  templateUrl: './designation-list.component.html',
  styleUrl: './designation-list.component.css'
})
export class DesignationListComponent {
  headingText="Designaton";
  response!: CustomApiResponse;
  Items!:any[];
  constructor(private router: Router,private categoryService: DesignationService ) {


  }
  tableColumns: Array<Column> = [
    {columnDef:'id',header:'Serial#',colType:CellType.Text}
    ,{columnDef:'abbreviation',header:'Code',colType:CellType.Text},
    {columnDef:'name',header:'Name',colType:CellType.Text}
    ,{columnDef:'isActive',header:'Status',colType:CellType.Status}
    ,{columnDef:'btnString',header:'Actions',colType:CellType.Button} ];
    handleCreateNewItem() {

      this.router.navigate(['/designation-create']);
    }

}
