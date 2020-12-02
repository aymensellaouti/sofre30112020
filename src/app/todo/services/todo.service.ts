import { Injectable } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private loggerService: LoggerService) {}
  logTodo() {
    this.loggerService.logger(this.todos);
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
  getTodos(): Todo[] {
    return this.todos;
  }
}
