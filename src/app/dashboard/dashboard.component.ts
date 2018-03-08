import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {Recette, Ingredient, IngredientRecette, Metier} from "../model-data";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  idMetier: number;
  idRecette: number;
  recap: Object;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.idMetier = +this.route.snapshot.paramMap.get('idMetier');
    this.idRecette = +this.route.snapshot.paramMap.get('idRecette');
    return this.apiService.getRecap(this.idMetier,this.idRecette).subscribe(recap => this.recap = recap['recap']);
  }

}
