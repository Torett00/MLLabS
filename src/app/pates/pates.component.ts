import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pates',
  templateUrl: './pates.component.html',
  styleUrls: ['./pates.component.css']
})
export class PatesComponent {
  constructor(private router: Router) {}
  goToMenu() {
    this.router.navigate(['']); // Replace '/categories' with your desired route
  }
}
