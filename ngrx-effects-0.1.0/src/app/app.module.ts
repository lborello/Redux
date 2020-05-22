import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { appReducers } from "src/store/app.reducers";
import { EffectsArray } from "src/store/effects";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { environment } from "../environments/environment";
// Rutas
import { AppRoutingModule } from "./app-routing.module";
// Modulos personalizados
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { UsuariosModule } from "./usuarios/usuarios.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule,
    StoreModule.forRoot( appReducers),
    EffectsModule.forRoot( EffectsArray ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }