import { Component } from '@angular/core';
import { Branch } from '../../../models/Common/branch.model';
import { Router } from '@angular/router';
import { BranchService } from '../../../Services/branch.service ';
import { NotificationService } from '../../../Services/Common/notification.service';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CellType, KiduDataPickerModel } from '../../shared/kidu-table/columns';

import { KiduDataPickerComponent } from '../../shared/Modals/kidu-data-picker/kidu-data-picker.component';
@Component({
  selector: 'app-branch-create',
  standalone: true,
  imports: [TitleBarComponent,CommonModule,FormsModule,KiduDataPickerComponent],
  templateUrl: './branch-create.component.html',
  styleUrl: './branch-create.component.css'
})
export class BranchCreateComponent {

CircleSelected(obj: any) {
  if (obj[1] != null) {
    this.newBranch.circle= obj[1].label
  }
}
gotoPreviousPage() {
  alert("back")
  this.router.navigate(['/admin/Branches']);
}

_kiduDataPickerModel: KiduDataPickerModel= {
  tableColumns: [
    { columnDef: 'code', header: ' #', colType: CellType.Text },
    { columnDef: 'label', header: 'Circle ', colType: CellType.Text },
  ],
  rows: [],
  TopTittle: 'Select Circle',
  reporttype: "CIRCLE",
  pageSize: 0,
  pageNumber: 0

}
_kiduDataPickerModelState: KiduDataPickerModel= {
  tableColumns: [
    { columnDef: 'code', header: ' #', colType: CellType.Text },
    { columnDef: 'label', header: 'State ', colType: CellType.Text },
  ],
  rows: [],
  TopTittle: 'Select State',
  reporttype: "State",
  pageSize: 0,
  pageNumber: 0

}
  headingText = "Create New Branch";
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
    circle:'',
    state:'',
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
  
  
          this.notificationService.showSuccess("Branch Added Successfully", "Added")
          this.router.navigate(['/admin/branch']);
        },
        error: (res) => {
          alert("Error while Adding")
        }
      })
    }
    StateSelected(obj: any) {
      if (obj[1] != null) {
        this.newBranch.state= obj[1].label
      }
      }

}
