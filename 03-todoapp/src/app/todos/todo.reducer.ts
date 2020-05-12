import { createReducer, on, Action } from '@ngrx/store';
import { crear, toggle, editar, editarDetalle, borrar, toggleAll, limpiarTodos } from './todo.actions';
import { Todo } from './models/todo.models';

export const estadoInicial: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('vence a tanos'),
  new Todo('salvar al mundo 2'),
  new Todo('salvar al mundo 3')
];
// tslint:disable-next-line: variable-name
const _todoReducer = createReducer(estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  // on( limpiarTodos, state =>  state.filter( todo => !todo.completado )  ),
  on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(limpiarTodos, (state) => state.filter(todo => !todo.completado)),
  on(toggleAll, (state, { completado }) => state.map(todo => {
    return {
      ...todo,
      completado
    };
  })),
  on(toggle, (state, { id }) => {
    return state.map(todo => {

      if (todo.id === id) {
        const id1 = { ...todo };
        console.log(id1.texto);
        console.log({ todo });
        console.log({ ...todo });
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto
        };
      } else {
        return todo;
      }
    });
  }),
  on(editarDetalle, (state, { id, texto }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto + 'detalle'
        };
      } else {
        return todo;
      }
    });
  }),

);

export function todoReducer(state: Todo[], action: Action) {
  return _todoReducer(state, action);
}