import { Component, OnInit, ViewChild } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';
import {MatSort, MatTableDataSource} from  '@angular/material';


@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css'],
})
export class TodoTableComponent implements OnInit {
  dataSource = new MatTableDataSource(this.todoList);

  get todoList(): ITodo[]{
    return this.todoService.getTodos();
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort

  displayedColumns: string[] = ['id', 'title','status', 'description','createdAt'];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
