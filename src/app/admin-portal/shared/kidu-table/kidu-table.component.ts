import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Column } from './columns';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kidu-table',
  standalone: true,
  imports: [CommonModule,FormsModule],
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

  sarchtxt :string ="";
  @Output() SearchTextfun: EventEmitter<string> = new EventEmitter<string>();
  GlobalSearchfun() {
   // alert(this.sarchtxt)
    //this.sarchtxt='sr.';
    this.SearchTextfun.emit(this.sarchtxt);
  }
  ngOnInit(): void {

    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
  };
}
