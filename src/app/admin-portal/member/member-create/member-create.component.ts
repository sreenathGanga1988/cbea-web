import { Component } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Member } from '../../../models/Common/member.model';
import { MemberService } from '../../../Services/member.service';
import { NotificationService } from '../../../Services/Common/notification.service';
import { CellType, KiduDataPickerModel } from '../../shared/kidu-table/columns';
import { KiduDataPickerComponent } from '../../shared/Modals/kidu-data-picker/kidu-data-picker.component';

@Component({
  selector: 'app-member-create',
  standalone: true,
  imports: [TitleBarComponent, CommonModule, FormsModule, RouterModule, KiduDataPickerComponent],
  templateUrl: './member-create.component.html',
  styleUrl: './member-create.component.css'
})
export class MemberCreateComponent {
  _kiduDataPickerModel1: KiduDataPickerModel = {
    tableColumns: [
      { columnDef: 'ID', header: 'Serial #', colType: CellType.Text },
      { columnDef: 'Name', header: 'Branch Name', colType: CellType.Text },
    ],
    rows: [],
    TopTittle: 'Select Branch',
    reporttype: "BRANCH",
    pageSize: 25,
    pageNumber: 0

  }
  _kiduDataPickerModel2: KiduDataPickerModel= {
    tableColumns: [
      { columnDef: 'Name', header: 'Code', colType: CellType.Text },
     // { columnDef: 'Description', header: 'Name', colType: CellType.Text },
    ],
    rows: [],
    TopTittle: 'Select Designation',
    reporttype: "Designation",
    pageSize: 0,
    pageNumber: 0

  }
  headingText="Create Member";
  newMember: Member={
    id: 0,
    staffno: null,
    name: '',
    gender: '',
    dob: null,
    doj: null,
    dojtoscheme: null,
    nominee: '',
    status: '',
    branchname: '',
    designation: '',
    isActive: false,
    createdByUserId: null,
    addedUser: '',
    createdDate: null,
    modifiedByUserId: null,
    modifiedUser: '',
    modifiedDate: null,
    isDeleted: false,
    deletedByByUserId: null,
    deletedUser: '',
    deletedDate: null
  };
  constructor(private router: Router, private memberService: MemberService, private notificationService: NotificationService ,){

  }
  
  
  gotoPreviousPage(){
   alert("back")
   this.router.navigate(['/admin/Member']);
  }
  onSubmit(form: any) {

   // this.formSubmitted=true;
    


    
    this.memberService.postCategories(this.newMember).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("Member Added Successfully", "Added")
        this.router.navigate(['/member']);
      },
    
     error: (res) => {
       alert("Error while Adding")
      }
    })
    
  
}
BranchSelected(obj: any) {
  if (obj[1] != null) {
    this.newMember.branchname = obj[1].label
  }

}
DesignationSelected(obj: any) {
  if (obj[1] != null) {
    this.newMember.designation= obj[1].label
  }
  
}

}
