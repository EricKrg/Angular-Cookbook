import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredent.model'
import { ShoppingService } from '../shared/shopping.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  //providers: [ShoppingService] providedin the app module, so it is accessible in the recipe components
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients()
    this.shoppingService.ingredientChange.
      subscribe(
        (ingredients: Ingredient[]) =>(
          this.ingredients = ingredients
        )
      );
  }

}
