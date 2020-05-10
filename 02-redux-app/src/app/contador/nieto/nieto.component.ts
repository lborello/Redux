import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app.reducers';
import { reset } from '../contador.actions';


@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
  
  contador : number ;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe( contador  => this.contador = contador );
   
  }
  Reset() {
  this.store.dispatch(reset());

  }


}
