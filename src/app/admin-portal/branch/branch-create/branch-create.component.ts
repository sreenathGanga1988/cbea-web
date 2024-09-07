import { Component } from '@angular/core';
import { Branch } from '../../../models/Common/branch.model';
import { Router } from '@angular/router';
import { BranchService } from '../../../Services/branch.service ';
import { NotificationService } from '../../../Services/Common/notification.service';

@Component({
  selector: 'app-branch-create',
  standalone: true,
  imports: [],
  templateUrl: './branch-create.component.html',
  styleUrl: './branch-create.component.css'
})
export class BranchCreateComponent {
  headingText = "New State";
  newBranch: Branch = {
    id: 0,
     dpCode:null,
     circleId:null,
    isActive: false,
    stateId:null,
    name:'',
    createdByUserId: null,
    address1:'',
    address2:'',
    address3:'',
    district:'',
    isRegCompleted:false,
    status:'',
    circle_text:'',
    state_text:'',
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
  constructor(private router: Router, private branchservice: BranchService, private notificationService: NotificationService) {


  }
  handleCreateNewItem() {

    this.router.navigate(['/Branches-create']);
  }
  onSubmit(form:any) {
    this.newBranch.createdDate=new Date().toISOString();
  
      this.newBranch.createdDate=new Date().toISOString();
      this.newBranch.modifiedDate=new Date().toISOString();
  
      this.newBranch.modifiedByUserId=1;
      
      this.branchservice.postBranch(this.newBranch).subscribe({
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
