import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-kidu-confirm-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kidu-confirm-modal.component.html',
  styleUrl: './kidu-confirm-modal.component.css'
})
export class KiduConfirmModalComponent {
  @Input() data: string = 'Are you sure you want to proceed?'; // Confirmation message
  @Output() confirmed = new EventEmitter<boolean>(); // Confirmation event
  @Output() visibilityChange = new EventEmitter<boolean>(); // Visibility change event

  visible = false; // Flag to control modal visibility

  open() {
    this.visible = true;
    this.visibilityChange.emit(this.visible); // Emit visibility change
  }

  Confirm() {
    this.confirmed.emit(true);
    this.visible = false;
    this.visibilityChange.emit(this.visible); // Emit visibility change
  }

  Close() {
    this.confirmed.emit(false);
    this.visible = false;
    this.visibilityChange.emit(this.visible); // Emit visibility change
  }
}
