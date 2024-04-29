import { Component } from '@angular/core';
import { CarteVisite } from './carte-visite.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carte-visite',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './carte-visite.component.html',
  styleUrl: './carte-visite.component.css'
})
export class CarteVisiteComponent {
  carteVisite: CarteVisite = new CarteVisite()
  onSubmit() {
    console.log(this.carteVisite)
  }
}
