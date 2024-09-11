import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule,FormBuilder, Validators } from '@angular/forms';
import { Managingcomitee } from '../../../../models/Common/managingcomitee.model';
import { AbstractControl } from '@angular/forms';
import { ActivatedRoute,Router} from '@angular/router';
import { ManagingcomiteeService } from '../../../../Services/managingcomitee.service';
import { NotificationService } from '../../../../Services/Common/notification.service';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
@Component({
  selector: 'app-managingcommitee-edit',
  standalone: true,
  imports: [CommonModule,FormsModule,TitleBarComponent],
  templateUrl: './managingcommitee-edit.component.html',
  styleUrl: './managingcommitee-edit.component.css'
})
export class ManagingcommiteeEditComponent {
  headingText = "Edit Managing Team";
  id: string = '';
  newManagingCommitee! :Managingcomitee;
  textControl!: AbstractControl;
  myform:FormGroup;
  isAlive = true;
  formSubmitted = false;
  // constructor(private route: ActivatedRoute,private categoryService :CategoryService) { }
  constructor(private route: ActivatedRoute,private router: Router, private managingcomiteeService: ManagingcomiteeService, private notificationService: NotificationService,private formbuilder:FormBuilder) {

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
      console.error('Id is null');
    }
  }
  
  handleCreateNewItem() {

   // this.router.navigate(['/categories-create']);
  }
  get name() {
    return this.myform.get('name');
  }
  getItem(id:string){
    this.managingcomiteeService.getManagingcomiteeById(Number(id)).subscribe({
      next: (res) => {

        if (res) {

          if (res.isSucess === true) {


              console.log(res);
              this.newManagingCommitee=res.value;
              console.log(this.newManagingCommitee);

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
    this.managingcomiteeService.putManagingcomitee(Number(this.id),this.newManagingCommitee).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("Managing team Updated Successfully", "Added")
        this.router.navigate(['/managingcomitee']);
      },
      error: (res) => {
        alert("Error while Adding")
      }
    })

  }
}



