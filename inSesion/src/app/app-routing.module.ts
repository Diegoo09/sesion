import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from '../app/registro/registro.component';
import {InicioComponent} from '../app/inicio/inicio.component'
import {PrivadoComponent} from '../app/privado/privado.component'
const routes: Routes = [
  {path:'registro',component:RegistroComponent},
  {path:'inicio',component:InicioComponent},
  {path:'privado',component:PrivadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
