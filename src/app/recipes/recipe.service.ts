import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from 'app/shared/ingredient';
import {Http, Headers, Response} from '@angular/http';
import "rxjs/add/operator/map" 

@Injectable()
export class RecipeService {

  recipesChanged = new EventEmitter<Recipe[]>();


  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty', 'https://sifu.unileversolutions.com/image/en-LK/recipe-topvisual/2/1260-709/golden-chicken-pane-with-three-bean-salad-50283245.jpg',
    [
      new Ingredient("French Fries", 2),
      new Ingredient("Pork Meat", 1),
      
    ]),
    new Recipe('Summer Salade', 'Okayish', 'https://www.asaucykitchen.com/wp-content/uploads/2016/08/Summer-Salad-2-1-480x360.jpg', 
    [
      new Ingredient("Salade", 1)
    ]),
    new Recipe('Fish', 'V.Good', 'https://printground.net/wp-content/uploads/2017/08/Fish_Food_Lemons_Trout_Plate_528017_3000x2000MIN.jpg', 
    [
      new Ingredient("Fish", 2),
      new Ingredient("Soap", 1)
    ])
  ];
  
  constructor(private http: Http){}

  getRecipes()
  {
    return this.recipes;
  }


  getRecipe(id: number)
  {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe)
  {
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }






  addRecipe(recipe: Recipe)
  {
    this.recipes.push(recipe);
  }


  editRecipe(oldRecipe: Recipe, newRecipe: Recipe)
  {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }







  storeData()
  {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://recipe-book-4f06c.firebaseio.com/recipes.json', body, {headers: headers});
  }
  /* put is instead of post to overwrite the old data */


  fetchData()
  {
    return this.http.get('https://recipe-book-4f06c.firebaseio.com/recipes.json')
    .map((response: Response) => response.json())
    .subscribe(
      (data: Recipe[]) =>
      {
        this.recipes = data;
        this.recipesChanged.emit(this.recipes);
      }
    );
  }





}
