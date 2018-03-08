import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";
import {Recette, IngredientRecette, Ingredient} from "../model-data";
import {FormGroup, FormBuilder, FormArray} from "@angular/forms";

@Component({
  selector: 'app-recing',
  templateUrl: './recing.component.html',
  styleUrls: ['./recing.component.css']
})
export class RecingComponent implements OnInit {
  public recingForm: FormGroup;
  recette: Recette;
  recing: IngredientRecette;
  ingredient: Ingredient;
  ingredients: Ingredient[];
  selectId: number;
  constructor(private route: ActivatedRoute,private router: Router,private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.selectId = +this.route.snapshot.paramMap.get('idRecette');
    this.apiService.getRecette(this.selectId).subscribe(recette => this.recette = recette['Recette']);
    this.apiService.getIngredients().subscribe(Ingredients => this.ingredients = Ingredients);
    this.recingForm = this.fb.group({
      ingredientsForm: this.fb.array([
        this.initIngredient(),
      ])
    })
  }

  initIngredient(): FormGroup {
    return this.fb.group({
      quantite: '',
      idRecette: '',
      idMetier: '',
      idIngredient: ''
    });
  }

  addIngredientForm(): void {
    const control = <FormArray>this.recingForm.controls['ingredientsForm'];
    control.push(this.initIngredient());
  }
  removeIngredientForm(i: number): void {
    const control = <FormArray>this.recingForm.controls['ingredientsForm'];
    control.removeAt(i);
  }

  onSubmit(recingForm): void {
    let dataForm = recingForm.value;
    this.addRecing(dataForm as IngredientRecette[]);
  }

  addRecing(recing: IngredientRecette[]) {
    this.apiService.addRecing(recing).subscribe(redirect => this.goToDashBoard(this.recette.idMetier, this.recette.idRecette));
  }

  goToDashBoard(idMetier: number, idRecette: number): void {
    this.router.navigate(['/dashboard', idMetier, idRecette]);
  }
}
