import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  footer = 'Universidad del Quindío 2024-2';
  title = 'my-app';
}
