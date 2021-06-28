import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreaUsuarioService {

  servidor="http://127.0.01:3043";

  constructor(private servicio:HttpClient) {

    
   }
}
