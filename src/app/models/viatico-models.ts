export interface RespuestaViaticos {
    codigo: string,
    mensaje: string
    estado: number,
    objeto_respuesta: ViaticoModel[]
  }
  
  export interface ViaticoModel {
    id:number;
    valor:number;
    tipoGasto:string;
    fecha:Date;
    //usuarioAutorizo:PersonaModel;
  }