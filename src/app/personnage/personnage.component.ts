import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Personnage} from "../model-data";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.css']
})
export class PersonnageComponent implements OnInit {
  personnage: Personnage;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(nomPersonnage: string){
    this.addPerso({ nomPersonnage } as Personnage);
  }

  goToMetier(idPersonnage: number) {
    this.router.navigate(['/metier',idPersonnage]);
  }

  addPerso(personnage: Personnage) {
    this.apiService.addPerso(personnage).subscribe(personnage => { this.personnage = personnage; this.goToMetier(this.personnage.idPersonnage)});
  }
}
