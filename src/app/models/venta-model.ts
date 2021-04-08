export class RespuestaVenta{
  codigo: String;
  mensaje: String;
  estado: number;
  objecto_respuesta: Array<VentaModel>

  constructor(){
      this.codigo = " ";
      this.mensaje = " ";
      this.estado = 0;
      this.objecto_respuesta= [];
  }
}

export class VentaModel{
  id:number;
  nit: String;
  direccion: String;
  telefono: number;
  totalVenta: number;
  dineroRecibido: number;
  cambio: number;
  fecha: String;
  vendedor: String;

  constructor(){
    this.id=0;
    this.nit="";
    this.direccion="";
    this.telefono=0;
    this.totalVenta=0;
    this.dineroRecibido=0;
    this.cambio=0;
    this.fecha="";
    this.vendedor="";
  }
}
