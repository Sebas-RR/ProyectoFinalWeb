import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceTipoArticuloService {

  constructor(private http: HttpClient) { }

  public obtenerTiposArticulo():Observable<any> {
    return this.http.get('http://localhost:9898/api/tipo-articulo/listar-tipos-articulos');
  }
}
