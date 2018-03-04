import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EscritorioComponent } from './components/views/escritorio/escritorio.component';
import { ActivosComponent } from './components/views/activos/activos.component';
import { LoginComponent } from './components/login/login.component';
import { RecordarComponent } from './components/recordar/recordar.component';

import { AuthService } from './../app/providers/auth.service';
import { CaracteristicasComponent } from './components/views/caracteristicas/caracteristicas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ActivosComponent,
    LoginComponent,
    RecordarComponent,
    EscritorioComponent,
    CaracteristicasComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
