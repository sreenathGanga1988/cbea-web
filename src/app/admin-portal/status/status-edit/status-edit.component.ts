import { Component } from '@angular/core';
import { Status } from '../../../models/Common/status.model';
import { StatusService } from '../../../Services/status.service';
import { NotificationService } from '../../../Services/Common/notification.service';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule,Validators,FormBuilder,AbstractControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-status-edit',
  standalone: true,
  imports: [TitleBarComponent,CommonModule,FormsModule],
  templateUrl: './status-edit.component.html',
  styleUrl: './status-edit.component.css'
})
export class StatusEditComponent {
gotoPreviousPage() {
//throw new Error('Method not implemented.');
alert("back")
     this.router.navigate(['/admin/status']);
}
handleCreateNewItem() {
//throw new Error('Method not implemented.');
}
  headingText = "Edit Status";
  id: string = '';
  newStatus! :Status;
  textControl!: AbstractControl;
  myform:FormGroup;
  isAlive = true;
  formSubmitted = false;
  // constructor(private route: ActivatedRoute,private categoryService :CategoryService) { }
  constructor(private route: ActivatedRoute,private router: Router, private statusService: StatusService, private notificationService: NotificationService,private formbuilder:FormBuilder) {

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
    getItem(id:string){
      this.statusService.getStatusById(Number(id)).subscribe({
        next: (res) => {
  
          if (res) {
  
            if (res.isSucess === true) {
  
  
                console.log(res);
                this.newStatus=res.value;
                console.log(this.newStatus);
  
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
      this.statusService.putStatus(Number(this.id),this.newStatus).subscribe({
        next: (res) => {
  
  
          this.notificationService.showSuccess("Status Updated Successfully", "Added")
          this.router.navigate(['/admin/status']);
        },
        error: (res) => {
          alert("Error while Adding")
        }
      })
  
    }
  
}
