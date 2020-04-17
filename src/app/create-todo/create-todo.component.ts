import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todo :ITodo
  
  
  constructor(private todoService : TodoService) { }

  ngOnInit() {
  }

  addTodo(ITodo):void {
    this.todoService.addTodo(ITodo);
    
    // resets our todoTitle variable to an empty string
    this.todo.title = '';
    this.todo.status = 'Todo';
    this.todo.createdAt = new Date();
  }

}
