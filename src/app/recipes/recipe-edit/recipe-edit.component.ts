import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit, OnDestroy  {

  private recipeIndex: number;
  private subscription: Subscription;
  private recipe: Recipe;
 
  recipeForm: FormGroup;
  private isNew = true;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router)
   { 

   }

  ngOnInit() 
  {
    
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id'))
        {
          this.isNew = false;
          this.recipeIndex = +params['id']         /* + to convert it from string to number */

          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        }
        else
        {
          this.isNew = true;
          this.recipe = null
        }
        this.initForm();
        console.log(this.isNew);
      }
    )
  }
  







  onSubmit()
  {
    const newRecipe = this.recipeForm.value;
    if(this.isNew)
    {
      this.recipeService.addRecipe(newRecipe);
    }
    else
    {
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }

    this.navigateBack();
  }


  private navigateBack()
  {
    this.router.navigate(['../'])                /* tonavigae back */
  }


  onCancel()
  {
    this.navigateBack();
  }


  onAddItem(name: string, amount: string)
  {
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        amount: new FormControl(amount,[ Validators.required, Validators.pattern("\\d+")])
      
      })
    )
  }

  onRemoveItem(index: number)
  {
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }










 ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }



  private initForm()
  {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if(!this.isNew)
    {
      if(this.recipe.hasOwnProperty('ingredients'))
      {
        for(let i=0; i<this.recipe.ingredients.length; i++)
        {
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
            amount: new FormControl(this.recipe.ingredients[i].amount,[ Validators.required, Validators.pattern("\\d+")])
            })
          );
        }
      }
      

      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;

    }

   


    
    

  }
}