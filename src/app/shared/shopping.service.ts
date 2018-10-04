import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredent.model';

@Injectable()
export class ShoppingService {
   ingredients: Ingredient[] = [
    new Ingredient('onions', 4),
    new Ingredient('tomatoes', 5),
    new Ingredient('potatoes', 5)
  ];
  ingredientChange = new EventEmitter<Ingredient[]>();

  addIngredients(input: Ingredient){
    this.ingredients.push(input);
    this.ingredientChange.emit(this.getIngredients()) // add and emit that it has changed
  }  
  clearAll(){
    this.ingredients = []
  }
  getIngredients(){
    return this.ingredients.slice();
  }
  
    constructor() { }
  }
