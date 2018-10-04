import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()selector = new EventEmitter<string>();
  onRecipe(){
    this.selector.emit('recipes')
  }
  onShopping(){
    this.selector.emit('shoppinglist')
  }

  constructor() { }

  ngOnInit() {
  }

}
