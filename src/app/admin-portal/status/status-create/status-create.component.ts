import { Component,NgModule } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { FormBuilder, FormsModule,Validators,FormGroup,AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Status } from '../../../models/Common/status.model';
import { Router } from '@angular/router';
import { StatusService } from '../../../Services/status.service';
import { NotificationService } from '../../../Services/Common/notification.service';

@Component({
  selector: 'app-status-create',
  standalone: true,
  imports: [TitleBarComponent, FormsModule,CommonModule],
  templateUrl: './status-create.component.html',
  styleUrl: './status-create.component.css'
})
export class StatusCreateComponent {
  headingText = "New Status";
  newStatus: Status = {
    id: 0,
    name: '',
    abbreviation: '',
    description:'',
    groupCode:'',
    groupId:null,
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
  formSubmitted=true;
  myform:FormGroup;
 textControl!: AbstractControl;
 text!:String;
 isAlive = true;
  constructor(private router: Router, private statusService: StatusService, private notificationService: NotificationService ,private formbuilder:FormBuilder) {
    this.myform=this.formbuilder.group({
     text: [null, [Validators.required, Validators.minLength(2),this.noWhiteSpaceValidator]]
    
    });
}
noWhiteSpaceValidator(control: AbstractControl) {
  const isWhitespace = (control.value || '').trim().length === 0;
  const isValid = !isWhitespace;
  return isValid ? null : { 'whitespace': true }
}
handleCreateNewItem() {

  
}
gotoPreviousPage(){
  alert("back")
   this.router.navigate(['/admin/status']);
  }
onSubmit(form: any) {

  this.formSubmitted=true;
  this.statusService.postStatus(this.newStatus).subscribe({
    next: (res) => {


      this.notificationService.showSuccess("Status Added Successfully", "Added")
      this.router.navigate(['/admin/status']);
    },
  
   error: (res) => {
     alert("Error while Adding")
    }
  })
  

}
}


