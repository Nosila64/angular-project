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
    metier: this.metier
  };

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.selectedId = +this.route.snapshot.paramMap.get('idMetier');
    return this.apiService.getMetier(this.selectedId).subscribe(metier => {this.metier = metier['Metier']});
  }

  onClick(id: number){
    console.log(id);
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
