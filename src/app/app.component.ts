import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute){}
  selected = 'recipe'; //init
  onAddedSelector(input){
    this.selected = input;
    console.log(this.selected)
    this.router.navigate([this.selected], {relativeTo: this.route});
  }
  
}
