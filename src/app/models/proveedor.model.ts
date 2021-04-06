export interface RespuestaProveedor {
  codigo: string,
  mensaje: string
  estado: number,
  objeto_respuesta: Proveedor[]
}

export interface Proveedor {
  id: number;
  nombre: string;
  departamento: string;
  ciudad: string;
  telefono: number;
  responsabilidadFiscal: string;
  correo: string;
  contacto: string;
  direccion: string;
  fechaCreacion: Date;
  nit: number;
}
