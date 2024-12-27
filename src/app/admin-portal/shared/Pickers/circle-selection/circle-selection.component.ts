import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KiduDataPickerComponent } from '../../Modals/kidu-data-picker/kidu-data-picker.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-circle-selection',
  standalone: true,
  imports: [KiduDataPickerComponent,FormsModule,CommonModule],
  templateUrl: './circle-selection.component.html',
  styleUrl: './circle-selection.component.css'
})
export class CircleSelectionComponent {
  @Input() labeltext: string = ''; // State value
  @Input() selectedCircle: string = ''; // Circle value
  @Input() kiduDataPickerModel: any = {}; // Circle data picker model
  @Output() circleChange = new EventEmitter<string>(); // Emits when circle changes
  @Output() circleSelected = new EventEmitter<any>(); // Emits when circle is selected via picker

  onCircleChange(value: string) {
    this.circleChange.emit(value);
  }

  onCircleSelected(event: any) {
    this.circleSelected.emit(event);
  }
}
