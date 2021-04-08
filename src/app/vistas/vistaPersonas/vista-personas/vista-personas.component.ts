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
    this.obtenerpersonas();
    this.listarfecha("1980-12-12", "1989-01-01");
  }

  private obtenerpersonas(){
    this.service.obtenerpersonas().subscribe((res: RespuestaPersonas)=>{
      this.listapersonas = res.objecto_respuesta;
    })
  }

  public listarfecha(fechaIni:String, fechaFin: String): void{
    this.service.listarfechas(fechaIni, fechaFin).subscribe((res:RespuestaPersonas)=>{
      this.listapersonas = res.objecto_respuesta;
    })
  }
   
  inicializar(){}

}
