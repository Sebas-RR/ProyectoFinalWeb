import { Component, OnInit } from '@angular/core';
import { tipoArticuloModel, RespuestaTipoArticulo } from 'src/app/models/tipoArticulo';
import { ServiceTipoArticuloService } from '../service/service-tipo-articulo.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vista-tipo-articulo',
  templateUrl: './vista-tipo-articulo.component.html',
  styleUrls: ['./vista-tipo-articulo.component.css']
})
export class VistaTipoArticuloComponent implements OnInit {

  Tipos: tipoArticuloModel[] = [];
  public d1: string = '0000-00-00';
  public d2: string = '0000-00-00';
  TiposFechas: tipoArticuloModel[] = [];

  constructor(private serviceTipoArticulo: ServiceTipoArticuloService) { }

  ngOnInit(): void {
    this.obtenerTiposArticulo();
    //this.obtenerTiposArticuloFecha(this.d1,this.d2);
  }

  private obtenerTiposArticulo() {
    this.serviceTipoArticulo.obtenerTiposArticulo().subscribe((res: RespuestaTipoArticulo) =>{
      this.Tipos = res.objecto_respuesta;
    })
  }

  public obtenerTiposArticuloFecha(d1:string, d2:string) {
    console.log(d1,d2);
    this.serviceTipoArticulo.obtenerTiposArticuloFecha(d1, d2).subscribe((res: RespuestaTipoArticulo) =>{
      this.TiposFechas = res.objecto_respuesta;
      console.log(res);
    })
  }
}
