import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './listado-personajes/pages/main/main.component';
import { BotonesComponent } from './component/botones/botones.component';
import { FormularioComponent } from './formulario-reactivo/pages/formulario/formulario.component';
import { PadreComponent } from './comunicacion-componentes/pages/padre/padre.component';


const routes: Routes = [
  {
    path:'',
    component: BotonesComponent,
   
  },
  {
    path:'personajes',
    component: MainComponent
  },
  {
    path:'formulario',
    component: FormularioComponent
  },
  {
    path:'padre',
    component: PadreComponent
  },
  // {
  //   path:'formularios'
  // },
  {
    path:'**',
    redirectTo:''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
