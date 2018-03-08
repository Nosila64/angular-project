export class Personnage {
  idPersonnage: number;
  nomPersonnage: string;
}

export class Metier {
  idMetier: number;
  nomMetier: string;
  recettes: Recette[];
}

export class Recette {
  idRecette: number;
  nomRecette: string;
  idMetier: number;
}

export class Ingredient {
  idIngredient: number;
  nomIngredient: string;
}

export class IngredientRecette {
  quantite: number;
  idRecette: number;
  idMetier: number;
  idIngredient: number;
}

export class  MetierPersonnage {
  idMetier: number;
  idPersonnage: number;
  niveau: number;
}
