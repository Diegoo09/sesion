import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private http:HttpClient) {
    
  }

  ValidarLogin(email:string,contrasena:string,token:string):Observable<any>{
    let headers=new HttpHeaders();
    headers= headers.append('Content-Type', 'application/json');
    headers= headers.append('access-token',token);
    
    
    const params = new HttpParams();
    params.set("email",email);
    params.set("contrasena", contrasena); //Create new HttpParams
     //return this.http.get(`${environment.apiUrl}/login`,{params:params});
     //let url=`${environment.apiUrl}/login?usuario=${JSON.stringify(usuario)}&password=${JSON.stringify(password)}`;
     return this.http.get(`${environment.apiUrl}/inSesion?inicio=${email}&contrasena=${contrasena}`,{ 'headers': headers });
  }

  Token():Observable<any>{
     return this.http.get(`${environment.apiUrl}/token`);
  }
}
