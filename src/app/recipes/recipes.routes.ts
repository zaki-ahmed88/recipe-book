import {Routes, RouterModule} from '@angular/router'
import {RecipeStartComponent} from 'app/recipes/recipe-start.component'
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';




 export const Recipe_Routes: Routes = 
        [
            {path: '', component: RecipeStartComponent},
            {path: 'new', component: RecipeEditComponent},
            {path: ':id', component: RecipeDetailComponent},
            {path: ':id/edit', component: RecipeEditComponent}
        ]
        
    


export const routing = RouterModule.forRoot(Recipe_Routes);