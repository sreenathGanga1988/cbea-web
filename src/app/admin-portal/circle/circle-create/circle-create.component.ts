import { Component,NgModule } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Circle } from '../../../models/Common/circle.model';
import { Router } from '@angular/router';
import { CircleService } from '../../../Services/circle.service';
import { NotificationService } from '../../../Services/Common/notification.service';

@Component({
  selector: 'app-circle-create',
  standalone: true,
  imports: [TitleBarComponent,FormsModule,CommonModule],
  templateUrl: './circle-create.component.html',
  styleUrl: './circle-create.component.css'
})
export class CircleCreateComponent {
abbreviation: any;
handleCreateNewItem() {
//throw new Error('Method not implemented.');
this.router.navigate(['/circles-create']);
}
  headingText="Add Circle";
 newCircle: Circle={
  id: 0,
  name : '',
  abbreviation: '',
  circleCode: 0,



  //stateId:0,

 // stateName: '',

  //audit
  isActive: false,
  createdByUserId: null,
  addedUser: '',
  createdDate:'',
  modifiedByUserId:null,
  modifiedUser:'',
  modifiedDate: '',
 isDeleted: false,
 deletedByByUserId:  null,
 deletedUser:'',
 deletedDate:  null,
 //btnString:''
};

constructor(private router: Router, private circleService: CircleService, private notificationService: NotificationService) {


}
onSubmit()
  {
    this.newCircle.createdDate=new Date().toISOString();

     this.newCircle.modifiedDate=new Date().toISOString();

     this.newCircle.modifiedByUserId=1;
     this.newCircle.createdByUserId=1;

   this.circleService.postCircles(this.newCircle).subscribe({
   next: (res) => {


    this.notificationService.showSuccess("New circle is Added Successfully", "Added")

    this.router.navigate(['/Circles']);


  },
  error: (res) => {
    alert("Error while Adding")
  }
  })
  }

}
