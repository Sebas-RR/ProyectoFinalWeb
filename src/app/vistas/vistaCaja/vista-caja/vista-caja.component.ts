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
  TiposFechas: CajaModel[] = [];
  
  constructor(
    private service:ServiceCajaService) { }
      
  ngOnInit(): void {
    this.obtenercajas();
    //this.inicializar();
    //this.listarfecha(this.fechaIni,this.fechaFin);
  }
  
 private obtenercajas() {
   this.service.obtenercajas().subscribe((res: RespuestaCaja) =>{
     this.listacajas = res.objecto_respuesta;
   })
  }

  public listarfechas(fechaIni:String , fechaFin: String): void {
    this.service.listarfechas(fechaIni,fechaFin).subscribe((res:RespuestaCaja )=>{
      this.TiposFechas = res.objecto_respuesta;
    })
  }
  
  inicializar() {}
 
}



