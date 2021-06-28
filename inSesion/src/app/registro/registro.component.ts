import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
//import { pais } from 'rxjs';
import {RegistroService} from 'src/app/registro.service'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formulario:FormGroup;
  
  constructor(private fb:FormBuilder, private servicio:RegistroService) { 
    this.formulario=this.fb.group({
      nombre:[''],
      apellido:[''],
      rut:[''],
      direccion:[''],
      region:[''],
      comuna:[''],
      correo:[''],
      contrasena:[''],
      recontrasena:[''],
      rol:[''],
    });
  }

  resolved(captchaResponse:string){
    console.log('resolved captcha whit resonde ${captchaResponse}:')
  }


  ngOnInit(): void {
  }

  enviarDatos(){

    this.servicio.crearUsuario({
      nombre:this.formulario.get("nombre")?.value,
      apellido:this.formulario.get("apelido")?.value,
      rut:this.formulario.get("rut")?.value,
      direccion:this.formulario.get("direccion")?.value,
      region:this.formulario.get("region")?.value,
      comuna:this.formulario.get("comuna")?.value,
      correo:this.formulario.get("correo")?.value,
      contrasena:this.formulario.get("contrasena")?.value,
      rol:"normal"
    });

  }

  validarContrasena(){
    if(this.formulario.get("contrasena")?.value != this.formulario.get("recontrasena")?.value ){
      alert("Las contraseñas no son iguales");
    }

  }
  

}
