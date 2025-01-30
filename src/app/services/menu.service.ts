// // src/app/services/menu.service.ts
// import { Injectable } from '@angular/core';

import { Injectable } from "@angular/core";

// @Injectable({
//   providedIn: 'root'
// })
// export class MenuService {
//   // Define the categories and products
//   categories = {
//     'NosCafe': [
//       { name: 'Espresso', price: '3.00€' },
//       { name: 'Latte', price: '3.50€' },
//       { name: 'Cappuccino', price: '4.00€' },
//     ],
//     'Nos Thés': [
//       { name: 'Green Tea', price: '2.50€' },
//       { name: 'Black Tea', price: '2.50€' }
//     ],
//     // Add more categories and products here
//   };

//   // Method to get products for a given category
//   getProductsForCategory(category: string) {
//     return this.categories[category as keyof typeof this.categories] || [];
//   }
  
// }


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // Define the categories and products
  categories = {
    'NosCafe': [
      { name: 'Espresso', price: '3.000' },
      { name: 'Latte', price: '3.500' },
      { name: 'Cappuccino', price: '4.000' },
    ],
    'NosThés': [
      { name: 'Green Tea', price: '2.500' },
      { name: 'Black Tea', price: '2.500' },
    ],
    
    // Add more categories and products here
  };

  // Method to get products for a given category
  getProductsForCategory(category: string) {
    // Ensure the category exists
    if (this.categories.hasOwnProperty(category)) {
      return this.categories[category as keyof typeof this.categories];
    }
    return [];
  }
}
