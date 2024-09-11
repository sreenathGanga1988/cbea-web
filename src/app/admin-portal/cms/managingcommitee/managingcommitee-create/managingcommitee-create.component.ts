import { Component,NgModule } from '@angular/core';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule,FormGroup } from '@angular/forms';
import { Managingcomitee } from '../../../../models/Common/managingcomitee.model';
import { AbstractControl,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagingcomiteeService } from '../../../../Services/managingcomitee.service';
import { NotificationService } from '../../../../Services/Common/notification.service';
@Component({
  selector: 'app-managingcommitee-create',
  standalone: true,
  imports: [TitleBarComponent,CommonModule,FormsModule],
  templateUrl: './managingcommitee-create.component.html',
  styleUrl: './managingcommitee-create.component.css'
})
export class ManagingcommiteeCreateComponent {
  headingText = "New Team";
  newManagingCommitee: Managingcomitee = {
    id: 0,
    name: '',
    position: '',
    description1: '',
    description2:'',
    isActive: true,
   
    createdByUserId: null,
    createdDate: null,
    modifiedByUserId: null,
    modifiedDate: null,
    isDeleted: false,
    deletedByByUserId: null,
   // statusString: '',
    btnString: '',
    addedUser: '',
    modifiedUser: '',
    deletedUser: '',
    deletedDate: null
  };
  formSubmitted = false;
 
  abbreviation: any;
   myform:FormGroup;
   textControl!: AbstractControl;
   text!:String;
   isAlive = true;
    constructor(private router: Router, private ManagingcomiteeService: ManagingcomiteeService, private notificationService: NotificationService ,private formbuilder:FormBuilder) {
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
    
    get name() {
      return this.myform.get('name');
    }

onSubmit(form: any) {

  this.formSubmitted=true;
  
  this.newManagingCommitee.createdDate=new Date().toISOString();

  this.newManagingCommitee.createdDate=new Date().toISOString();
  this.newManagingCommitee.modifiedDate=new Date().toISOString();

  this.newManagingCommitee.modifiedByUserId=1;

  
  this.ManagingcomiteeService.postManagingComite(this.newManagingCommitee).subscribe({
    next: (res) => {
     this.notificationService.showSuccess("New team member is Added Successfully", "Added")
      this.router.navigate(['/managingcomitee']);
      console.log(this.newManagingCommitee);
    },
  
   error: (res) => {
     alert("Erro while Adding")
    }
  })
}
}