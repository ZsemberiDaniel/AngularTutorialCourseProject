import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentOpen = 'recipes';

  switchToRecipes() { this.componentOpen = 'recipes'; }
  switchToShopping() { this.componentOpen = 'shopping'; }
  isRecipesOpen() { return this.componentOpen === 'recipes'; }
  isShoppingOpen() { return this.componentOpen === 'shopping'; }
}
