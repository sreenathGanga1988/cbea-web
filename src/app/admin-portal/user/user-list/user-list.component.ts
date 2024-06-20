import { Component } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { UserTypeService } from '../../../Services/usertype.service';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { CellType, Column, KiduTableModel } from '../../shared/kidu-table/columns';
import { CommonModule } from '@angular/common';
import { KiduConfirmModalComponent } from '../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../Services/Common/notification.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [TitleBarComponent,KiduTableComponent,KiduTableComponent,CommonModule,KiduConfirmModalComponent,FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  headingText="User";
  response!: CustomApiResponse;
  Items!:any[];
  
  
  
 
}