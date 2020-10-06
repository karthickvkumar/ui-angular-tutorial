import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {TimesheetComponent} from './timesheet/timesheet.component';
import {TodoListComponent} from './todo-list/todo-list.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'time-sheet', component: TimesheetComponent},
  {path: 'todo-list',  component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
