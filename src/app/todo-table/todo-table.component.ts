import { Component, OnInit } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styles: []
})
export class TodoTableComponent implements OnInit {

  get todoList(): ITodo[]{
    return this.todoService.getTodos();
  }

  displayedColumns: string[] = ['id'];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

}
