import { Component, Inject, inject } from '@angular/core';
import { BranchService } from '../../../Services/branch.service ';
import { CustomApiResponse } from '../../../models/Common/custom-api-responseo.model';
import { Router } from '@angular/router';
import { TitleBarComponent } from '../../shared/title-bar/title-bar.component';
import { KiduTableComponent } from '../../shared/kidu-table/kidu-table.component';
import {
  CellType,
  Column,
  KiduTableModel,
} from '../../shared/kidu-table/columns';
import { NotificationService } from '../../../Services/Common/notification.service';
import { CommonModule } from '@angular/common';
import { KiduConfirmModalComponent } from '../../shared/Modals/kidu-confirm-modal/kidu-confirm-modal.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-branch-list',
  standalone: true,

  imports: [
    TitleBarComponent,
    KiduTableComponent,
    CommonModule,
    
    FormsModule,

  ],
  templateUrl: './branch-list.component.html',
  styleUrl: './branch-list.component.css',
})
export class BranchListComponent {
  // p:number=1;
  headingText = 'Branches';
  response!: CustomApiResponse;
  Items!: any[];
  constructor(
     private router:Router,
    private branchService: BranchService,
    private notificationServices: NotificationService
  ) {}

  data = 'Are you sure you want to proceed?';
  show = false; // Flag to control modal visibility
  _kiduTableModel: KiduTableModel = {
    tableColumns: [
      { columnDef: 'ID', header: 'Serial #', colType: CellType.Text },
      { columnDef: 'DpCode', header: 'DP Code', colType: CellType.Text },
      { columnDef: 'Name', header: 'Branch Name', colType: CellType.Text },
      { columnDef: 'CircleName', header: 'Circle', colType: CellType.Text },
      
      
      { columnDef: 'StateName', header: 'State', colType: CellType.Text },
      { columnDef: 'District', header: 'District', colType: CellType.Text },
      { columnDef: 'IsActive', header: 'Status', colType: CellType.Status },
    ],
    isDeleteButton: true,
    isEditButton: true,

    rows: [{}],
    StatusColumns: ['IsActive'],
    deleteconfirmationmessage: 'Are you sure you want to delete this Branch?',
  };
  ngOnInit(): void {
    this.configureKidutable();
    this.GetItems('');
  }

  handleCreateNewItem() {

    this.router.navigate(['/admin/branch-create']);
  }
  configureKidutable() {}
  EditButtonClicked(item: any) {
    // throw new Error('Method not implemented.');
    this.router.navigate(['/admin/branch-edit', item.ID]);
  }
  GlobalSearch(sarchtxt: string) {
    console.log('search text--->', sarchtxt);

    this.GetItems(sarchtxt);
    //throw new Error('Method not implemented.');
  }
  pageChangeEvent(event: number) {
    // this.p=event;
    // this.GetItems("");
  }
  GetItems(searchtext: string) {
    console.log('get data-------------');

    // throw new Error('Method not implemented.');
    this.branchService.getBranchAsync(searchtext, 1, 10).subscribe({
      next: (res) => {
        if (res) {
          this._kiduTableModel.rows = res.rowData;
        }
        console.log('res----', res);
      },
      error: (res) => {
        alert('Error while Adding');
      },
    });
  }
}
