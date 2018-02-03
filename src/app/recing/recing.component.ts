import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";
import {Recette, IngredientRecette, Ingredient} from "../model-data";

@Component({
  selector: 'app-recing',
  templateUrl: './recing.component.html',
  styleUrls: ['./recing.component.css']
})
export class RecingComponent implements OnInit {

  recette: Recette;
  recing: IngredientRecette;
  ingredient: Ingredient;
  ingredients: Ingredient[];
  selectId: number;
  constructor(private route: ActivatedRoute,private router: Router,private apiService: ApiService) { }

  ngOnInit() {
    this.selectId = +this.route.snapshot.paramMap.get('idRecette');
    this.apiService.getRecette(this.selectId).subscribe(recette => this.recette = recette['Recette']);
    this.apiService.getIngredients().subscribe(Ingredients => this.ingredients = Ingredients);
  }

}
