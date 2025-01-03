import { Component, NgModule } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule,AbstractControl ,FormGroup,Validators} from '@angular/forms';
import { NotificationService } from '../../../Services/Common/notification.service';
import { State } from '../../../models/Common/state.model';
import { StateService } from '../../../Services/state.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-state-create',
  standalone: true,
  imports: [TitleBarComponent, FormsModule,CommonModule],
  templateUrl: './state-create.component.html',
  styleUrl: './state-create.component.css'
})
export class StateCreateComponent {
  headingText = "New State";
  newState: State = {
    id: 0,
    name: '',
    abbreviation: '',
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
  myform:FormGroup;
  textControl!: AbstractControl;
  isAlive = true;
  constructor(private router: Router, private stateService: StateService, private notificationService: NotificationService,private createState:FormBuilder) {
    this.myform=this.createState.group({
      name: [null, [Validators.required, Validators.minLength(2),this.noWhiteSpaceValidator]]
     
     })

  }
  noWhiteSpaceValidator(control: AbstractControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true }
  }
  
  gotoPreviousPage(){
    alert("back")
    this.router.navigate(['/admin/states']);
   }
  

  onSubmit(myform:any) {
  

    this.newState.createdDate=new Date().toISOString();
    this.newState.modifiedDate=new Date().toISOString();

    this.newState.modifiedByUserId=1;
    
    this.stateService.postStates(this.newState).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("state Added Successfully", "Added")
        this.router.navigate(['/admin/states']);
        console.log(this.myform)
      },
      error: (res) => {
        alert("Error while Adding")
      }
    })
  }
}




