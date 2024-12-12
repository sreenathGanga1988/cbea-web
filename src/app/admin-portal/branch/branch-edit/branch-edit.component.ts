import { Component } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Branch } from '../../../models/Common/branch.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from '../../../Services/branch.service ';
import { NotificationService } from '../../../Services/Common/notification.service';
import { CellType, KiduDataPickerModel } from '../../shared/kidu-table/columns';
import { KiduDataPickerComponent } from '../../shared/Modals/kidu-data-picker/kidu-data-picker.component';

@Component({
  selector: 'app-branch-edit',
  standalone: true,
  imports: [TitleBarComponent, CommonModule, FormsModule,KiduDataPickerComponent,],
  templateUrl: './branch-edit.component.html',
  styleUrl: './branch-edit.component.css'
})
export class BranchEditComponent {
 headingText = "Edit Branch";
  id: string = '';
  
  newBranch! :Branch;
  textControl!: AbstractControl;
  myform:FormGroup;
  isAlive = true;
  formSubmitted = false;
  
  constructor(private route: ActivatedRoute,private router: Router, private branchservice: BranchService, private notificationService: NotificationService,private formbuilder:FormBuilder) {

    this.myform=this.formbuilder.group({
      name: [null, [Validators.required, Validators.minLength(2),this.noWhiteSpaceValidator]]
     
     });
    
  }
  noWhiteSpaceValidator(control: AbstractControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true }
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

  gotoPreviousPage() {
    alert("back")
    this.router.navigate(['/admin/Branches']);
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

  getItem(id:string){
    this.branchservice.getBranchById(Number(id)).subscribe({
      next: (res) => {

        if (res) {

          if (res.isSucess === true) {


              console.log(res);
              this.newBranch=res.value;
              console.log(this.newBranch);

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
   
    this.branchservice.putBranch(Number(this.id),this.newBranch).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("Branch Updated Successfully", "Added")
        this.router.navigate(['/admin/Branches']);
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

    
CircleSelected(obj: any) {
  if (obj[1] != null) {
    this.newBranch.circle= obj[1].label
  }
}
}