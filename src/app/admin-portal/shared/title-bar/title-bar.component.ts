import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  standalone: true,
  imports: [],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.css'
})
export class TitleBarComponent {
  @Input()
  headingText: String="";
  @Output() createNewItem: EventEmitter<void> = new EventEmitter<void>();
  addNewItem() {
    this.createNewItem.emit();
  }
}
