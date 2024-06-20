import { Component } from '@angular/core';
import { State } from '../../../models/Common/state.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../../Services/state.service';
import { NotificationService } from '../../../Services/Common/notification.service';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-state-edit',
  standalone: true,
  imports: [TitleBarComponent,FormsModule],
  templateUrl: './state-edit.component.html',
  styleUrl: './state-edit.component.css'
})
export class StateEditComponent {
  headingText = "Edit States";
  id: string = '';
  newStates! :State;

  // constructor(private route: ActivatedRoute,private categoryService :CategoryService) { }
  constructor(private route: ActivatedRoute,private router: Router, private stateService: StateService, private notificationService: NotificationService) {


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

    
  }
   getItem(id:string){
    this.stateService.getStateById(Number(id)).subscribe({
      next: (res) => {

        if (res) {

          if (res.isSucess === true) {


              console.log(res);
              this.newStates=res.value;
              console.log(this.newStates);

            }
            else {
             alert(res.error);
          }
         // this._kiduTableModel.rows = res.rowData;
        }


      },
      error: (res) => {
        alert("Erro while Adding")
      }
    })

  }
  onSubmit() {

    this.stateService.putStates(Number(this.id),this.newStates).subscribe({
      next: (res) => {


        this.notificationService.showSuccess("States Updated Successfully", "Added")
        this.router.navigate(['/states']);
      },
      error: (res) => {
        alert("Error while Adding")
      }
    })

  }

}
