import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.models';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtroActual: filtrosValidos;

  constructor(private store: Store<AppState>) { }

  // funciona tb asi ngOnInit() {
  //   this.store.select('todos').subscribe(todos => this.todos = todos);
  //   this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro);
  //   console.log (this.filtroActual );
  //   console.log(this.todos);
  // }
  ngOnInit() {
    this.store.subscribe(({todos, filtro}) => {
      this.todos = todos;
      this.filtroActual = filtro;
    });

    console.log(this.filtroActual);
    console.log(this.todos);
  }

}
