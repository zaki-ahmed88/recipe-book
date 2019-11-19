import { Component, Input } from '@angular/core';
import {Recipe} from '../recipe'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent  {
  @Input() recipe: Recipe;     /**input means that it is set from out side of this compoonent */
  @Input() recipeId: number;

  

}
