import { personasModel } from "./personas-models";

export class RespuestaCaja{
    codigo: String;
    mensaje: String;
    estado: number;
    objecto_respuesta: Array<CajaModel>

    constructor(){
        this.codigo = " ";
        this.mensaje = " ";
        this.estado = 0;
        this.objecto_respuesta= [];
    }
}

export class CajaModel{

    nombrecaja: String;
    ubicacion: String;
    observacion: String;
    sede: String;
    fecha: String;
    creadopor!:personasModel;
    
    constructor(){

        this.nombrecaja = " ";
        this.ubicacion = " ";
        this.observacion = " ";
        this.sede =" ";
        this.fecha = " ";
        
    }
}