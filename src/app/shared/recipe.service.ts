import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredent.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe("Soup",
      "this is a test",
      "https://static01.nyt.com/images/2016/11/29/dining/recipelab-chick-noodle-still/recipelab-chick-noodle-still-videoSixteenByNineJumbo1600.jpg",
      [
        new Ingredient("Potatoe", 4),
        new Ingredient("Meat", 2)
      ]),
    new Recipe("Bowl",
      "this is a test",
      "https://images.ichkoche.at/data/image/variations/496x384/12/default-img-116146.jpg",
      [
        new Ingredient("Noodles", 4),
        new Ingredient("Carrot", 2),
        new Ingredient("Sproutse", 5)
      ]),
    new Recipe("Cabonara",
      "this is a test",
      "https://img.bildderfrau.de/img/kochen-backen/crop210906227/4006637988-w820-cv16_9-q85-dc1/Carbonara.jpg",
      [
        new Ingredient("Noodles", 4),
        new Ingredient("Gran Padano", 2),
        new Ingredient("Eggs", 5)
      ]),
  ]; // recipe has to be an array of obj. with the class Recipe

  getRecipes(){
    return this.recipes.slice(); // this only returns a copy of the actual recipes array  
  }
  getRecipe(name: string){
    const recipe = this.recipes.find(
      (r) => {
        return r.name === name;
      }
    );
    return recipe ;
  }
  constructor() { }
}
