import { Component } from '@angular/core';
import { Circle } from '../../../models/Common/circle.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CircleService } from '../../../Services/circle.service';
import { NotificationService } from '../../../Services/Common/notification.service';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circle-edit',
  standalone: true,
  imports: [TitleBarComponent,FormsModule],
  templateUrl: './circle-edit.component.html',
  styleUrl: './circle-edit.component.css'
})
export class CircleEditComponent {
handleCreateNewItem() {
//throw new Error('Method not implemented.');
}
  headingText = "Edit Circles";
  id: string = '';
  newCircle! :Circle;

  constructor(private route: ActivatedRoute,private router: Router, private circleService: CircleService, private notificationService: NotificationService) {

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
  getItem(id:string){
    this.circleService.getCircleById(Number(id)).subscribe({
      next: (res) => {

        if (res) {

          if (res.isSucess === true) {


              console.log(res);
              this.newCircle=res.value;
              console.log(this.newCircle);

            }
            else {
             alert(res.error);
          }
        
        }


      },
      error: (res) => {
        alert("Error while Adding")
      }
    })

  }
  onSubmit() {

    this.circleService.putCircles(Number(this.id),this.newCircle).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("Circle Updated Successfully", "Added")
        this.router.navigate(['/admin/Circles']);
      },
      error: (res) => {
        alert("Error while Adding")
      }
    })

  }

}
