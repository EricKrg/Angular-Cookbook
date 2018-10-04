import { EventEmitter,Component, OnInit, ViewChild, Output } from '@angular/core';
import { Ingredient }from '../../shared/ingredent.model'
import { ShoppingService } from '../../shared/shopping.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name;
  @ViewChild('amountInput') amount;
  
  clear(){
    this.shoppingService.clearAll();
    this.shoppingService.ingredientChange.emit(this.shoppingService.getIngredients());
  }

  add(){
    this.shoppingService.addIngredients(new Ingredient(
      this.name.nativeElement.value,
      this.amount.nativeElement.value));
    

  }
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

}
