import { Component, OnInit } from '@angular/core';
import { BuzonModel } from 'src/app/models/buzon-model';
import { ServiceBuzonService } from '../service/service-buzon.service';



@Component({
  selector: 'app-vista-buzon',
  templateUrl: './vista-buzon.component.html',
  styleUrls: ['./vista-buzon.component.css']
})
export class VistaBuzonComponent implements OnInit {


 
  listbuzon: BuzonModel[] | undefined;
  listaBuzonFecha: Array<BuzonModel> = [];
  desde: string = "2021-04-03";
  hasta: string = "2021-04-05";


  constructor(
    private service: ServiceBuzonService
  ) { }


  ngOnInit(): void {
    this.obtenerBuzonFecha("2021-04-03","2021-04-05");

  }

  private obtenerClients(){
    this.service.obtenerClients().subscribe(response => {
      this.listbuzon = response;
    });
  }
  private obtenerBuzonFecha(desde: string, hasta: string): void{
    this.service.obtenerBuzonFecha(desde,hasta).subscribe(response=> {
      this.listbuzon = response;
    })

  }

 

}

