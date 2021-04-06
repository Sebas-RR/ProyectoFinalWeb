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

  Tipos: Array<tipoArticuloModel>;

  constructor(private serviceTipoArticulo: ServiceTipoArticuloService) { }

  ngOnInit(): void {
    this.obtenerTiposArticulo();
  }

  private obtenerTiposArticulo() {
    this.serviceTipoArticulo.obtenerTiposArticulo().subscribe((res: RespuestaTipoArticulo) =>{
      this.Tipos = res.objecto_respuesta;
    })
  }
}
