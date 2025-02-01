import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';





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
import { AppRoutingModule } from './app.routes';
import { TessssstComponent } from './tessssst/tessssst.component';

@NgModule({
  declarations: [
    AppComponent,
    TessssstComponent,
   
        

         Home2Component,

         ThesComponent,
         PizzaComponent,
         CrepesComponent,
         PatesComponent,
         PlatsComponent,
         SupplementComponent,
         MilkshakeComponent,
         CocktailsComponent,
         PatiseriesComponent,
         MojitosetjusComponent,
         EntreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
