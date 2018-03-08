import { Injectable } from '@angular/core';
import {Personnage, Metier, Recette, Ingredient, IngredientRecette} from "./model-data";
import {HttpClient} from "@angular/common/http";
import {environment} from '../environments/environment';
import {Observable} from "rxjs";

const API_URL = environment.apiUrl;
@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  addPerso(personnage: Personnage):Observable<Personnage> {
    console.log(personnage);
    return this.http.post<Personnage>(API_URL+"/api/perso",personnage);
  }

  getPerso(idPersonnage: number):Observable<Personnage> {
    return this.http.get<Personnage>(API_URL+"/api/metier/"+idPersonnage);
  }

  addMetier(metier: Metier):Observable<Metier> {
    return this.http.post<Metier>(API_URL+"/api/job",metier);
  }

  getMetier(idMetier: number):Observable<Metier> {
    return this.http.get<Metier>(API_URL+"/api/job/"+idMetier);
  }

  addRecette(recette: Recette): Observable<Recette> {
    return this.http.post<Recette>(API_URL+"/api/recipe", recette);
  }

  addIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(API_URL+"/api/ingredient", ingredient);
  }

  getRecette(idRecette: number): Observable<Recette> {
    return this.http.get<Recette>(API_URL+"/api/recipe/"+idRecette);
  }
  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(API_URL+"/api/ingredients");
  }

  addRecing(recing: IngredientRecette[]): Observable<any> {
    return this.http.post(API_URL + "/api/recing", recing);
  }
  getRecap(idMetier: number,idRecette: number) {
    console.log(idMetier);
    console.log(idRecette);
    return this.http.get(API_URL + "/api/recap/"+idMetier+"/"+idRecette  );
  }
}
