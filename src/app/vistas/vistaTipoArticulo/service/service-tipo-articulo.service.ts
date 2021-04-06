import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
=======
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
export class ServiceTipoArticuloService {

<<<<<<< Updated upstream
  constructor() { }
=======
  constructor(private http: HttpClient) { }

  public obtenerTiposArticulo():Observable<any> {
    return this.http.get('http://localhost:9898/api/tipo-articulo/listar-tipos-articulos');
  }

  // obtenerTiposArticuloFecha(d1: string, d2: String) {
  //   return this.http
  //     .get<RespuestaProveedor>(`http://localhost:9898/api/proveedor/listar-fechas?fechaIni=${fechaIni}&fechaFin=${fechaFin}`)
  //     .pipe(map(resp => resp),
  //       catchError(this.error)
  //     );
  // }

  public obtenerTiposArticuloFecha(d1:string, d2:string):Observable<any> {
    console.log('service' + d1, d2);
    console.log('http://localhost:9898/api/tipo-articulo/listar-fechas-TA?' + d1 + '&' + d2);
    return this.http.get(`http://localhost:9898/api/tipo-articulo/listar-fechas-TA?d1=${d1}&d2=${d2}`).pipe(map(resp => resp),catchError(this.error));
    
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
>>>>>>> Stashed changes
}

