export class RespuestaPersonas {
    codigo: string;
    mensaje: string;
    estado: number;
    objecto_respuesta: Array<personasModel>;

    constructor(){
        this.codigo = " ";
        this.mensaje = " ";
        this.estado = 0;
        this.objecto_respuesta= [];
    }
}

export class personasModel {
    nombre: string;
    apellidos: string;
    rol: string;
    nacimiento: string;
    direccion: string;
    telefono: number;
    email: string;
    //fechaDeCreacion: string;

    constructor(){
        this.nombre = " ";
        this.apellidos = " ";
        this.rol = " ";
        this.nacimiento = " ";
        this.direccion = " ";
        this.telefono = 0;
        this.email = " ";
        
    }


}