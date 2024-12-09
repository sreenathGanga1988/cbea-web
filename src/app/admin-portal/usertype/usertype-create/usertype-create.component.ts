import { Component } from '@angular/core';
import { UserType } from '../../../models/Common/userType.model';
import { UserTypeService } from '../../../Services/usertype.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../Services/Common/notification.service';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule,FormGroup,AbstractControl,Validators } from '@angular/forms';

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
  myform:FormGroup;
 textControl!: AbstractControl;
 text!:String;
 isAlive = true;
  
  constructor(private router: Router, private usertypeService: UserTypeService, private notificationService: NotificationService,private formsbuilder:FormBuilder) {
    this.myform=this.formsbuilder.group({
      text: [null, [Validators.required, Validators.minLength(2),this.noWhiteSpaceValidator]]
     
     });

  }
  noWhiteSpaceValidator(control: AbstractControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true }
  }
  handleCreateNewItem() {

    this.router.navigate(['/admin/usertypes-create']);
  }
  gotoPreviousPage(){
    alert("back")
     this.router.navigate(['/admin/usertypes']);
    }
 
  onSubmit(form: any) {

   this.usertypeService.postUserTypes(this.newUsertype).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("Usertypes Added Successfully", "Added")
        this.router.navigate(['/admin/usertypes']);
      },
    
     error: (res) => {
       alert("Error while Adding")
      }
    })
    
  
}
}
