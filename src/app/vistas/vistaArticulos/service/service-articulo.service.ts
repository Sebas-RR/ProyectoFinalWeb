import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceArticuloService {

  constructor(private http: HttpClient) { }

  public listarArticulos(): Observable<any> {
    return this.http.get('http://localhost:9898/api/articulo/listar-articulos');
  }

  public listarFechas(fechaInicio: string, fechaFin: string): Observable<any> {
    return this.http.get(`http://localhost:9898/api/articulo/listar-fechas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
  }
}
