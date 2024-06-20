import { Component, NgModule } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../Services/Common/notification.service';
import { State } from '../../../models/Common/state.model';
import { StateService } from '../../../Services/state.service';

@Component({
  selector: 'app-state-create',
  standalone: true,
  imports: [TitleBarComponent, FormsModule],
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
  constructor(private router: Router, private stateService: StateService, private notificationService: NotificationService) {


  }
  handleCreateNewItem() {

    this.router.navigate(['/states-create']);
  }


  onSubmit() {


    this.stateService.postStates(this.newState).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("state Added Successfully", "Added")
        this.router.navigate(['/states']);
      },
      error: (res) => {
        alert("Error while Adding")
      }
    })
  }
}




