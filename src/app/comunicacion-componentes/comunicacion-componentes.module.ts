import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HijoComponent } from './component/hijo/hijo.component';
import { PadreComponent } from './pages/padre/padre.component';



@NgModule({
  declarations: [
    HijoComponent,
    PadreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComunicacionComponentesModule { }
