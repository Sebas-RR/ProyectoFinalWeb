import { Component, OnInit } from '@angular/core';
import { ArticuloModel } from 'src/app/models/articulo-model';
import { ServiceArticuloService } from '../service/service-articulo.service';

@Component({
  selector: 'app-vista-articulos',
  templateUrl: './vista-articulos.component.html',
  styleUrls: ['./vista-articulos.component.css']
})
export class VistaArticulosComponent implements OnInit {

  listaArticulos: Array<ArticuloModel> = [];

  constructor(private service: ServiceArticuloService) { }

  ngOnInit(): void {
    this.obtenerArticulos();
  }

  inicializar() {

  }

  private obtenerArticulos() {
    this.service.listarArticulos().subscribe(res => {
      this.listaArticulos = res;
    })
  }
}
