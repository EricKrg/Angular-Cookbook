import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from '../../shared/shopping.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selRecipe: Recipe;
  
  toShoppingList(){
    /*
    for (const item of this.selRecipe.ingredients) {
      this.shoppingService.addIngredients(item)  
    }
    * with the for loop i emit alot of events, i avoid this with the .. (spread operator)
    */ 
   this.shoppingService.ingredients.push(...this.selRecipe.ingredients);
   this.shoppingService.ingredientChange.emit(this.shoppingService.getIngredients())
    alert("Ingredients added!")
  }

  constructor(private recipeService: RecipeService, 
              private shoppingService: ShoppingService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
       this.selRecipe = this.recipeService.getRecipe(params['name']);
    });
  }

}
