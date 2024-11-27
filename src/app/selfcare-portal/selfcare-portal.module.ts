import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MycontributionComponent } from './mycontribution/mycontribution.component';


const userRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'my-profile', component: MycontributionComponent },
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class SelfcarePortalModule { }
