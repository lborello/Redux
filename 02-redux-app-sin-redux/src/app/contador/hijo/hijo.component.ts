import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';



@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent implements OnInit {
  @Input() contador: number;
  @Output() cambioContador = new EventEmitter <number> () ;

  constructor() { }

  ngOnInit() {
    
  }

  Multiplicar(){
    this.contador = this.contador * 2 ;
    this.cambioContador.emit(this.contador);
  }
Dividir(){
  this.contador = this.contador / 2 ;
  this.cambioContador.emit(this.contador);
}
resetNieto(nuevoContador: number) {
  this.contador = nuevoContador ;
  this.cambioContador.emit(this.contador);
}


}
