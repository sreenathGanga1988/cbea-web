import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.css'
})
export class TitleBarComponent {
  @Input()
  headingText: String="";
  @Input()
  isListMode : number=0;
  @Output() gotoPreviousPage: EventEmitter<void> = new EventEmitter<void>();

  @Output() createNewItem: EventEmitter<void> = new EventEmitter<void>();
  addNewItem() {
    this.createNewItem.emit();
  }

  goToPrevious() {
    this.gotoPreviousPage.emit();
  }
}
