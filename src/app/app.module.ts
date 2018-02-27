import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { VinilosComponent } from './components/vinilos/vinilos.component';
import { LoginComponent } from './components/login/login.component';
import { RecordarComponent } from './components/recordar/recordar.component';

import { AuthService } from './../app/providers/auth.service';

const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'vinilos', component: VinilosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recordar', component: RecordarComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    VinilosComponent,
    LoginComponent,
    RecordarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
