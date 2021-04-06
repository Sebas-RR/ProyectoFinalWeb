export class RespuestaTipoArticulo {
    codigo: string;
    mensaje: string;
    estado: string;
    objecto_respuesta: tipoArticuloModel[];
}

export class tipoArticuloModel {
    nombreTA: string;
    referencia: string;
    unidadDeMedida: string;
    fechaDeCreacion: string;
}