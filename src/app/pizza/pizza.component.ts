import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {
  constructor(private router: Router) {}
  goToMenu() {
    this.router.navigate(['']); // Replace '/categories' with your desired route
  }
}
