import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

import { RecipesComponent } from './recipes/recipes.component';

import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';

import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';

import { DropdownDirective } from './dropdown.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service'

import {routing} from 'app/app.routes';

import { RecipeStartComponent } from './recipes/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    RecipesComponent,
    
    RecipeListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    ShoppingListAddComponent,
    
    DropdownDirective,
    
    RecipeStartComponent,
    
    RecipeStartComponent,
    
    RecipeStartComponent,
    
    RecipeEditComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
