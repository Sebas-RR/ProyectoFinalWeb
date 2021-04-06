import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Proveedor, RespuestaProveedor } from '../../../models/proveedor.model'

@Injectable({
  providedIn: 'root'
})
export class ServiceProveedorService {

  constructor(public http: HttpClient) { }

  getProveedores(fechaIni: string, fechaFin: String) {
    return this.http
      .get<RespuestaProveedor>(`http://localhost:9898/api/proveedor/listar-fechas?fechaIni=${fechaIni}&fechaFin=${fechaFin}`)
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
