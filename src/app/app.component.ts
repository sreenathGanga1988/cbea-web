import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './admin-portal/dashboard/dashboard.component';
import { TopNavComponent } from './admin-portal/shared/top-nav/top-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { KiduConfirmModalComponent } from './admin-portal/shared/kidu-confirm-modal/kidu-confirm-modal.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,DashboardComponent,TopNavComponent,HttpClientModule ,KiduConfirmModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cbea-web';
  isAdminUser=true;

}
