import {RouterModule, Routes} from '@angular/router'
import {RecipesComponent} from 'app/recipes/recipes.component'
import {ShoppingListComponent} from 'app/shopping-list/shopping-list.component'
import {Recipe_Routes} from './recipes/recipes.routes'


 const APP_ROUTES_PROVIDERS: Routes = 
        [
            {path: '', redirectTo: '/recipes', pathMatch: 'full'},
            {path: 'recipes', component: RecipesComponent, children: Recipe_Routes},
            {path: 'shopping-list', component: ShoppingListComponent}
        ]
        
    


export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDERS);