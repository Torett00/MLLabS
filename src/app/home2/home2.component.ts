import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {

  constructor(private router: Router) {} 
  navigateToCafe(): void {
    this.router.navigate(['/menu1']);  // Redirect to 'target' route
  }

  navigateToThes(): void {
    this.router.navigate(['/thes']);  // Redirect to 'target' route
  }

  navigateToPizza(): void {
    this.router.navigate(['/pizza']);  // Redirect to 'target' route
  }

  navigateToCrepe(): void {
    this.router.navigate(['/crepes']);  // Redirect to 'target' route
  }

  navigateToPates(): void {
    this.router.navigate(['/pates']);  // Redirect to 'target' route
  }

  navigateToPlats(): void {
    this.router.navigate(['/plats']);  // Redirect to 'target' route
  }

  navigateToSuppl(): void {
    this.router.navigate(['/supple']);  // Redirect to 'target' route
  }

  navigateToMilk(): void {
    this.router.navigate(['/milk']);  // Redirect to 'target' route
  }

  navigateToCocktail(): void {
    this.router.navigate(['/cocktail']);  // Redirect to 'target' route
  }

  navigateToPatisseriesl(): void {
    this.router.navigate(['/patisseries']);  // Redirect to 'target' route
  }

  navigateToMojitus(): void {
    this.router.navigate(['/mojitos']);  // Redirect to 'target' route
  }

  navigateToEntree(): void {
    this.router.navigate(['/entree']);  // Redirect to 'target' route
  }


}
