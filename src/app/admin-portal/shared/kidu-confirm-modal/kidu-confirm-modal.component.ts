import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-kidu-confirm-modal',
  standalone: true,
  imports: [],
  templateUrl: './kidu-confirm-modal.component.html',
  styleUrl: './kidu-confirm-modal.component.css'
})
export class KiduConfirmModalComponent {



  @ViewChild('myModal') myModal!: ElementRef;
  constructor() { }
  ngOnInit(): void {
  }


  openModal() {
    this.myModal.nativeElement.style.display = 'block';
  }
  closeModal() {
    this.myModal.nativeElement.style.display = 'none';
  }

}
