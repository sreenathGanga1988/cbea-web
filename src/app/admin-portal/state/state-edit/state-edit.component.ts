import { Component } from '@angular/core';
import { State } from '../../../models/Common/state.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../../Services/state.service';
import { NotificationService } from '../../../Services/Common/notification.service';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';

import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule,AbstractControl ,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-state-edit',
  standalone: true,
  imports: [TitleBarComponent,FormsModule,CommonModule],
  templateUrl: './state-edit.component.html',
  styleUrl: './state-edit.component.css'
})
export class StateEditComponent {
  headingText = "Edit States";
  id: string = '';
  newStates! :State;
  myform!:FormGroup;
 isAlive = true;
  textControl!: AbstractControl;
  formSubmitted = false; 
constructor(private route: ActivatedRoute,private router: Router, private stateService: StateService, private notificationService: NotificationService,private stateEdit: FormBuilder) {
    this.myform=this.stateEdit.group({
      name: [null, [Validators.required, Validators.minLength(2),this.noWhiteSpaceValidator]]
     
     })

  }
  noWhiteSpaceValidator(control: AbstractControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true }
  }
    

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.id = id;
      this.getItem(id)
    } else {
      // Handle the case where id is null (e.g., redirect or show an error)
      console.error('ID is null');
    }
  }
 
  handleCreateNewItem() {

    
  }
 
   getItem(id:string){
    this.stateService.getStateById(Number(id)).subscribe({
      next: (res) => {

        if (res) {

          if (res.isSucess === true) {


              console.log(res);
              this.newStates=res.value;
              console.log(this.newStates);

            }
            else {
             alert(res.error);
          }
         // this._kiduTableModel.rows = res.rowData;
        }


      },
      error: (res) => {
        alert("Error while Adding")
      }
    })

  }
  onSubmit( form:any) {
   this.formSubmitted=true;

    this.stateService.putStates(Number(this.id),this.newStates).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("States Updated Successfully", "Added")
        this.router.navigate(['/states']);
      },
      error: (res) => {
        alert("Error while Adding")
      }
    })

  }

}
