import { Component, Input } from '@angular/core';
import { PublicPortalServicesService } from '../../Services/PublicPortalServices/public-portal-services.service';

@Component({
  selector: 'app-rulesregulation',
  standalone: true,
  imports: [],
  templateUrl: './rulesregulation.component.html',
  styleUrl: './rulesregulation.component.css'
})
export class RulesregulationComponent {


  rulesandregulation : string='';
  constructor(private publicservice: PublicPortalServicesService) {

  }

    ngOnInit(): void { this. getrulesandregulation();}
   getrulesandregulation(){
    this.publicservice.getPubliData().subscribe((data) => {

      if (data?.rulesRegulation !== null && data?.rulesRegulation !== undefined) {
        this.rulesandregulation = data.rulesRegulation;
      } else {
        this.rulesandregulation = 'Default value'; // Fallback if null or undefined
      }
     // this.rulesandregulation = data.rulesRegulation.; // Access shared data from the service
    });

   }

}
