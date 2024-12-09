import { Component } from '@angular/core';
import { TitleBarComponent } from '../../../shared/title-bar/title-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Deathclaim } from '../../../../models/Common/deathclaim.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DeathclaimService } from '../../../../Services/Common/deathclaim.service';
import { NotificationService } from '../../../../Services/Common/notification.service';

@Component({
  selector: 'app-deathclaim-edit',
  standalone: true,
  imports: [TitleBarComponent,CommonModule,FormsModule],
  templateUrl: './deathclaim-edit.component.html',
  styleUrl: './deathclaim-edit.component.css'
})
export class DeathclaimEditComponent {
  headingText = "Edit Deathclaim";
  id: string = '';
  newDeathclaim!:Deathclaim;


  constructor(private route: ActivatedRoute,private router: Router, private deathclaimservice: DeathclaimService, private notificationService: NotificationService) {


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

    
  }  
  gotoPreviousPage(){
    alert("back")
    this.router.navigate(['/admin/deathclaims']);
   }
    getItem(id:string){
      this.deathclaimservice.getClaimById(Number(id)).subscribe({
        next: (res) => {
  
          if (res) {
  
            if (res.isSucess === true) {
  
  
                console.log(res);
                this.newDeathclaim=res.value;
                console.log(this.newDeathclaim);
  
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
   
    
    this.deathclaimservice.putclaim(Number(this.id),this.newDeathclaim).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("Claim Updated Successfully", "Added")
        this.router.navigate(['/admin/deathclaims']);
      },
      error: (res) => {
        alert("Error while Adding")
      }
    })

  }

}
