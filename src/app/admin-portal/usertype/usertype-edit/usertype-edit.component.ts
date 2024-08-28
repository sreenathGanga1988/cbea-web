import { Component } from '@angular/core';
import { UserType } from '../../../models/Common/userType.model';
import { UserTypeService } from '../../../Services/usertype.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../Services/Common/notification.service';
import { ActivatedRoute,Route } from '@angular/router';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usertype-edit',
  standalone: true,
  imports: [TitleBarComponent,FormsModule,CommonModule],
  templateUrl: './usertype-edit.component.html',
  styleUrl: './usertype-edit.component.css'
})
export class UsertypeEditComponent {

  headingText = "Edit Usertypes";
  id: string = '';
  newUsertype! :UserType;

  // constructor(private route: ActivatedRoute,private categoryService :CategoryService) { }
  constructor(private route: ActivatedRoute,private router: Router, private UsertypeService: UserTypeService, private notificationService: NotificationService) {

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
  handleCreateNewItem() {
    //throw new Error('Method not implemented.');
    }
  getItem(id:string){
    this.UsertypeService.getUserTypeById(Number(id)).subscribe({
      next: (res) => {

        if (res) {

          if (res.isSucess === true) {


              console.log(res);
              this.newUsertype=res.value;
              console.log(this.newUsertype);

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
   
    this.UsertypeService.putUserTypes(Number(this.id),this.newUsertype).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("Usertypes Updated Successfully", "Added")
        this.router.navigate(['/usertypes']);
      },
      error: (res) => {
        alert("Error while Adding")
      }
    })

  }

}
