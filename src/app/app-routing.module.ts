import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {TimesheetComponent} from './timesheet/timesheet.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {MailboxComponent} from './mailbox/mailbox.component';
import {InboxComponent} from './inbox/inbox.component';
import {SentComponent} from './sent/sent.component';
import {StaredComponent} from './stared/stared.component';
import {JunkComponent} from './junk/junk.component';
import {ParentOneComponent} from './parent-one/parent-one.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'mail', component: MailboxComponent, 
    children:[
      {path: '', component: InboxComponent},
      {path: 'sent', component: SentComponent},
      {path: 'stared', component: StaredComponent},
      {path: 'junk', component: JunkComponent},
    ]
  },
  {path: 'time-sheet', component: TimesheetComponent},
  {path: 'todo-list',  component: TodoListComponent},
  {path: 'parent', component: ParentOneComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
