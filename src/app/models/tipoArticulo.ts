export interface RespuestaTipoArticulo {
    codigo: string;
    mensaje: string;
    estado: string;
    objecto_respuesta: tipoArticuloModel[];
}

export interface tipoArticuloModel {
    nombreTA: string;
    referencia: string;
    unidadDeMedida: string;
    fechaDeCreacion: string;
}