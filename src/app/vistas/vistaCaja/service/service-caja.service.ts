import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceCajaService {

  constructor(private http:HttpClient) { }

  public obtenercajas():Observable<any> {
    return this.http.get('http://localhost:9898/api/caja/vercajas');
  }

  public listarfechas(fechaIni:String , fechaFin: String): Observable<any> {
   return this.http.get(`http://localhost:9898/api/caja/listarfechas?fechaIni=${fechaIni}&fechaFin=${fechaFin}`)
  }
}


