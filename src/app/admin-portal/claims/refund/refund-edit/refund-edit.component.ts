import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { CommonModule } from '@angular/common';
import { Refund } from '../../../../models/Common/refund.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RefundService } from '../../../../Services/refund.service';
import { NotificationService } from '../../../../Services/Common/notification.service';

@Component({
  selector: 'app-refund-edit',
  standalone: true,
  imports: [TitleBarComponent,CommonModule,FormsModule],
  templateUrl: './refund-edit.component.html',
  styleUrl: './refund-edit.component.css'
})
export class RefundEditComponent {
gotoPreviousPage() {
throw new Error('Method not implemented.');
}

  headingText = "Edit Refund";
  id: string = '';
  
   }

  

 

