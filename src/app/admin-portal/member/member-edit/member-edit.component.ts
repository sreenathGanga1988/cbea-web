import { Component } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Member } from '../../../models/Common/member.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../../../Services/member.service';
import { NotificationService } from '../../../Services/Common/notification.service';
import { CellType, KiduDataPickerModel } from '../../shared/kidu-table/columns';
import { KiduConfirmModalComponent } from '../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component';
import { KiduDataPickerComponent } from '../../shared/Modals/kidu-data-picker/kidu-data-picker.component';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [FormsModule,CommonModule,TitleBarComponent,KiduDataPickerComponent],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent {
//  _kiduDataPickerModel1: KiduDataPickerModel = {
  //  tableColumns: [
   //   { columnDef: 'code', header: ' #', colType: CellType.Text },
   //   { columnDef: 'label', header: 'Branch Name ', colType: CellType.Text },
   // ],
   // rows: [],
   // TopTittle: 'Select Branch',
   // reporttype: "BRANCH",
   // pageSize: 25,
   // pageNumber: 0

 // }
  _kiduDataPickerModel2: KiduDataPickerModel= {
    tableColumns: [
      { columnDef: 'code', header: ' #', colType: CellType.Text },
      { columnDef: 'label', header: 'Designation Name ', colType: CellType.Text },
    ],
    rows: [],
    TopTittle: 'Select Designation',
    reporttype: "DESIGNATION",
    pageSize: 0,
    pageNumber: 0

  }

  headingText = "Edit Members";
  id: string = '';
  newMember!:Member;
  textControl!: AbstractControl;
  myform:FormGroup;
  isAlive = true;
  formSubmitted = false;
  constructor(private route: ActivatedRoute,private router: Router, private memberService: MemberService, private notificationService: NotificationService,private formbuilder:FormBuilder) {

    this.myform=this.formbuilder.group({
      name: [null, [Validators.required, Validators.minLength(2),this.noWhiteSpaceValidator]]
     
     });
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
    gotoPreviousPage(){
      alert("back")
      this.router.navigate(['/admin/Member']);
     }
    
    getItem(id:string){
      this.memberService.getMemberById(Number(id)).subscribe({
        next: (res) => {
  
          if (res) {
  
            if (res.isSucess === true) {
  
  
                console.log(res);
                this.newMember=res.value;
                console.log(this.newMember);
  
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
    onSubmit(form:any) {
      this.formSubmitted=true;
      this.memberService.putMember(Number(this.id),this.newMember).subscribe({
        next: (res) => {
  
  
          this.notificationService.showSuccess("Member is Updated Successfully", "Added")
          this.router.navigate(['/admin/Member']);
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
