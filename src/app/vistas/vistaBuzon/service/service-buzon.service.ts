import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceBuzonService {

  constructor(private http: HttpClient) { }
  public obtenerClients(): Observable<any>{
    return this.http.get('http://localhost:9898/api/buzon/list');
  }

  public obtenerBuzonFecha(desde: string, hasta: string): Observable<any>{
    return this.http.get(`localhost:9898/api/buzon/findByDateRange?desde=${desde}&hasta=${hasta}`);
  }
}
