import { Component } from '@angular/core';
import { UserType } from '../../../models/Common/userType.model';
import { UserTypeService } from '../../../Services/usertype.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../Services/Common/notification.service';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usertype-create',
  standalone: true,
  imports: [TitleBarComponent,CommonModule,FormsModule],
  templateUrl: './usertype-create.component.html',
  styleUrl: './usertype-create.component.css'
})
export class UsertypeCreateComponent {
  headingText = "New User Types";
  newUsertype: UserType = {
    id: 0,
    name: '',
    abbreviation: '',
    description:'',
    isActive: false,
    createdByUserId: null,
    createdDate: null,
    modifiedByUserId: null,
    modifiedDate: null,
    isDeleted: false,
    deletedByByUserId: null,
    statusString: '',
    btnString: '',
    addedUser: '',
    modifiedUser: '',
    deletedUser: '',
   deletedDate: null
  };
  constructor(private router: Router, private usertypeService: UserTypeService, private notificationService: NotificationService) {


  }
  handleCreateNewItem() {

    this.router.navigate(['/usertypes-create']);
  }
  onSubmit(form: any) {

   this.usertypeService.postUserTypes(this.newUsertype).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("Usertypes Added Successfully", "Added")
        this.router.navigate(['/usertypes']);
      },
    
     error: (res) => {
       alert("Error while Adding")
      }
    })
    
  
}
}
