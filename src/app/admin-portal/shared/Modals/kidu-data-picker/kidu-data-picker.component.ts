import { Component, Input } from '@angular/core';
import { KiduDataPickerModel } from '../../kidu-table/columns';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kidu-data-picker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kidu-data-picker.component.html',
  styleUrl: './kidu-data-picker.component.css'
})
export class KiduDataPickerComponent {
  @Input()
  _kiduDataPickerModel: KiduDataPickerModel;
  displayedColumns: Array<string> = [];
   sarchtxt:any;


   // _kiduTableModel: KiduTableModel = { tableColumns: [], isDeleteButton: false,isEditButton:false ,rows:[{}]optionalCol}; // Initialize with default values





  constructor() {
    // Initialize the kiduTableModel object
    this._kiduDataPickerModel = new KiduDataPickerModel();
    this._kiduDataPickerModel.tableColumns = [];
    this._kiduDataPickerModel.rows = []; // Initialize rows as an empty array

  }

  KiduPickSearchfun(sarchtxt:string) {

   // this.SearchTextfun.emit(this.sarchtxt);
   }

}
