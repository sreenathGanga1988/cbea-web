import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { RulesregulationComponent } from './rulesregulation/rulesregulation.component';
import { ManagingcommiteeComponent } from './managingcommitee/managingcommitee.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ResourcesComponent } from './resources/resources.component';
import { ClaimsComponent } from './claims/claims.component';

const publicRoutes: Routes = [
  { path: '', component: HomeComponent,children:[

    { path: 'rulesandregulation', component: RulesregulationComponent },
    { path: 'managingcomitee', component: ManagingcommiteeComponent },
    { path: 'login', component:LoginComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'claims', component: ClaimsComponent },




  ] }, // Default public page

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(publicRoutes)],
  exports: [RouterModule],
})


export class PublicPortalModule { }
