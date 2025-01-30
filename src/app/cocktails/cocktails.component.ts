import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent {
  constructor(private router: Router) {}
  goToMenu() {
    this.router.navigate(['/home2']); // Replace '/categories' with your desired route
  }

}
