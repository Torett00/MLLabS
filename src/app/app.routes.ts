import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Home2Component } from './home2/home2.component';
import { ThesComponent } from './thes/thes.component';
import { PizzaComponent } from './pizza/pizza.component';
import { CrepesComponent } from './crepes/crepes.component';
import { PatesComponent } from './pates/pates.component';
import { PlatsComponent } from './plats/plats.component';
import { SupplementComponent } from './supplement/supplement.component';
import { MilkshakeComponent } from './milkshake/milkshake.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { PatiseriesComponent } from './patiseries/patiseries.component';
import { MojitosetjusComponent } from './mojitosetjus/mojitosetjus.component';
import { EntreeComponent } from './entree/entree.component';

export const routes: Routes = [
  
  { path: 'home2' , component: Home2Component},

  { path: 'thes' , component: ThesComponent},
  { path: 'pizza' , component: PizzaComponent},
  { path: 'crepes' , component: CrepesComponent},

   { path: 'pates' , component: PatesComponent},
   { path: 'plats' , component: PlatsComponent},

   { path: 'supple' , component: SupplementComponent},
   { path: 'milk' , component: MilkshakeComponent},

   { path: 'cocktail' , component: CocktailsComponent},//phot not yest fixed
  
   { path: 'patisseries' , component: PatiseriesComponent},

   
   { path: 'mojitos' , component: MojitosetjusComponent},

   { path: 'entree' , component: EntreeComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
