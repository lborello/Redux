import { Component, OnInit } from '@angular/core';
import { AppState } from 'app.reducers';
import { Store } from '@ngrx/store';
import { dividirAction } from '../../../../../01-redux-basic/contador/contador.actions';

import { multiplicar, dividir } from '../contador.actions';



@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent implements OnInit {

  contador: number ;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe( contador  => this.contador = contador );
  }

  Multiplicar() {
      this.store.dispatch(multiplicar ({numero: 3 }));
  }
  Dividir() {
    this.store.dispatch(dividir ({numero: 2 }));
    // this.store.dispatch(actions.dividir);
  }


}
