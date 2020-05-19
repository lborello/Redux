import {
  Component,
  OnDestroy,
  OnInit
} from "@angular/core";

import { Subscription } from "rxjs";
import Swal from "sweetalert2";

import { Store } from "@ngrx/store";

import { IngresoEgreso } from "../../models/ingreso-egreso.model";
import { IngresoEgresoService } from "../../services/ingreso-egreso.service";
import { AppStateWithIngreso } from '../ingreso-egreso.reducer';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [],
})
export class DetalleComponent implements OnInit, OnDestroy {
  ingresosEgresos: IngresoEgreso[] = [];
  ingresosSubs: Subscription;

  constructor(
    private store: Store<AppStateWithIngreso>,
    private ingresoEgresoService: IngresoEgresoService
  ) {}

  ngOnInit() {
    this.ingresosSubs = this.store
      .select('ingresosEgresos')
      .subscribe(({ items }) => (this.ingresosEgresos = items));
  }
  ngOnDestroy() {
    this.ingresosSubs.unsubscribe();
  }

  borrar(uid: string) {
    this.ingresoEgresoService
      .borrarIngresoEgreso(uid)
      .then(() => Swal.fire('Borrado', 'Item borrado', 'success'))
      .catch((err) => Swal.fire('Error', err.message, 'error'));
  }
}
