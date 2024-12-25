import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { CommonModule } from '@angular/common';
import { Refund } from '../../../../models/Common/refund.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RefundService } from '../../../../Services/refund.service';
import { NotificationService } from '../../../../Services/Common/notification.service';
import { CellType, KiduDataPickerModel } from '../../../shared/kidu-table/columns';
import { KiduTableComponent } from '../../../shared/kidu-table/kidu-table.component';
import { KiduDataPickerComponent } from '../../../shared/Modals/kidu-data-picker/kidu-data-picker.component';

@Component({
  selector: 'app-refund-edit',
  standalone: true,
  imports: [TitleBarComponent,CommonModule,FormsModule,KiduDataPickerComponent],
  templateUrl: './refund-edit.component.html',
  styleUrl: './refund-edit.component.css'
})
export class RefundEditComponent {
 // private _kiduTableModel: any;

gotoPreviousPage() {
this.router.navigate(['/admin/refunds'])
}


  headingText = "Edit Refund";
  id: string = '';
  newRefund!:Refund;
  
  isAlive = true;
  formSubmitted = false;
  constructor(private route: ActivatedRoute,private router: Router, private refundService: RefundService, private notificationService: NotificationService,private formbuilder:FormBuilder) {

   
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
    getItem(Id:string){
      this.refundService.getRefundById(Number(Id)).subscribe({
        next: (res) => {
  
          if (res) {
  
            if (res.isSucess === true) {
  
  
                console.log(res);
                this.newRefund=res.value;
                console.log(this.newRefund);
  
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
      this.refundService.putRefund(Number(this.id),this.newRefund).subscribe({
        next: (res) => {
  
  
          this.notificationService.showSuccess("Refund Updated Successfully", "Added")
          this.router.navigate(['/admin/refund']);
        },
        error: (res) => {
          alert("Error while Adding")
        }
      })
  
    }
    StaffSelected(obj: any) {
      if (obj[1] != null) {
        this.newRefund.StaffNoNavigationStaffNo = obj[1].label
      }
    }
  
   }

  

 

