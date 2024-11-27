import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './admin-portal/dashboard/dashboard.component';
import { TopNavComponent } from './admin-portal/shared/top-nav/top-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from "./public-portal/home/home.component";
import { AuthenticationService } from './Services/Common/authentication.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, DashboardComponent, TopNavComponent, HttpClientModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private authService: AuthenticationService, private router: Router) {}
  title = 'cbea-web';
  isAdminUser=false;

  ngOnInit() {

    // if (this.authService.isLoggedIn()) {
    //   const userRole = this.authService.getUserRole();
    //   if (userRole === 'admin') {
    //     this.router.navigate(['/admin']);
    //   } else if (userRole === 'employee') {
    //     this.router.navigate(['/profile']);
    //   }



    // }

  }



}
