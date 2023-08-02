import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServices {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>('http://localhost:3000/usuarios');
  }
  guardar(usuarios: Usuarios): Observable<Usuarios> {
    return this.http
      .post<Usuarios>('http://localhost:3000/usuarios', usuarios)
      .pipe(catchError(this.handlerError));
  }
  modificar(usuario: Usuarios): Observable<Usuarios> {
    console.log(usuario);
    return this.http
      .patch<Usuarios>('http://localhost:3000/usuarios/', usuario)
      .pipe(catchError(this.handlerError));
  }

  eliminar(cedula: number): Observable<Usuarios> {
    return this.http
      .delete<Usuarios>('http://localhost:3000/usuarios/' + cedula)
      .pipe(catchError(this.handlerError));
  }

  handlerError(error: any): Observable<never> {
    console.log(error);
    return throwError(error);
  }
}
