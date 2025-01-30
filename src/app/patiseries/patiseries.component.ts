import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patiseries',
  templateUrl: './patiseries.component.html',
  styleUrls: ['./patiseries.component.css']
})
export class PatiseriesComponent {
  constructor(private router: Router) {}
  goToMenu() {
    this.router.navigate(['/home2']); // Replace '/categories' with your desired route
  }
}
