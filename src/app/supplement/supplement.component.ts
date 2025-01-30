import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplement',
  templateUrl: './supplement.component.html',
  styleUrls: ['./supplement.component.css']
})
export class SupplementComponent {
  constructor(private router: Router) {}
  goToMenu() {
    this.router.navigate(['/home2']); // Replace '/categories' with your desired route
  }
}
