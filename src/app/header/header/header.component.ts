import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() recipesClicked = new EventEmitter<null>();
  @Output() shoppingClicked = new EventEmitter<null>();

  constructor() { }

}
