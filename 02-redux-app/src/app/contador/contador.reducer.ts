import { createReducer, on, Action, props } from '@ngrx/store';
import { incrementar, decrementar, reset, dividir, multiplicar } from './contador.actions';
export const initialState = 0;
// tslint:disable-next-line: variable-name
const _contadorReducer = createReducer(initialState,
    on(incrementar, state => state + 1),
    on(decrementar, (state) =>  state - 1 ),
    // tslint:disable-next-line: no-shadowed-variable
    on(dividir,  (state , props ) =>  state / props.numero  ),
    on(multiplicar,  (state , {numero } ) =>  state * numero   ),
    on(reset, state => 0),
);
export function contadorReducer( state: number, action: Action) {
    return _contadorReducer(state, action);
}
