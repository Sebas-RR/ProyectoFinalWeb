import { Component, OnInit } from '@angular/core';
import { ServiceBuzonService } from '../service/service-buzon.service';

@Component({
  selector: 'app-vista-buzon',
  templateUrl: './vista-buzon.component.html',
  styleUrls: ['./vista-buzon.component.css']
})
export class VistaBuzonComponent implements OnInit {
  
  filterBuzon = "";
  listbuzon: Array<any> | undefined;
  constructor(
    private service: ServiceBuzonService
  ) { }

  ngOnInit(): void {
    this.obtenerClients();
  }

  private obtenerClients(){
    this.service.obtenerClients().subscribe(response => {
      this.listbuzon = response;
    });
  }

}
