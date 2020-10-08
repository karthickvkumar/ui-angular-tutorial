import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DirectiveComponent } from './directive/directive.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { ApiService } from './api.service';
import { HttpClientModule } from "@angular/common/http";
import { MailboxComponent } from './mailbox/mailbox.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { StaredComponent } from './stared/stared.component';
import { JunkComponent } from './junk/junk.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    DirectiveComponent,
    TimesheetComponent,
    TodoListComponent,
    MailboxComponent,
    InboxComponent,
    SentComponent,
    StaredComponent,
    JunkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
