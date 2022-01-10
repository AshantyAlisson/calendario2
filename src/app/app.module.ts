import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {FormularioVisitaModule} from "./formulario-visita/formulario-visita.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MbscModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormularioVisitaModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

