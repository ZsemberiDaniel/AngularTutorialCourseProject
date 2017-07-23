import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, Input, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  @ViewChild('activatable') activatableView: ElementRef;

  constructor(private recipes: RecipeService,
              private renderer: Renderer2,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // highlight the chosen recipe via the link queries
    this.route.queryParams.subscribe(
      (params: Params) => {
        if (params['id'] && +params['id'] === this.recipe.id) {
          this.renderer.addClass(this.activatableView.nativeElement, 'active');
        } else {
          this.renderer.removeClass(this.activatableView.nativeElement, 'active');
        }
      }
    );
  }
}
