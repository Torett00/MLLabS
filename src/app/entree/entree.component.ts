import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.css']
})
export class EntreeComponent {
  constructor(private router: Router) {}
  goToMenu() {
    this.router.navigate(['/home2']); // Replace '/categories' with your desired route
  }
}
