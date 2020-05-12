import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filtro/filtro.actions';
import { limpiarTodos } from '../todo.actions';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  pendiente = 0;
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.subscribe(state => {
      // console.log(state);
      this.filtroActual = state.filtro;
      // tslint:disable-next-line: no-unused-expression
      this.pendiente = state.todos.filter(todo => !todo.completado).length;
    });

    this.store.select('filtro').subscribe((filtro) => console.log(filtro));
  }
  cambiarFiltro(filtro: actions.filtrosValidos) {
    this.store.dispatch(actions.setFiltro({ filtro }));
    // console.log(filtro);
  }
  limpiarTodos(){
    this.store.dispatch(limpiarTodos());
  }

}
