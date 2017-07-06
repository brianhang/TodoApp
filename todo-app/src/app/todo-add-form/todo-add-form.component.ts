import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../shared/todo-item';
import { TodoService } from '../todo-item/todo-item.service';

@Component({
  selector: 'todo-add-form',
  templateUrl: './todo-add-form.component.html'
})

export class TodoAddForm {
  description: string;
  submitted: boolean;
  @Output() itemAdded: EventEmitter<any> = new EventEmitter();

  constructor(private _todoService: TodoService) {
    this.description = "";
    this.submitted = false;
  }

  onSubmit() {
    if (this.description.length == 0) {
      return;
    }

    this.submitted = true;

    this._todoService.addItem(this.description)
      .then(item => {
        this.submitted = false;
        this.description = "";

        this.itemAdded.emit(item);
      })
      .catch(error => {
        console.error(error.message || error);
        this.submitted = false;
      });
  }
}
