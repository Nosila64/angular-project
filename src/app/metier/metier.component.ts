import { Component, OnInit } from '@angular/core';
import {Personnage, Metier} from '../model-data';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ApiService} from "../api.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-metier',
  templateUrl: './metier.component.html',
  styleUrls: ['./metier.component.css']
})
export class MetierComponent implements OnInit {

  metier: Metier;
  private selectedId: number;

  constructor(private apiService: ApiService, private router: Router) {

  }

  ngOnInit() {

  }
  goToRecipe(idMetier: number) {
    this.router.navigate(['/recette',idMetier]);
  }

  onSubmit(nomMetier: string) {
    this.addMetier({nomMetier} as Metier);
  }

  addMetier(job: Metier) {
    this.apiService.addMetier(job).subscribe(job => { this.metier = job; this.goToRecipe(this.metier.idMetier)});
  }

}
