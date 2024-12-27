import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KiduDataPickerComponent } from '../../Modals/kidu-data-picker/kidu-data-picker.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-branch-selection',
  standalone: true,
  imports: [KiduDataPickerComponent,FormsModule,CommonModule],
  templateUrl: './branch-selection.component.html',
  styleUrl: './branch-selection.component.css'
})
export class BranchSelectionComponent {

  @Input() labelText: string = 'Branch Name'; // Label text
  @Input() selectedBranchName: string = ''; // Selected branch name
  @Input() kiduDataPickerModel: any = {}; // Data picker model
  @Output() branchChange = new EventEmitter<string>(); // Emits when branch name changes
  @Output() branchSelected = new EventEmitter<any>(); // Emits when branch is selected via picker

  onBranchChange(value: string) {
    this.branchChange.emit(value);
  }

  onBranchSelected(event: any) {
    this.branchSelected.emit(event);
  }
}
