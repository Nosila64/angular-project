import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../model-data";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  ingredient: Ingredient;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(nomIngredient: string) {
    this.addIngredient({nomIngredient} as Ingredient);
  }

  addIngredient(ingredient: Ingredient) {
    this.apiService.addIngredient(ingredient).subscribe();
  }
}
