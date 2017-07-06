import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoAddForm } from './todo-add-form/todo-add-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './todo-item/todo-item.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoAddForm
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
