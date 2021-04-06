import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ViaticoModel, RespuestaViaticos } from '../../../models/viatico-models'

@Injectable({
  providedIn: 'root'
})
export class ServiceViaticosService {

  constructor(public http: HttpClient) { }

  getViaticosFechas(fechaIni: Date, fechaFin: Date) {
    return this.http
      .get<RespuestaViaticos>(`http://localhost:9898/api/seminario/viaticos/obtener-viaticos-fechas?fechaIni=${fechaIni}&fechaFin=${fechaFin}`)
      .pipe(map(resp => resp),
        catchError(this.error)
      );
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
