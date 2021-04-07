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
  desde: string = "0000-00-00";
  hasta: string = "0000-00-00";


  constructor(
    private service: ServiceBuzonService
  ) { }


  ngOnInit(): void {
    return this.obtenerClients()
    

  }

  private obtenerClients(){
    this.service.obtenerClients().subscribe(response => {
      this.listbuzon = response;
    });
  }
  obtenerBuzonFecha(desde: string, hasta: string): void{
    
    this.service.obtenerBuzonFecha(desde,hasta).subscribe(response=> {
      this.listbuzon = response;
    })

  }
  

 

}

