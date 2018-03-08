import {Component, OnInit} from '@angular/core';
import {Metier, Recette} from "../model-data";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})


export class RecetteComponent implements OnInit {
  private selectedId: number;
  private metier: Metier;
  private recette = {
    idRecette : 0,
    nomRecette: '',
    idMetier: 0
  };

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.selectedId = +this.route.snapshot.paramMap.get('idMetier');
    return this.apiService.getMetier(this.selectedId).subscribe(metier => {this.metier = metier['Metier']});
  }

  counter(i: number):Array<number> {
    let array = [];
    for(let j = 1;j < i+1;j++)
    {
      array.push(j);
    }
    return array;
  }

  onSubmit(recetteForm) {
    let dataform = recetteForm.value;
    this.addRecette(dataform as Recette);
  }

  addRecette(recette: Recette) {
    this.apiService.addRecette(recette).subscribe(recette => {
                                                                this.recette = recette;
                                                                this.goToRecing(this.recette.idRecette);
                                                             }
                                                 );
  }
  goToRecing(idRecette: number) {
    this.router.navigate(['/recing',idRecette])
  }

}
