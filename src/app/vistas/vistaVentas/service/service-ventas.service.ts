import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceVentasService {

  constructor(private http:HttpClient) { }

  public obtenerventas():Observable<any> {
    return this.http.get('http://localhost:9898/api/venta/get-ventas');
  }

  public listarfechas(fecha1:String , fecha2: String): Observable<any> {
    return this.http.get(`http://localhost:9898/api/venta/buscar-venta-fecha?fecha1=${fecha1}&fecha2=${fecha2}`)
   }
}
