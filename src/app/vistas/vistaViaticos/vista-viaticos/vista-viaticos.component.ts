import { Component, OnInit } from '@angular/core';
import { RespuestaViaticos, ViaticoModel } from 'src/app/models/viatico-models';
import { ServiceViaticosService } from '../service/service-viaticos.service';

@Component({
  selector: 'app-vista-viaticos',
  templateUrl: './vista-viaticos.component.html',
  styleUrls: ['./vista-viaticos.component.css']
})
export class VistaViaticosComponent implements OnInit {

  public viatico: ViaticoModel[] = [];
  public fechaIni: Date;
  public fechaFin: Date | undefined ;

  constructor(private viaticosService: ServiceViaticosService) { }

  ngOnInit(): void {
  }


  public getViaticosService(fechaIni: Date, fechaFin: Date): void {
    this.viaticosService.getViaticosFechas(fechaIni, fechaFin).subscribe(
      (res: RespuestaViaticos) => {
        this.viatico = res.objeto_respuesta;
      },
      (err) => {
        console.error('Se ha producido un error: ', err);
      }
    );
  }

}
