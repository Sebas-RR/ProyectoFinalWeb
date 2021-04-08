import { Component, OnInit } from '@angular/core';
import { VentaModel, RespuestaVenta} from 'src/app/models/venta-model';
import { ServiceVentasService } from '../service/service-ventas.service';

@Component({
  selector: 'app-vista-ventas',
  templateUrl: './vista-ventas.component.html',
  styleUrls: ['./vista-ventas.component.css']
})
export class VistaVentasComponent implements OnInit {

  listaventas: Array<VentaModel> = [];
  listaventasfecha: Array<VentaModel> = [];
  fecha1: String = '0000-00-00';
  fecha2: String = '0000-00-00';
  constructor(
    private service:ServiceVentasService
  ) { }

  ngOnInit(): void {
    //this.obtenerventas();
    //this.inicializar();
    //this.listarfecha("2021-01-01","2021-03-03");
  }


  private obtenerventas() {
    this.service.obtenerventas().subscribe((res: RespuestaVenta) =>{
      this.listaventas = res.objecto_respuesta;
    })
   }

   public listarfecha(fecha1:String , fecha2:String): void {
     this.service.listarfechas(fecha1,fecha2).subscribe((res:RespuestaVenta )=>{
       this.listaventasfecha = res.objecto_respuesta;
     })
   }

   inicializar() {}

}
