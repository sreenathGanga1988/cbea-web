import { Component, Input } from '@angular/core';
import { Column } from './columns';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kidu-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kidu-table.component.html',
  styleUrl: './kidu-table.component.css'
})
export class KiduTableComponent {
  @Input()
  tableColumns: Array<Column> = [];
  @Input()
  rows: any[]| undefined;
  displayedColumns: Array<string> = [];
  @Input()
  isEditButton :boolean= false
  @Input()
  isDeleteButton :boolean= false
  ngOnInit(): void {

    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
  };
}
