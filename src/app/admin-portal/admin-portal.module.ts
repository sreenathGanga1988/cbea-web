import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { StateListComponent } from './state/state-list/state-list.component';
import { UsertypeListComponent } from './usertype/usertype-list/usertype-list.component';
import { StatusListComponent } from './status/status-list/status-list.component';
import { DesignationListComponent } from './designation/designation-list/designation-list.component';
import { CircleListComponent } from './circle/circle-list/circle-list.component';
import { BranchListComponent } from './branch/branch-list/branch-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { DailyquotesListComponent } from './cms/dailyquotes/dailyquotes-list/dailyquotes-list.component';
import { NewsListComponent } from './cms/news/news-list/news-list.component';
import { MainpageListComponent } from './cms/mainpage/mainpage-list/mainpage-list.component';
import { ManagingcommiteeListComponent } from './cms/managingcommitee/managingcommitee-list/managingcommitee-list.component';
import { RefundListComponent } from './claims/refund/refund-list/refund-list.component';
import { DeathclaimListComponent } from './claims/deathclaim/deathclaim-list/deathclaim-list.component';
import { DirectpaysListComponent } from '../directpays/directpays-list/directpays-list.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { StateCreateComponent } from './state/state-create/state-create.component';
import { UsertypeCreateComponent } from './usertype/usertype-create/usertype-create.component';
import { StatusCreateComponent } from './status/status-create/status-create.component';
import { DesignationCreateComponent } from './designation/designation-create/designation-create.component';
import { CircleCreateComponent } from './circle/circle-create/circle-create.component';
import { BranchCreateComponent } from './branch/branch-create/branch-create.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { MemberCreateComponent } from './member/member-create/member-create.component';
import { DailyquotesCreateComponent } from './cms/dailyquotes/dailyquotes-create/dailyquotes-create.component';
import { NewsCreateComponent } from './cms/news/news-create/news-create.component';
import { MainpageCreateComponent } from './cms/mainpage/mainpage-create/mainpage-create.component';
import { ManagingcommiteeCreateComponent } from './cms/managingcommitee/managingcommitee-create/managingcommitee-create.component';
import { RefundCreateComponent } from './claims/refund/refund-create/refund-create.component';
import { DeathclaimCreateComponent } from './claims/deathclaim/deathclaim-create/deathclaim-create.component';
import { DirectpaysCreateComponent } from '../directpays/directpays-create/directpays-create.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { StateEditComponent } from './state/state-edit/state-edit.component';
import { BranchEditComponent } from './branch/branch-edit/branch-edit.component';
import { BranchselectorComponent } from './branch/branchselector/branchselector.component';
import { DesignationEditComponent } from './designation/designation-edit/designation-edit.component';
import { NewsEditComponent } from './cms/news/news-edit/news-edit.component';
import { StatusEditComponent } from './status/status-edit/status-edit.component';
import { DailyquotesEditComponent } from './cms/dailyquotes/dailyquotes-edit/dailyquotes-edit.component';
import { CircleEditComponent } from './circle/circle-edit/circle-edit.component';
import { DeathclaimEditComponent } from './claims/deathclaim/deathclaim-edit/deathclaim-edit.component';
import { UsertypeEditComponent } from './usertype/usertype-edit/usertype-edit.component';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import { ManagingcommiteeEditComponent } from './cms/managingcommitee/managingcommitee-edit/managingcommitee-edit.component';




const adminRoutes: Routes = [
  { path: '', component: DashboardComponent,
    children:[

      { path: 'categories',    component: CategoryListComponent,},
      { path: 'states',    component: StateListComponent,},
      { path: 'usertypes',    component: UsertypeListComponent,},
      { path: 'status',    component: StatusListComponent,},
      { path: 'designation',    component: DesignationListComponent,},
      { path: 'Circles',    component: CircleListComponent,},
      { path: 'Branches',    component:BranchListComponent,},
      { path: 'user',    component: UserListComponent,},
      { path: 'Member',    component: MemberListComponent,},
      { path: 'dailyquotes',    component: DailyquotesListComponent,},
      { path: 'DailyNews',    component:NewsListComponent,},
      { path: 'mainPage',    component: MainpageListComponent,},
      { path: 'managingcomitee',    component: ManagingcommiteeListComponent,},
      { path: 'refunds',    component: RefundListComponent,},
      { path: 'deathclaims',    component: DeathclaimListComponent,},
      { path: 'directpays',    component:DirectpaysListComponent,},
      { path: 'refunds',    component: CircleListComponent,},

      { path: 'categories-create',    component: CategoryCreateComponent,},
      { path: 'states-create',    component: StateCreateComponent,},
      { path: 'usertypes-create',    component: UsertypeCreateComponent,},
      { path: 'status-create',    component: StatusCreateComponent,},
      { path: 'designation-create',    component: DesignationCreateComponent,},
      { path: 'circles-create',    component: CircleCreateComponent,},
      { path: 'branch-create',    component: BranchCreateComponent,},
      { path: 'user-create',    component: UserCreateComponent,},
      { path: 'member-create',    component: MemberCreateComponent,},
      { path: 'dailyquotes-create',    component: DailyquotesCreateComponent,},
      { path: 'newsitem-create',    component: NewsCreateComponent,},
      { path: 'mainPage-create',    component: MainpageCreateComponent,},
      { path: 'managingcomitee-create',    component: ManagingcommiteeCreateComponent,},
      { path: 'refunds-create',    component: RefundCreateComponent,},
      { path: 'deathclaims-create',    component: DeathclaimCreateComponent,},
      { path: 'directpays-create',    component:DirectpaysCreateComponent,},
      { path: 'refunds-create',    component: RefundCreateComponent,},


      { path: 'categories-edit/:id',    component: CategoryEditComponent,},
      { path: 'states-edit/:id',    component: StateEditComponent,},
      { path: 'branch-edit/:id',    component: BranchEditComponent,},
      { path: 'branch-select',    component: BranchselectorComponent,},
      { path: 'designations-edit/:id',   component:DesignationEditComponent,},
      { path: 'newsitem-edit/:id',component:NewsEditComponent,},
      {path:  'status-edit/:id',component:StatusEditComponent,},
      {path:   'member-edit/:id',component:MemberEditComponent,},
      { path: 'dailyquotes-edit/:id', component:DailyquotesEditComponent,},
      { path: 'Circles-edit/:id',component:CircleEditComponent,},
      { path: 'deathclaims-edit/:id',    component: DeathclaimEditComponent,},
      { path: 'usertypes-edit/:id',    component: UsertypeEditComponent,},
       {path: 'managingcommitee-edit/:id',  component:ManagingcommiteeEditComponent,},

    ] },



];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminPortalModule { }
