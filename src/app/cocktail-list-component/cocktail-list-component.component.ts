import { Component } from '@angular/core';
import { CocktailService } from '../cocktail-service.service';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.scss']
})
export class CocktailListComponentComponent {

  public cocktails: any[] = [];

  constructor(private cocktailService: CocktailService) {
    this.cocktails = this.cocktailService.getCocktails();
  }

}