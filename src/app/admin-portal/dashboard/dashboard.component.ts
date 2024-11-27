import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TopNavComponent } from '../shared/top-nav/top-nav.component';
import { KiduTableComponent } from '../shared/kidu-table/kidu-table.component';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../Services/Common/authentication.service';
import { UserIdentityInfoService } from '../../Services/Common/user-identity-info.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,RouterModule,TopNavComponent,KiduTableComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor( private authservice: AuthenticationService, private useridentityservice: UserIdentityInfoService,private router: Router) {

  }

  logOut() {
    this.authservice.logout()
    this.router.navigate(['/']);
  }
}
