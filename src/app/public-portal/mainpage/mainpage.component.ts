import { Component } from '@angular/core';
import { PublicPortalServicesService } from '../../Services/PublicPortalServices/public-portal-services.service';
import { PublicmainPage } from '../../models/Common/public-mainpage.model ';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainPageComponent {

  mainpageitems : PublicmainPage = {
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
  constructor(private publicservice: PublicPortalServicesService) {

  }

    ngOnInit(): void {
       this. getManagingComitee();}
   getManagingComitee(){
    this.publicservice.getPubliData().subscribe((data) => {

      if (data !== null && data !== undefined) {
        this.mainpageitems = data;
      }

    });

   }

}
