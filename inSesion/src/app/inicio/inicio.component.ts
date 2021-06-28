import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';

import {InicioService} from '../inicio.service';
import {StorageService} from '../storage.service';
import {Session} from '../session';

import {LoginObject} from '../login-object.model'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {


  formulario:FormGroup;
  mensaje:string="";
  datos:Session;
  token:string="";
  logueado:Boolean=false;

  constructor(private fb:FormBuilder, private servicio:InicioService, private storage:StorageService) { 
    this.formulario=this.fb.group({
      email:[''],
      contrasena:[''],
    });
  }

  resolved(captchaResponse:string){
    console.log('resolved captcha whit resonde ${captchaResponse}:')
  }



  ngOnInit(): void {

    if(this.storage.getCurrentUser()){
      //this.logueado=true;
      //this.mensaje="Usted ya se encuentra logueado";
      window.location.href="/privado";
    }

    
  }


  validarInicio(){
      this.servicio.Token().subscribe(token=>{
         this.token=token;
         this.servicio.ValidarLogin(this.formulario.get("email")?.value, this.formulario.get("contrasena")?.value,this.token).subscribe(datos=>{
          console.log(datos);
          if(datos.length==0){
                this.mensaje="Login no existe";
           }else{
              datos={token:datos[0].id,email:datos[0].correo_electronico};
              this.storage.CrearSession(datos);
              window.location.href="/inicio";
              
           }
      });
      });
    
      
      
  }

}
