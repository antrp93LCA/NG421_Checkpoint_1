import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todo : ITodo
  
  constructor(private todoService : TodoService) { }

  ngOnInit() {
  }

  addTodo(todo: ITodo):void {
    this.todo.status = 'Todo';
    this.todo.createdAt = new Date();
    this.todoService.addTodo(todo);
    
    this.todo.title = '';
    // resets our todoTitle variable to an empty string
  }

}
