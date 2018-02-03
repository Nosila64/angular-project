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
  metier: Metier;
}

export class Ingredient {
  idIngredient: number;
  nomIngredient: string;
}

export class IngredientRecette {
  ingredient: Ingredient;
  metier: Metier;
  recette: Recette;
  quantite: number;
}

export class  MetierPersonnage {
  metier: Metier;
  personnage: Personnage;
  niveau: number;
}
