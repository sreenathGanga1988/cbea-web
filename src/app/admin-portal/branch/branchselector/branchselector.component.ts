import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { KiduConfirmModalComponent } from "../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component";


@Component({
    selector: 'app-branchselector',
    standalone: true,
    templateUrl: './branchselector.component.html',
    styleUrl: './branchselector.component.css',
    imports: [CommonModule, KiduConfirmModalComponent]
})
export class BranchselectorComponent  {

  data = 'Do you want to confirm this action?';

  @ViewChild('confirmBox') confirmBox!: KiduConfirmModalComponent;
  openConfirmBox() {
    this.confirmBox.open(); // Call the open method on the confirm box component
  }

  handleConfirmation(confirmed: boolean) {
    alert(confirmed)
    // ... Handle confirmation or cancellation
  }

  handleVisibilityChange(visible: boolean) {
    // Handle modal visibility changes (optional)
  }
}
