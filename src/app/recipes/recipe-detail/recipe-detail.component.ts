import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Recipe} from '../recipe'
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  @Input() selectedRecipe: Recipe;
  private recipeIndex: number ;
  private subscription: Subscription;

  constructor(private sls: ShoppingListService, private router: Router, private route: ActivatedRoute, private recipesService: RecipeService) { }

  ngOnInit() 
  {
    this.subscription = this.route.params.subscribe
    (
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
      }
    )
  }



  onEdit()
  {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }
  onDelete()
  {
    this.recipesService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }


  onAddToShoppingList()
  {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

}
