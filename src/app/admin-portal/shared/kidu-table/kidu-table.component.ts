import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CellType, Column, KiduTableModel } from './columns';
import { KiduConfirmModalComponent } from '../Modals/kidu-confirm-modal/kidu-confirm-modal.component';


@Component({
  selector: 'app-kidu-table',
  standalone: true,
  imports: [CommonModule, FormsModule, KiduConfirmModalComponent],
  templateUrl: './kidu-table.component.html',
  styleUrl: './kidu-table.component.css'
})
export class KiduTableComponent {


  _currentrowitem: any

  public isLoading: boolean = true; // This will be true initially

  @Input()
  // _kiduTableModel: KiduTableModel = { tableColumns: [], isDeleteButton: false,isEditButton:false ,rows:[{}]optionalCol}; // Initialize with default values


  _kiduTableModel: KiduTableModel;

  displayedColumns: Array<string> = [];


  constructor() {

    this.isLoading = true; // Call the function to load rows initially

    // Initialize the kiduTableModel object
    this._kiduTableModel = new KiduTableModel();
    this._kiduTableModel.tableColumns = [];
    this._kiduTableModel.isDeleteButton = true;
    this._kiduTableModel.isEditButton = true;
    this._kiduTableModel.rows = []; // Initialize rows as an empty array
    this._kiduTableModel.StatusColumns = []; // Initialize StatusColumns as an empty array
    this._kiduTableModel.deleteconfirmationmessage = "";
  }


  //sarchtxt: string = "";
  sarchtxt: any;


  @ViewChild('confirmBox') confirmBox!: KiduConfirmModalComponent;


  @Output() SearchTextfun: EventEmitter<string> = new EventEmitter<string>();

  @Output() EditButtonClickfun: EventEmitter<any> = new EventEmitter<any>();

  @Output() ConfirmActionFun: EventEmitter<any> = new EventEmitter<any>();

  @Output() pageChange: EventEmitter<number> = new EventEmitter<any>();
  GlobalSearchfun(sarchtxt: string) {

    this.SearchTextfun.emit(this.sarchtxt);
  }

  EditClicked(item: any) {

    this._currentrowitem = item;
    this.EditButtonClickfun.emit(item);
  }
  ngOnInit(): void {

    setTimeout(() => {
      this.displayedColumns = this._kiduTableModel.tableColumns.map((c) => c.columnDef);
      this.isLoading = false; // Set loading to false when data is loaded
    }, 500); // Simulated delay

    // this.displayedColumns = this._kiduTableModel.tableColumns.map((c) => c.columnDef);

  };

   isPositiveStatus(itemValue: any): boolean {

    if (itemValue == true) {
      return true;
    }
    else if (itemValue == 'Active')
      {
      return true;
    }
    else{return false;}

    }


  openConfirmBox(item: any) {
    this._currentrowitem = item;
    this.confirmBox.open(); // Call the open method on the confirm box component
  }

  handleConfirmation(confirmed: boolean) {

    this.ConfirmActionFun.emit([confirmed, this._currentrowitem])
  }

  handleVisibilityChange(visible: boolean) {
    // Handle modal visibility changes (optional)
  }




}
