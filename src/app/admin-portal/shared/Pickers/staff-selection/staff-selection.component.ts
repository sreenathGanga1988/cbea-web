import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KiduDataPickerComponent } from '../../Modals/kidu-data-picker/kidu-data-picker.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-staff-selection',
  standalone: true,
  imports: [KiduDataPickerComponent,FormsModule,CommonModule],
  templateUrl: './staff-selection.component.html',
  styleUrl: './staff-selection.component.css'
})
export class StaffSelectionComponent {

  @Input() labelText: string = 'Staff No'; // Label text
  @Input() selectedStaffNo: string = ''; // Selected staff number
  @Input() kiduDataPickerModel: any = {}; // Data picker model
  @Output() staffNoChange = new EventEmitter<string>(); // Emits when staff number changes
  @Output() staffNoSelected = new EventEmitter<any>(); // Emits when staff number is selected via picker

  onStaffNoChange(value: string) {
    this.staffNoChange.emit(value);
  }

  onStaffNoSelected(event: any) {
    this.staffNoSelected.emit(event);
  }
}
