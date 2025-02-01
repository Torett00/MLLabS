import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mojitosetjus',
  templateUrl: './mojitosetjus.component.html',
  styleUrls: ['./mojitosetjus.component.css']
})
export class MojitosetjusComponent {
  constructor(private router: Router) {}
  goToMenu() {
    this.router.navigate(['']); // Replace '/categories' with your desired route
  }
}
