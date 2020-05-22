import { Injectable } from "@angular/core";

import { of } from "rxjs";
import {
  catchError,
  map,
  mergeMap
} from "rxjs/operators";
import { UsuarioService } from "src/app/services/usuario.service";

import {
  Actions,
  createEffect,
  ofType
} from "@ngrx/effects";

import * as usuariosActions from "../actions";

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ){}


    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType( usuariosActions.cargarUsuarios ),
            mergeMap(
                ( action ) => this.usuarioService.getUserById( action.id )
                    .pipe(
                        map( user => usuariosActions.cargarUsuarioSuccess({ usuario: user }) ),
                        catchError( err => of(usuariosActions.cargarUsuarioError({ payload: err })) )
                    )
            )
        )
    );

}