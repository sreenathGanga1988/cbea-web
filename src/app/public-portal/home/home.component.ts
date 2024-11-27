import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { PublicPortalServicesService } from '../../Services/PublicPortalServices/public-portal-services.service';
import { PublicfooterComponent } from "../publicshared/publicfooter/publicfooter.component";
import { PublicnavbarComponent } from "../publicshared/publicnavbar/publicnavbar.component";
import { PublicmainPage } from '../../models/Common/public-mainpage.model ';
import { MainPageComponent } from '../mainpage/mainpage.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, MainPageComponent, PublicfooterComponent, PublicnavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    mainpageitems: PublicmainPage = {
      newsModels: [],
      managingComiteeDTOs:[],
      corouselImage1: '',
      corouselImage2: '',
      corouselImage3: '',
      mainText: '',
      slogan: '',
      rulesRegulation: null,
      dayQuote: '',
      logoImage1: '',
      logoImage2: '',
      contactDesc1: null,
      contactDesc2: null,
      contactLine1: null,
      contactLine2: null,
      contactLine3: null,
      phonenum: null,
      faxnum: null,
      website: null,
      email: null
    };

  constructor(private publicservice: PublicPortalServicesService,private router: Router) {

  }
  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

      }
    });
   this.getHome();
  }

  isLandingPage(): boolean {

return this.router.url === '/';

  }

  getHome() {
    this.publicservice.getHome().subscribe({
      next: (res: any) => {

        this.mainpageitems = res;
        this.publicservice.setPublicData( this.mainpageitems)
      },
      error: (res) => {
        alert("Erro while Adding")
      }
    })
  }
}
