import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private cocktails: Cocktail[] = [
    { name: 'Mojito', price: 7.5, image: 'mojito.jpg' },
    { name: 'Cosmopolitan', price: 8, image: 'cosmopolitan.jpg' },
    { name: 'Margarita', price: 7, image: 'margarita.jpg' }
  ];


  getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}

interface Cocktail {
  name: string;
  price: number;
  image: string;
}

