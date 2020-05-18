import {
  Pipe,
  PipeTransform
} from "@angular/core";

import { IngresoEgreso } from "../models/ingreso-egreso.model";

@Pipe({
  name: 'ordenIngreso'
})
export class OrdenIngresoPipe implements PipeTransform {
  transform(items: IngresoEgreso[]): IngresoEgreso[] {
    // const NewItems = items.filter(fil => fil.tipo === 'ingreso' );
    // const NewItems = items.filter(fil => fil.monto < 2222222 );
    const NewItems = items.filter(fil => fil);
    return NewItems.sort((a, b) => {
      if (a.tipo === 'ingreso') {
        console.log(a.tipo);
        return -1;
      } else {
        console.log(a.tipo);
        return 1;
      }
    });
  }
}
