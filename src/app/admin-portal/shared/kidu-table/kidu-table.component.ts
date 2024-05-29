import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CellType, Column, KiduTableModel } from './columns';
import { KiduConfirmModalComponent } from '../kidu-confirm-modal/kidu-confirm-modal.component';

@Component({
  selector: 'app-kidu-table',
  standalone: true,
  imports: [CommonModule,KiduConfirmModalComponent,FormsModule],
  templateUrl: './kidu-table.component.html',
  styleUrl: './kidu-table.component.css'
})
export class KiduTableComponent {

  @Input()
  // _kiduTableModel: KiduTableModel = { tableColumns: [], isDeleteButton: false,isEditButton:false ,rows:[{}]optionalCol}; // Initialize with default values


  _kiduTableModel: KiduTableModel;

  displayedColumns: Array<string> = [];


  constructor() {
    // Initialize the kiduTableModel object
    this._kiduTableModel = new KiduTableModel();
    this._kiduTableModel.tableColumns = [];
    this._kiduTableModel.isDeleteButton = true;
    this._kiduTableModel.isEditButton = true;
    this._kiduTableModel.rows = []; // Initialize rows as an empty array
    this._kiduTableModel.StatusColumns = []; // Initialize StatusColumns as an empty array
  }


  sarchtxt :string ="";
  @Output() SearchTextfun: EventEmitter<string> = new EventEmitter<string>();

  @Output() EditButtonClickfun: EventEmitter<any> = new EventEmitter<any>();
  GlobalSearchfun() {
   // alert(this.sarchtxt)
    //this.sarchtxt='sr.';
    this.SearchTextfun.emit(this.sarchtxt);
  }

  EditClicked(item :any){

    this.EditButtonClickfun.emit(item);
  }
  ngOnInit(): void {

    this.displayedColumns = this._kiduTableModel.tableColumns.map((c) => c.columnDef);
  };

  openModal() {
    //this.modalComponent.openModal();
  }

}
