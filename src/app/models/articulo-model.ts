export class ArticuloModel {
    id: number;
    fechaCreacion: string;
    nombre: string;
    precioVenta: number;
    precioCompra: number;

    constructor() {
        this.id = 0;
        this.fechaCreacion = "";
        this.nombre = "";
        this.precioVenta = 0;
        this.precioCompra = 0;
    }
}