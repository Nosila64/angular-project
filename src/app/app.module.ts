import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonnageComponent } from './personnage/personnage.component';
import { MetierComponent } from './metier/metier.component';
import { RecetteComponent } from './recette/recette.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecingComponent } from './recing/recing.component';
import {ApiService} from "./api.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelloComponent } from './hello/hello.component';
import { ChoicemetierComponent } from './choicemetier/choicemetier.component';

const appRoutes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'personnage', component: PersonnageComponent },
  { path: 'metier', component: MetierComponent },
  { path: 'recette', component: RecetteComponent },
  { path: 'recette/:idMetier', component: RecetteComponent},
  { path: 'ingredient', component: IngredientComponent },
  { path: 'recing', component: RecingComponent },
  { path: 'metier/:idPersonnage', component: MetierComponent },
  { path: 'recing/:idRecette', component: RecingComponent },
  { path: 'dashboard/:idMetier/:idRecette', component: DashboardComponent },
  { path: 'cmetier', component: ChoicemetierComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonnageComponent,
    MetierComponent,
    RecetteComponent,
    IngredientComponent,
    RecingComponent,
    DashboardComponent,
    HelloComponent,
    ChoicemetierComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
