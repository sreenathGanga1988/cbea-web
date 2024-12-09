import { Component } from '@angular/core';
import { Designation } from '../../../models/Common/designation-model';
import { ActivatedRoute, Router,RouterModule } from '@angular/router';
import { DesignationService } from '../../../Services/designation-service';
import { NotificationService } from '../../../Services/Common/notification.service';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-designation-edit',
  standalone: true,
  imports: [TitleBarComponent,FormsModule,RouterModule],
  templateUrl: './designation-edit.component.html',
  styleUrl: './designation-edit.component.css'
})
export class DesignationEditComponent {
  headingText = "Edit designation";
  id: string = '';
  newDesignation! :Designation;

  constructor(private route: ActivatedRoute,private router: Router, private designationService: DesignationService, private notificationService: NotificationService) {


  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.id = id;
      this.getItem(id)
    } else {
      
      console.error('ID is null');
    }
  }
  handleCreateNewItem() {

   }
   gotoPreviousPage(){
    alert("back")
     this.router.navigate(['/admin/designation']);
    }
 
   getItem(id:string){
     this.designationService.getDesignationById(Number(id)).subscribe({
       next: (res) => {
 
         if (res) {
 
           if (res.isSucess === true) {
 
 
               console.log(res);
               this.newDesignation=res.value;
               console.log(this.newDesignation);
 
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
 
   onSubmit() {

    this.designationService.putDesignations(Number(this.id),this.newDesignation).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("designation Updated Successfully", "Added")
        this.router.navigate(['/admin/designation']);
      },
      error: (res) => {
        alert("Error while Adding")
      }
    })

  }

}
