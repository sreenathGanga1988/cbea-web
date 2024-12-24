import { Component,EventEmitter,NgModule } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

import { Member } from '../../../models/Common/member.model';
import { MemberService } from '../../../Services/member.service';
import { NotificationService } from '../../../Services/Common/notification.service';
import { CellType, KiduDataPickerModel } from '../../shared/kidu-table/columns';
import { KiduDataPickerComponent } from '../../shared/Modals/kidu-data-picker/kidu-data-picker.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-member-create',
  standalone: true,
  imports: [TitleBarComponent, CommonModule, FormsModule, KiduDataPickerComponent],
  templateUrl: './member-create.component.html',
  styleUrl: './member-create.component.css'
})
export class MemberCreateComponent {

  
  _kiduDataPickerModel2: KiduDataPickerModel= {
    tableColumns: [
      { columnDef: 'code', header: ' #', colType: CellType.Text },
      { columnDef: 'label', header: 'Designation Name ', colType: CellType.Text },
     
    ],
    rows: [],
    TopTittle: 'Select Designation',
    reporttype: "DESIGNATION",
    pageSize: 25,
    pageNumber: 0

  }
   
  _kiduDataPickerModel1: KiduDataPickerModel= {
    tableColumns: [
      { columnDef: 'code', header: ' #', colType: CellType.Text },
      { columnDef: 'label', header: 'Branch Name ', colType: CellType.Text },
     
    ],
    rows: [],
    TopTittle: 'Select Branch',
    reporttype: "BRANCH",
    pageSize: 25,
    pageNumber: 0

  }
  headingText="Create Member";
  newMember: Member={
    id: 0,
    staffNo: 0,
    name: '',
   
    gender: '',
    dob: null,
    doj: null,
    dojtoscheme: null,
    nominee: '',
   // status:true,
    branchname: '',
    Designation: '',
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

formSubmitted=false;
myform:FormGroup;
textControl!: AbstractControl;
text!:String;
isAlive = true;
  constructor(private router: Router, private memberService: MemberService, private notificationService: NotificationService ,private createmember:FormBuilder){
    this.myform=this.createmember.group({
      name: ['', Validators.required]
      
     // text: [null, [Validators.required, Validators.minLength(2),this.noWhiteSpaceValidator]]
     
     });
     
  }
  
  noWhiteSpaceValidator(control: AbstractControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true }
  }
  gotoPreviousPage(){
   alert("back")
   this.router.navigate(['/admin/Member']);
  }
  getItem(id:string){
    return this.myform.get('name');
  }
  DesignationSelected(obj: any) {
    if (obj[1] != null) {
     this.newMember.Designation= obj[1].label
     //this.newMember.Designation=JSON.parse(obj[1].label)
    }
  }
  BranchSelected(obj: any) {
    if (obj[1] != null) {
      this.newMember.branchname= obj[1].label
    }
  }
  onSubmit(myform: object) {

    this.formSubmitted=true;
    this.newMember.createdDate=new Date().toISOString();
    this.newMember.modifiedDate=new Date().toISOString();
    this.newMember.dob=new Date().toISOString();
    this.newMember.doj=new Date().toISOString();
    this.newMember.dojtoscheme=new Date().toISOString();
    this.newMember.createdByUserId=2;
    
    
  
    this.memberService.postMember(this.newMember).subscribe({
      next: (res) => {
        this.notificationService.showSuccess("member Added Successfully", "Added")
        this.router.navigate(['/admin/member']);
       
        
         },
    
  
     error: (res) => {
       alert("Error while Adding")
      }
    })
    
  
  }
  
}
