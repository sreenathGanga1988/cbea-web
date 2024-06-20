import { Component } from '@angular/core';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import { CellType, Column, KiduTableModel } from '../../shared/kidu-table/columns';
import { Router } from '@angular/router';
import { CategoryService } from '../../../Services/category.service';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { ListRequest } from '../../../models/Common/listrequest.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KiduConfirmModalComponent } from '../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component';
import { NotificationService } from '../../../Services/Common/notification.service';



@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [TitleBarComponent, CommonModule, KiduTableComponent, KiduConfirmModalComponent,FormsModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  headingText = "Categories";
  response!: CustomApiResponse;
  Items!: any[];

  constructor(private router: Router, private categoryService: CategoryService, private notificationService: NotificationService) {


  }

  data = 'Are you sure you want to proceed?';
  show = false; // Flag to control modal visibility
  _kiduTableModel: KiduTableModel = {
    tableColumns: [
      { columnDef: 'ID', header: 'Serial#', colType: CellType.Text },
      { columnDef: 'Abbreviation', header: 'Code', colType: CellType.Text },
      { columnDef: 'Name', header: 'Name', colType: CellType.Text },
      { columnDef: 'IsActive', header: 'Status', colType: CellType.Status }],
    isDeleteButton: true,
    isEditButton: true,
    rows: [{}],
    StatusColumns:["IsActive"],
    deleteconfirmationmessage: 'Are you sure you want to delete this category?'


  };
  ngOnInit(): void {

    this.configureKidutable();
    this.GetItems("");
  }




  configureKidutable() {

  }


  handleCreateNewItem() {

    this.router.navigate(['/categories-create']);
  };
  EditButtonClicked(item: any) {

    this.router.navigate(['/categories-edit', item.ID]);

  }

  GlobalSearch(sarchtxt: string) {
    console.log("search text--->",sarchtxt);
    
    this.GetItems(sarchtxt)
  }

  GetItems(searchtext: string) {
    this.categoryService.getCategoriesAsync(searchtext, 0, 0).subscribe({
      next: (res) => {

        if (res) {
          this._kiduTableModel.rows = res.rowData;
        }
        console.log(this.Items)

      },
      error: (res) => {
        alert("Erro while Adding")
      }
    })
  }

  DeleteItem(id: number) {

    this.categoryService.deleteItem(id).subscribe({
      next: (res) => {
        if (res.isSucess) {
          this.notificationService.showSuccess('Successfully deleted Category!!',"Deleted");
          this.GetItems("");
        }
        else {

          this.notificationService.showError('Failed to Delete Category :' + res.error,"Error")

        }

      },
      error: (res) => {

      }
    })
  }


  openModal() {
    this.show = true;
  }

  closeModal() {
    this.show = false;
  }

  handleConfirmation(obj: any) {

    if (obj[0]==true) {

      this. DeleteItem(obj[1].ID)
      // Handle confirmation logic here
    } else {
      console.log('Cancelled!');
      // Handle cancellation logic here
    }
  }


}
