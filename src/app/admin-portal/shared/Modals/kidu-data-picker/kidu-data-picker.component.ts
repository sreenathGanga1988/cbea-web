import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KiduDataPickerModel } from '../../kidu-table/columns';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LookUpService } from '../../../../Services/lookup.service';

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
  sarchtxt: any;
  visible = false; // Flag to control modal visibility




  @Output() PopUpSelected: EventEmitter<any> = new EventEmitter<any>();


  constructor(private lookupservice: LookUpService) {
    // Initialize the kiduTableModel object
    this._kiduDataPickerModel = new KiduDataPickerModel();
    this._kiduDataPickerModel.tableColumns = [];
    this._kiduDataPickerModel.rows = []; // Initialize rows as an empty array


  }
  onModalOpen(): void {
    this.visible = true;
    this.KiduPickSearchfun("");


  }




  Close() {

    this.visible = false;

  }



  KiduDataPickerRoWSelected(obj: any): void {

    this.visible = false;
    this.PopUpSelected.emit([this._kiduDataPickerModel.reporttype, obj]); // Emit visibility change
  }

  KiduPickSearchfun(sarchtxt: string) {


    this.lookupservice.getLookUpDatasync(this._kiduDataPickerModel.reporttype, sarchtxt, this._kiduDataPickerModel.pageNumber, this._kiduDataPickerModel.pageSize, "").subscribe({
      next: (res) => {
        ""
        this._kiduDataPickerModel.rows = res.items;
      },
      error: (res) => {
        alert("Error while Adding")
      }
    })

  }

}
