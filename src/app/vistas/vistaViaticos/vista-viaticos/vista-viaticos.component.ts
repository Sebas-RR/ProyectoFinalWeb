import { Component, OnInit } from '@angular/core';
import {RespuestaViaticos,ViaticosModel} from '../../../models/viatico-models';
import { ServiceViaticosService } from '../service/service-viaticos.service';

@Component({
  selector: 'app-vista-viaticos',
  templateUrl: './vista-viaticos.component.html',
  styleUrls: ['./vista-viaticos.component.css']
})
export class VistaViaticosComponent implements OnInit {

  viaticos: ViaticosModel[]=[];
  fechaIni: Date = new Date();
  fechaFin: Date = new Date();

  constructor(private viaticosService: ServiceViaticosService) { }

  ngOnInit(): void {
    //this.prueba();
  }

  public prueba():void{
    this.viaticosService.obtenerViaticos().subscribe(res =>{
      console.log("Hola prueba" + res)
      this.viaticos = res
    })
  }


  public obtenerViaticosFechas(fechaIni: Date, fechaFin: Date): void {
    this.viaticosService.getViaticosFechas(fechaIni, fechaFin).subscribe(
      (respuesta) => {
        this.viaticos = respuesta;
      },
      (err) => {
        console.error('Se ha producido un error: ', err);
      }
    );
  }

/*
  public obtenerViaticosFechas(fechaIni: Date, fechaFin: Date): void {
    console.log(this.viaticos.length)
    this.viaticosService.getViaticosFechas(fechaIni, fechaFin).subscribe(
      (res:RespuestaViaticos)=>{
        console.log("Entre aqui")
        this.viaticos = res.objecto_respuesta;
        
      })
      console.log(this.viaticos.length)
  }*/
}
