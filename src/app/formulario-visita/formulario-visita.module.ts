import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioVisitaComponent } from './formulario-visita/formulario-visita.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { DisponibilidadComponent } from './disponibilidad/disponibilidad.component';
import { ReferenciaComponent } from './referencia/referencia.component';



@NgModule({
  declarations: [
    FormularioVisitaComponent,
    EncabezadoComponent,
    DatosPersonalesComponent,
    DisponibilidadComponent,
    ReferenciaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormularioVisitaComponent,
    EncabezadoComponent,
    DatosPersonalesComponent,
    DisponibilidadComponent,
    ReferenciaComponent
  ]
})
export class FormularioVisitaModule { }
