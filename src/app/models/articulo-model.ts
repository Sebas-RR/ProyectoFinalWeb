import { tipoArticuloModel } from "./tipoArticulo";

export class ArticuloModel {
    id: number;
    fechaCreacion: string;
    nombre: string;
    precioVenta: number;
    precioCompra: number;
    tipoDeArticulo!: tipoArticuloModel;

    constructor() {
        this.id = 0;
        this.fechaCreacion = "";
        this.nombre = "";
        this.precioVenta = 0;
        this.precioCompra = 0;
    }
}

export class RespuestaArticulo {
    codigo: String;
    mensaje: String;
    estado: number;
    objecto_respuesta: Array<ArticuloModel>

    constructor() {
        this.codigo = " ";
        this.mensaje = " ";
        this.estado = 0;
        this.objecto_respuesta = [];
    }
}