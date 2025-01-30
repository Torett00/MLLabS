import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thes',
  templateUrl: './thes.component.html',
  styleUrls: ['./thes.component.css']
})
export class ThesComponent {
  constructor(private router: Router) {}
  goToMenu() {
    this.router.navigate(['/home2']); // Replace '/categories' with your desired route
  }
}
