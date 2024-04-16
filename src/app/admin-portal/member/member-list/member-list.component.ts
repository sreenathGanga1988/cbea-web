import { Component } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { CellType, Column } from '../../shared/kidu-table/columns';
import { UserTypeService } from '../../../Services/usertype.service';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent {
  headingText="Member";
  response!: CustomApiResponse;
  Items!:any[];

  constructor(private router: Router,private categoryService:UserTypeService) {
  
  }
  tableColumns: Array<Column> = [
    {columnDef:'id',header:'Serial#',colType:CellType.Text}
    ,{columnDef:'abbreviation',header:'Code',colType:CellType.Text},
    {columnDef:'name',header:'Name',colType:CellType.Text}
    ,{columnDef:'isActive',header:'Status',colType:CellType.Status}
    ,{columnDef:'btnString',header:'Actions',colType:CellType.Button} ];
    handleCreateNewItem() {

      this.router.navigate(['/member-create']);
    }

}
