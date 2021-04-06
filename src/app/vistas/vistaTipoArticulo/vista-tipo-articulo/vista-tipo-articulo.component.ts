import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-tipo-articulo',
  templateUrl: './vista-tipo-articulo.component.html',
  styleUrls: ['./vista-tipo-articulo.component.css']
})
export class VistaTipoArticuloComponent implements OnInit {

  Tipos: Array<tipoArticuloModel>;

  constructor(private serviceTipoArticulo: ServiceTipoArticuloService) { }

  ngOnInit(): void {
  }

}
