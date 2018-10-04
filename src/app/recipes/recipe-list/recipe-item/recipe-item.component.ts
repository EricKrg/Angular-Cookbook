import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model'
import { RecipeService } from '../../../shared/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() item: Recipe;
  //@Output() recipe = new EventEmitter<Recipe>(); we will do this better with a service!
  
  selected = false;
  onClick(){
    this.recipeService.recipeSelected.emit(this.item);
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
