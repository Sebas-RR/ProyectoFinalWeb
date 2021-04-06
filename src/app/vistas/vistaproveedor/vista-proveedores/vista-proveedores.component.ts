import { Component, OnInit } from '@angular/core';
import { ServiceProveedorService } from '../service/service-proveedor.service';
import { Proveedor, RespuestaProveedor } from '../../../models/proveedor.model';


@Component({
  selector: 'app-vista-proveedores',
  templateUrl: './vista-proveedores.component.html',
  styleUrls: ['./vista-proveedores.component.css']
})
export class VistaProveedoresComponent implements OnInit {
  
  public proveedores: Proveedor[] = [];
  public fechaIni: string = '0000-00-00';
  public fechaFin: string = '0000-00-00';


  constructor(private proveedoresService: ServiceProveedorService) { }

  ngOnInit(): void {

  }

  public getProveedoresService(fechaIni: string, fechaFin: string): void {
    this.proveedoresService.getProveedores(fechaIni, fechaFin).subscribe(
      (res: RespuestaProveedor) => {
        this.proveedores = res.objeto_respuesta;
      },
      (err) => {
        console.error('Se ha producido un error: ', err);
      }
    );
  }

}
