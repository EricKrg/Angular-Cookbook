import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';


const appRoutes = [
    // main routes
    {path: '', component: HomeComponent},
    {path: 'shoppinglist', component: ShoppingListComponent,
        children: [
         { path: ':edit', component: ShoppingEditComponent},
         { path: ':ingridients', component: ShoppingListComponent},
        ]},
    {path: 'recipes', component: RecipesComponent, 
        children: [
        { path: ':name', component: RecipeDetailComponent},
    ]},
    //not found
    { path: 'not-found', component: ErrorComponent, data: {message: 'Page not found'}}, 
    { path: '**', redirectTo: '/not-found'}, 
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]
})


export class AppRoutingModule {

}