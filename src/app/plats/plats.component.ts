import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent {
  constructor(private router: Router) {}
  goToMenu() {
    this.router.navigate(['']); // Replace '/categories' with your desired route
  }
}
