import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    
  
    FormularioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormularioReactivoModule { }
