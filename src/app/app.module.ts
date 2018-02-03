import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonnageComponent } from './personnage/personnage.component';
import { MetierComponent } from './metier/metier.component';
import { RecetteComponent } from './recette/recette.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecingComponent } from './recing/recing.component';
import {ApiService} from "./api.service";

const appRoutes: Routes = [
  { path: 'personnage', component: PersonnageComponent },
  { path: 'metier', component: MetierComponent },
  { path: 'recette', component: RecetteComponent },
  { path: 'recette/:idMetier', component: RecetteComponent},
  { path: 'ingredient', component: IngredientComponent },
  { path: 'recing', component: RecingComponent },
  { path: 'metier/:idPersonnage', component: MetierComponent },
  { path: 'recing/:idRecette', component: RecingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonnageComponent,
    MetierComponent,
    RecetteComponent,
    IngredientComponent,
    RecingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
