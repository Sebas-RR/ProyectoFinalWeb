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
  fechaInicio: String = '0000-00-00';
  fechaFin: String = '0000-00-00';

  constructor(private service: ServiceArticuloService) { }

  ngOnInit(): void {
    this.obtenerArticulos();
    this.listarFecha("2021-03-28", "2021-04-07");
    
  }

  private obtenerArticulos() {
    this.service.listarArticulos().subscribe((res: RespuestaArticulo) => {
      this.listaArticulos = res.objecto_respuesta;
    })
  }

  public listarFecha(fechaInicio: string, fechaFin: string): void {
    this.service.listarFechas(fechaInicio, fechaFin).subscribe((res: RespuestaArticulo) => {
      this.listaArticulos = res.objecto_respuesta;
      console.log(this.listaArticulos);
    })
  }
}
