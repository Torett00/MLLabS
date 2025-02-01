import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-milkshake',
  templateUrl: './milkshake.component.html',
  styleUrls: ['./milkshake.component.css']
})
export class MilkshakeComponent {
  constructor(private router: Router) {}
  goToMenu() {
    this.router.navigate(['']); // Replace '/categories' with your desired route
  }
}
