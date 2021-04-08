import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicePersonasService {

  constructor(private http:HttpClient) { }

  public obtenerpersonas():Observable<any>{
    return this.http.get('http://localhost:9898/api/persona/listar-persona');
  }

  public listarfechas(fechaIni:String, fechaFin:String):Observable<any>{
    return this.http.get(`http://localhost:9898/api/persona/listarfechas?fechaIni=${fechaIni}&fechaFin=${fechaFin}`)
  }
}
