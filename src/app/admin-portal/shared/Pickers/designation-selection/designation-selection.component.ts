import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KiduDataPickerComponent } from '../../Modals/kidu-data-picker/kidu-data-picker.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-designation-selection',
  standalone: true,
  imports: [KiduDataPickerComponent,FormsModule,CommonModule],
  templateUrl: './designation-selection.component.html',
  styleUrl: './designation-selection.component.css'
})
export class DesignationSelectionComponent {

  @Input() labelText: string = 'Designation'; // Label text
  @Input() selectedDesignation: string = ''; // Selected designation
  @Input() kiduDataPickerModel: any = {}; // Data picker model
  @Output() designationChange = new EventEmitter<string>(); // Emits when designation changes
  @Output() designationSelected = new EventEmitter<any>(); // Emits when designation is selected via picker

  onDesignationChange(value: string) {
    this.designationChange.emit(value);
  }

  onDesignationSelected(event: any) {
    this.designationSelected.emit(event);
  }
}
