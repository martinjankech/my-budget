import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TodoComponent} from './todo/todo.component';
import {Error404Component} from './error404/error404.component';
import {CalcComponent} from './calc/calc.component';
import {BudgetComponent} from './budget/budget.component';
import {NewItemComponent} from './budget/new-item/new-item.component';
import {ItemDetailComponent} from './budget/item-detail/item-detail.component';
import {EditItemComponent} from './budget/edit-item/edit-item.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: 'todo', component:TodoComponent},
  {path: 'calc', component: CalcComponent},
  {path: 'budget', component: BudgetComponent},
  {path: 'budget/new', component: NewItemComponent},
  {path: 'budget/:id', component: ItemDetailComponent},
  {path: 'budget/:id/edit', component: EditItemComponent},
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'**', component: Error404Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
