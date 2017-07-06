import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo-item/todo-item.service'
import { TodoItem } from './shared/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title = 'app';
  todoList: TodoItem[] = [];

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this._todoService.getItems().then(items => {
      this.todoList = items;
    });
  }

  onItemAdded(item: TodoItem) {
    this.todoList.push(item);
  }

  onItemDeleted(itemId: number) {
    this.todoList = this.todoList.filter(item => item.itemId != itemId);
    this._todoService.deleteItem(itemId);
  }

  onItemToggled(itemId: number) {
    let index = this.todoList.findIndex(item => item.itemId == itemId)

    if (index != -1) {
      this.todoList[index].done = !this.todoList[index].done;
      this._todoService.updateItem(itemId);
    }
  }
}
