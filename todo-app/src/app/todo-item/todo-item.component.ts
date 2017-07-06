import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../shared/todo-item';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html'
})

export class TodoItemComponent {
  @Input() item: TodoItem;
  @Output() itemToggled: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemDeleted: EventEmitter<any> = new EventEmitter<any>();

  toggle(e) {
    this.item.done = !this.item.done;
    this.itemToggled.emit(this.item.itemId);
  }

  delete() {
    this.itemDeleted.emit(this.item.itemId);
  }
}
