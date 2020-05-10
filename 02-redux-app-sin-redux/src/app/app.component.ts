import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number  ;
  constructor(){
    this.contador = 10;
  }

  incrementar() {
    // tslint:disable-next-line: no-unused-expression
    this.contador ++ ;
  }

  decrementar() {
    this.contador -- ;
  }

}
