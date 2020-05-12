export class Todo {
    public id: number;
    public texto: string;
    public detalle: string;
    public completado: boolean;
    constructor(texto: string) {
        this.texto = texto ;
        this.detalle =  '... ' + texto + ' Detalle' ;
        this.id = Math.random() ;
        this.completado = false ;
    }
}