import { Component } from '@angular/core';
import { TitleBarComponent } from "../../shared/title-bar/title-bar.component";
import { Router } from '@angular/router';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CellType, Column } from '../../shared/kidu-table/columns';

@Component({
    selector: 'app-circle-list',
    standalone: true,
    templateUrl: './circle-list.component.html',
    styleUrl: './circle-list.component.css',
    imports: [TitleBarComponent,KiduTableComponent]
})
export class CircleListComponent {

  headingText="Circles";

  tableColumns: Array<Column> = [
    {columnDef:'id',header:'ID',colType:CellType.Text}
    ,{columnDef:'dpCode',header:'DpCode',colType:CellType.Text},
    {columnDef:'name',header:'Name',colType:CellType.Text}
    ,{columnDef:'isActive',header:'Status',colType:CellType.Status}
    // ,{columnDef:'btnString',header:'Actions',colType:CellType.Button}
  ];

  constructor(private router: Router) {}



  handleCreateNewItem() {

    this.router.navigate(['/circles-create']);
  }
  ngOnInit(): void {

  }

}


