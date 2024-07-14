import { Component,NgModule } from '@angular/core';

import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { FormsModule } from '@angular/forms';
import { Designation } from '../../../models/Common/designation-model';
import { Router } from '@angular/router';
import { DesignationService } from '../../../Services/designation-service';
import { NotificationService } from '../../../Services/Common/notification.service';
import { KiduConfirmModalComponent } from '../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation-create',
  standalone: true,
  imports: [TitleBarComponent,FormsModule,KiduConfirmModalComponent,CommonModule],
  templateUrl: './designation-create.component.html',
  styleUrl: './designation-create.component.css'
})
export class DesignationCreateComponent {
  headingText = "New Designation";
  newDesignation: Designation = {
    id: 0,
    name: '',
    description: '',
    isActive: false,
    createdByUserId: null,
    createdDate: null,
    modifiedByUserId: null,
    modifiedDate: null,
    isDeleted: false,
    deletedByByUserId: null,
    btnString: '',
    addedUser: '',
    modifiedUser: '',
    deletedUser: '',
    deletedDate: null
  };
  constructor(private router: Router, private designationService: DesignationService, private notificationService: NotificationService) {


  }
  handleCreateNewItem() {

    this.router.navigate(['/designations-create']);
  }
  onSubmit() {


    this.designationService.postDesignations(this.newDesignation).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("designation Added Successfully", "Added")
        this.router.navigate(['/designation']);
      },
      error: (res) => {
        alert("Error while Adding")
      }
    })
  }

}
