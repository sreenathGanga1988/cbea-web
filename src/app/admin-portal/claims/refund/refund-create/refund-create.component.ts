import { Component ,NgModule} from '@angular/core';
import { Deathclaim } from '../../../../models/Common/deathclaim.model';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeathclaimService } from '../../../../Services/Common/deathclaim.service';
import { NotificationService } from '../../../../Services/Common/notification.service';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { CellType, KiduDataPickerModel } from '../../../shared/kidu-table/columns';
import { CommonModule } from '@angular/common';
import { KiduDataPickerComponent } from '../../../shared/Modals/kidu-data-picker/kidu-data-picker.component';
import { Refund } from '../../../../models/Common/refund.model';
import { RefundService } from '../../../../Services/refund.service';

@Component({
  selector: 'app-refund-create',
  standalone: true,
  imports: [TitleBarComponent,CommonModule,FormsModule,KiduDataPickerComponent],
  templateUrl: './refund-create.component.html',
  styleUrl: './refund-create.component.css'
})
export class RefundCreateComponent {


  headingText = "New Refunds";
  newRefund: Refund = {
    id: 0,
    name: '',
    Nominee: '',
    //StateId: null,
    isActive: false,
    RefundDate:'',
    //deathdate: null,
    Amount: null,
    LastContribution: null,
    createdByUserId: null,
    createdDate: null,
    modifiedByUserId: null,
    modifiedDate: null,
    isDeleted: false,
    deletedByByUserId: null,
    //nomineeRelation: '',
   // nomineeidentity: '',
   StaffNoNavigationStaffNo: null,
    addedUser: '',
    modifiedUser: '',
    deletedUser: '',
    deletedDate: null,
   // ddno: null,
   // dddate: null,
   // expr1: null,
   // yearof: null,
   // designationid: null
  };
  _kiduDataPickerModel: KiduDataPickerModel = {
    tableColumns: [
      { columnDef: 'code', header: 'Staff #', colType: CellType.Text },
      { columnDef: 'label', header: 'Name ', colType: CellType.Text },
    ],
    rows: [],
    TopTittle: 'Select Staff',
    reporttype: "MEMBER",
    pageSize: 20,
    pageNumber: 0

  }
  formSubmitted = false;
  myform: FormGroup;
  constructor(private router: Router, private RefundService: RefundService, private notificationService: NotificationService, private createdeathclaim: FormBuilder) {

    this.myform = this.createdeathclaim.group({
      name: ['', [Validators.required, Validators.minLength(2)]]

    });
  }
  gotoPreviousPage(){
    alert("back")
     this.router.navigate(['/admin/refunds']);
    }
    StaffSelected(obj: any) {
      if (obj[1] != null) {
        this.newRefund.StaffNoNavigationStaffNo = obj[1].label
      }
    }
    onSubmit(myform:any) {
      this.newRefund.RefundDate = new Date().toISOString();
      this.newRefund.createdDate = new Date().toISOString();
  
  
      this.newRefund.modifiedDate = new Date().toISOString();
  
      this.newRefund.modifiedByUserId = 1;
      this.formSubmitted = true;
      this.RefundService.postRefundclaim(this.newRefund).subscribe({
        next: (res) => {
  
  
          this.notificationService.showSuccess("Refund Added Successfully", "Added")
          this.router.navigate(['/admin/refunds']);
          console.log(this.myform)
        },
  
        error: (res) => {
          alert("Error while Adding")
        }
      })
  
      }

}
