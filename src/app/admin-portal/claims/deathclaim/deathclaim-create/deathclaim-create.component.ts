import { Component } from '@angular/core';
import { Deathclaim } from '../../../../models/Common/deathclaim.model';
import { Router } from '@angular/router';
import { DeathclaimService } from '../../../../Services/Common/deathclaim.service';
import { NotificationService } from '../../../../Services/Common/notification.service';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { KiduDataPickerComponent } from "../../../shared/Modals/kidu-data-picker/kidu-data-picker.component";
import { CellType, KiduDataPickerModel } from '../../../shared/kidu-table/columns';


@Component({
  selector: 'app-deathclaim-create',
  standalone: true,
  imports: [TitleBarComponent, FormsModule, CommonModule, KiduDataPickerComponent],
  templateUrl: './deathclaim-create.component.html',
  styleUrl: './deathclaim-create.component.css'
})
export class DeathclaimCreateComponent {
  handleCreateNewItem() {
    //throw new Error('Method not implemented.');
  }
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
  headingText = "New DeathClaims";
  newDeathClaim: Deathclaim = {
    id: 0,
    name: '',
    nominee: '',
    StateId: null,
    isActive: false,
    deathdate: null,
    amount: null,
    lastcontribution: null,
    createdByUserId: null,
    createdDate: null,
    modifiedByUserId: null,
    modifiedDate: null,
    isDeleted: false,
    deletedByByUserId: null,
    nomineeRelation: '',
    nomineeidentity: '',
    staffno: null,
    addedUser: '',
    modifiedUser: '',
    deletedUser: '',
    deletedDate: null,
    ddno: null,
    dddate: null,
    expr1: null,
    yearof: null,
    designationid: null
  };
  formSubmitted = false;
  myform: FormGroup;
  constructor(private router: Router, private deathclaimservice: DeathclaimService, private notificationService: NotificationService, private createdeathclaim: FormBuilder) {

    this.myform = this.createdeathclaim.group({
      name: ['', [Validators.required, Validators.minLength(2)]]

    });
  }
  gotoPreviousPage(){
    alert("back")
     this.router.navigate(['/admin/deathclaims']);
    }
  onSubmit(form: any) {
    this.newDeathClaim.deathdate = new Date().toISOString();
    this.newDeathClaim.createdDate = new Date().toISOString();


    this.newDeathClaim.modifiedDate = new Date().toISOString();

    this.newDeathClaim.modifiedByUserId = 1;
    this.formSubmitted = true;
    this.deathclaimservice.postclaim(this.newDeathClaim).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("Claim Added Successfully", "Added")
        this.router.navigate(['/admin/deathclaims']);
        console.log()
      },

      error: (res) => {
        alert("Error while Adding")
      }
    })


  }

  StaffSelected(obj: any) {
    if (obj[1] != null) {
      this.newDeathClaim.staffno = obj[1].label
    }
  }
}
