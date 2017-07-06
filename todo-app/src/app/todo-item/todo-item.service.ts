import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import { TodoItem } from '../shared/todo-item';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
  private headers: Headers = new Headers();
  private options: RequestOptionsArgs;

  constructor(private _httpService: Http) {
    this.headers.append('Content-Type', 'application/json');
    this.options = {headers: this.headers};
  }

  getItems(): Promise<TodoItem[]> {
    return this._httpService.get('/api/todo/')
      .toPromise()
      .then(items => items.json() as TodoItem[])
      .catch(this.handleRejection);
  }

  addItem(description: string): Promise<any> {
    const body = JSON.stringify({
      description: description
    });

    return this._httpService.post('/api/todo/', body, this.options)
      .toPromise()
      .then(item => item.json() as TodoItem)
      .catch(this.handleRejection);
  }

  updateItem(itemId: number): Promise<any> {
    return this._httpService.put(`/api/todo/${itemId}/`, null)
      .toPromise();
  }

  deleteItem(itemId: number): Promise<any> {
    return this._httpService.delete(`/api/todo/${itemId}/`)
      .toPromise();
  }

  private handleRejection(error: any): Promise<any> {
    console.error(error.message || error);

    return Promise.reject(error.message || error);
  }
}
