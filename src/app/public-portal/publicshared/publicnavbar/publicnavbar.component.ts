import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-publicnavbar',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './publicnavbar.component.html',
  styleUrl: './publicnavbar.component.css'
})
export class PublicnavbarComponent {

}
