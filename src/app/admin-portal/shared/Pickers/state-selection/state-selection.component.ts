import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KiduDataPickerComponent } from '../../Modals/kidu-data-picker/kidu-data-picker.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-state-selection',
  standalone: true,
  imports: [KiduDataPickerComponent,FormsModule,CommonModule],
  templateUrl: './state-selection.component.html',
  styleUrl: './state-selection.component.css'
})
export class StateSelectionComponent {

  @Input() selectedState: string = ''; // State value
  @Input() labeltext: string = ''; // State value
  @Input() kiduDataPickerModelState: any = {}; // State data picker model
  @Output() stateChange = new EventEmitter<string>(); // Emits when state changes
  @Output() stateSelected = new EventEmitter<any>(); // Emits when state is selected via picker

  onStateChange(value: string) {
    this.stateChange.emit(value);
  }

  onStateSelected(event: any) {
    this.stateSelected.emit(event);
  }
}
