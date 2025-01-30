// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   selectedCategory: string = '';

//   selectCategory(category: string): void {
//     this.selectedCategory = category;
//   }
// }





// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   selectedCategory: string = '';

//   // Method to update the selected category
//   selectCategory(category: string): void {
//     console.log('Category selected:', category);  // Debugging step
//     this.selectedCategory = category;
//   }
// }





import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  selectCategory(category: string): void {
    const formattedCategory = category.replace(/\s+/g, ''); // Remove spaces for URL
    this.router.navigate([`/products`, formattedCategory]);
  }
}
