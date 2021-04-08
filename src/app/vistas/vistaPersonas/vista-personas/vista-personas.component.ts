import { Component, OnInit } from '@angular/core';
import { personasModel, RespuestaPersonas } from 'src/app/models/personas-models';
import { ServicePersonasService } from '../service/service-personas.service';

@Component({
  selector: 'app-vista-personas',
  templateUrl: './vista-personas.component.html',
  styleUrls: ['./vista-personas.component.css']
})
export class VistaPersonasComponent implements OnInit {

  listapersonas: Array<personasModel> = [];
  fechaIni: String = '0000-00-00';
  fechaFin: String = '0000-00-00';

  constructor(private service: ServicePersonasService) { }

  ngOnInit(): void {

  }

  private obtenerpersonas(){
    this.service.obtenerpersonas().subscribe((res: RespuestaPersonas)=>{
      this.listapersonas = res.objecto_respuesta;
    })
  }

  public listarpersonafecha(fechaIni:String, fechaFin: String) {
    this.service.listarfechas(fechaIni, fechaFin).subscribe((res:RespuestaPersonas)=>{
      this.listapersonas = res.objecto_respuesta;
    })
  }
   
  inicializar(){}

}
