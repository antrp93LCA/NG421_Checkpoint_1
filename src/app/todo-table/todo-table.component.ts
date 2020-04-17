import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material';

export interface ITodo{
  
}

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styles: []
})
export class TodoTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
