import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule } from '@angular/router';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { PrivadoComponent } from './privado/privado.component';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    InicioComponent,
    PrivadoComponent 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

