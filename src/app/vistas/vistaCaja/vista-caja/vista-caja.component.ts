import { Component, OnInit } from '@angular/core';
import { CajaModel, RespuestaCaja} from 'src/app/models/Caja-models';
import { ServiceCajaService } from '../service/service-caja.service';

@Component({
  selector: 'app-vista-caja',
  templateUrl: './vista-caja.component.html',
  styleUrls: ['./vista-caja.component.css']
})
export class VistaCajaComponent implements OnInit {

  listacajas: Array<CajaModel> = [];
  fechaIni: String = '0000-00-00';
  fechaFin: String = '0000-00-00';
  
  constructor(
    private service:ServiceCajaService) { }
      
  ngOnInit(): void {
    this.obtenercajas();
    //this.inicializar();
    this.listarfecha("2021-04-01","2021-04-07");
  }
  
 private obtenercajas() {
   this.service.obtenercajas().subscribe((res: RespuestaCaja) =>{
     this.listacajas = res.objecto_respuesta;
   })
  }

  public listarfecha(fechaIni:String , fechaFin: String): void {
    this.service.listarfechas(fechaIni,fechaFin).subscribe((res:RespuestaCaja )=>{
      this.listacajas = res.objecto_respuesta;
    })
  }
  
  inicializar() {}
 
}



