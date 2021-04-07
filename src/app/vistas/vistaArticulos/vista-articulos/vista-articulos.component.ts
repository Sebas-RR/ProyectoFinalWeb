import { Component, OnInit } from '@angular/core';
import { ArticuloModel, RespuestaArticulo } from 'src/app/models/articulo-model';
import { ServiceArticuloService } from '../service/service-articulo.service';

@Component({
  selector: 'app-vista-articulos',
  templateUrl: './vista-articulos.component.html',
  styleUrls: ['./vista-articulos.component.css']
})
export class VistaArticulosComponent implements OnInit {

  listaArticulos: Array<ArticuloModel> = [];
  fechaInicio: string = '0000-00-00';
  fechaFin: string = '0000-00-00';
  TiposFecha: ArticuloModel[]=[];

  constructor(private service: ServiceArticuloService) { }

  ngOnInit(): void {
    
  }

  private obtenerArticulos() {
    this.service.listarArticulos().subscribe((res: RespuestaArticulo) => {
      this.listaArticulos = res.objecto_respuesta;
    })
  }

  public listarFecha(fechaInicio: string, fechaFin: string): void {
    this.service.listarFechas(fechaInicio, fechaFin).subscribe((res: RespuestaArticulo) => {
      this.TiposFecha = res.objecto_respuesta;
      console.log(this.listaArticulos);
    })
  }
}
