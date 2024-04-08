import { Routes } from '@angular/router';
import { CircleListComponent } from './admin-portal/circle/circle-list/circle-list.component';
import { HomeComponent } from './public-portal/home/home.component';
import { StateListComponent } from './admin-portal/state/state-list/state-list.component';
import { UserListComponent } from './admin-portal/user/user-list/user-list.component';
import { DesignationListComponent } from './admin-portal/designation/designation-list/designation-list.component';
import { UsertypeListComponent } from './admin-portal/usertype/usertype-list/usertype-list.component';
import { CategoryListComponent } from './admin-portal/category/category-list/category-list.component';
import { StatusListComponent } from './admin-portal/status/status-list/status-list.component';
import { BranchListComponent } from './admin-portal/branch/branch-list/branch-list.component';
import { MemberListComponent } from './admin-portal/member/member-list/member-list.component';
import { DailyquotesListComponent } from './admin-portal/cms/dailyquotes/dailyquotes-list/dailyquotes-list.component';
import { NewsListComponent } from './admin-portal/cms/news/news-list/news-list.component';
import { MainpageListComponent } from './admin-portal/cms/mainpage/mainpage-list/mainpage-list.component';
import { ManagingcommiteeListComponent } from './admin-portal/cms/managingcommitee/managingcommitee-list/managingcommitee-list.component';
import { RefundListComponent } from './admin-portal/claims/refund/refund-list/refund-list.component';
import { DeathclaimListComponent } from './admin-portal/claims/deathclaim/deathclaim-list/deathclaim-list.component';
import { CategoryCreateComponent } from './admin-portal/category/category-create/category-create.component';
import { StateCreateComponent } from './admin-portal/state/state-create/state-create.component';
import { UsertypeCreateComponent } from './admin-portal/usertype/usertype-create/usertype-create.component';
import { StatusCreateComponent } from './admin-portal/status/status-create/status-create.component';
import { DesignationCreateComponent } from './admin-portal/designation/designation-create/designation-create.component';
import { CircleCreateComponent } from './admin-portal/circle/circle-create/circle-create.component';
import { BranchCreateComponent } from './admin-portal/branch/branch-create/branch-create.component';
import { UserCreateComponent } from './admin-portal/user/user-create/user-create.component';
import { MemberCreateComponent } from './admin-portal/member/member-create/member-create.component';
import { DailyquotesCreateComponent } from './admin-portal/cms/dailyquotes/dailyquotes-create/dailyquotes-create.component';
import { NewsCreateComponent } from './admin-portal/cms/news/news-create/news-create.component';
import { MainpageCreateComponent } from './admin-portal/cms/mainpage/mainpage-create/mainpage-create.component';
import { ManagingcommiteeCreateComponent } from './admin-portal/cms/managingcommitee/managingcommitee-create/managingcommitee-create.component';
import { RefundCreateComponent } from './admin-portal/claims/refund/refund-create/refund-create.component';
import { DeathclaimCreateComponent } from './admin-portal/claims/deathclaim/deathclaim-create/deathclaim-create.component';

export const routes: Routes = [

  {
    path: '',    component: HomeComponent,},
   { path: 'categories',    component: CategoryListComponent,},
   { path: 'states',    component: StateListComponent,},
   { path: 'usertypes',    component: UsertypeListComponent,},
   { path: 'status',    component: StatusListComponent,},
   { path: 'designation',    component: DesignationListComponent,},
   { path: 'circles',    component: CircleListComponent,},
   { path: 'branch',    component: BranchListComponent,},
   { path: 'user',    component: UserListComponent,},
   { path: 'member',    component: MemberListComponent,},
   { path: 'dailyquotes',    component: DailyquotesListComponent,},
   { path: 'newsitem',    component: NewsListComponent,},
   { path: 'mainPage',    component: MainpageListComponent,},
   { path: 'managingcomitee',    component: ManagingcommiteeListComponent,},
   { path: 'refunds',    component: RefundListComponent,},
   { path: 'deathclaims',    component: DeathclaimListComponent,},
   { path: 'directpays',    component:DeathclaimListComponent,},
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
   { path: 'directpays-create',    component:DeathclaimCreateComponent,},
   { path: 'refunds-create',    component: CircleCreateComponent,},

  ];
