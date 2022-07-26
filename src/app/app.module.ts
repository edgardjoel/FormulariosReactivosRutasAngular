import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BotonesComponent } from './component/botones/botones.component';
import { ListadoPersonajesModule } from './listado-personajes/listado-personajes.module';
import { ComunicacionComponentesModule } from './comunicacion-componentes/comunicacion-componentes.module';
import { FormularioReactivoModule } from './formulario-reactivo/formulario-reactivo.module';



@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ListadoPersonajesModule,
    ComunicacionComponentesModule,
    FormularioReactivoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
