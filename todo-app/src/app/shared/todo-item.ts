export class TodoItem {
  itemId: number;
  description: string;
  done: boolean;

  constructor(description?: string) {
    this.description = description;
  }
}
