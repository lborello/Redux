import {
  Component,
  OnInit
} from "@angular/core";

import {
  Label,
  MultiDataSet
} from "ng2-charts";
import { IngresoEgreso } from "src/app/models/ingreso-egreso.model";

import { Store } from "@ngrx/store";

import { AppState } from "../../app.reducer";

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit {
 // Doughnut
 public doughnutChartLabels: Label[] = ['Ingresos', 'Egresos'];
 public doughnutChartData: MultiDataSet = [ [] ];


  const ingresos = 0;
  const egresos = 0;
  const totalEgresos = 0;
  const totalIngresos = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('ingresosEgresos').subscribe(({ items }) => {
      return this.generarEstadistica(items);
    });
  }
  generarEstadistica(items: IngresoEgreso[]) {
    this.ingresos = 0;
    this.egresos = 0;
    this.totalEgresos = 0;
    this.totalIngresos = 0;

    // tslint:disable-next-line: triple-equals
    // console.log('Ingresos', items.filter(fil => fil.tipo === 'ingreso'));
    // console.log('Egresos', items.filter(fil => fil.tipo !== 'ingreso'));
    items.forEach(element => {
      if (element.tipo === 'ingreso') {
        this. ingresos ++ ;
        this.totalIngresos =  this.totalIngresos +   element.monto ;
       }
      if (element.tipo !==  'ingreso' ) {
        this.egresos ++ ;
        this.totalEgresos =  this.totalEgresos + element.monto ;
       }
        this.doughnutChartData = [ [ this.totalIngresos , this.totalEgresos ] ];

    });
  }

}
