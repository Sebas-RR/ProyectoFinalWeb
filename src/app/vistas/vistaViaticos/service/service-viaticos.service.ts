import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; 
import { catchError, map } from 'rxjs/operators';
import { RespuestaViaticos } from '../../../models/viatico-models'

@Injectable({
  providedIn: 'root'
})
export class ServiceViaticosService {

  constructor(public http: HttpClient) { }


  public obtenerViaticos():Observable<any> {
    return this.http.get('http://localhost:9898/api/viaticos/obtener-viaticos').pipe(map(resp => resp),catchError(this.error));;
  }


  getViaticosFechas(fechaIni: Date, fechaFin: Date):Observable<any> {
    return this.http.
    get<RespuestaViaticos>('http://localhost:9898/api/viaticos/obtener-viaticos-fechas?fechaIni='+fechaIni+'&fechaFin='+fechaFin);
  }

  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }
}
