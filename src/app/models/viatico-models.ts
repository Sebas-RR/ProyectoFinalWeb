export class RespuestaViaticos {
  codigo: string;
  mensaje: string;
  estado: number;
  objeto_respuesta: ViaticosModel[];

  constructor(){
    this.codigo = " ";
    this.mensaje = " ";
    this.estado = 0;
    this.objeto_respuesta= [];
  }
}

export class ViaticosModel {
  id:number;
  valor:number;
  tipoGasto:string;
  fecha:Date;
  //persona:PersonaModel;
  

  constructor(){
    this.id=0;
    this.valor=0;
    this.tipoGasto="";
    this.fecha=new Date();
    //this.persona = null;
  }

}
