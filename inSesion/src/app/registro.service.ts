import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../app/interfaces/usuarios'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  servidor="http://127.0.01:3055";

  constructor(private servicio:HttpClient) { }

  crearUsuario(datos:Usuarios):Observable<any>{
    return this.servicio.post(`${this.servidor}/crearUsuarios`,JSON.stringify(datos),httpOptions);

  }
}
