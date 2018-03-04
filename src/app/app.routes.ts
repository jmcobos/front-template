import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CaracteristicasComponent } from './components/views/caracteristicas/caracteristicas.component';
import { EscritorioComponent } from './components/views/escritorio/escritorio.component';
import { ActivosComponent } from './components/views/activos/activos.component';
import { LoginComponent } from './components/login/login.component';
import { RecordarComponent } from './components/recordar/recordar.component';

const appRoutes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'caracteristicas', component: CaracteristicasComponent},
    { path: 'escritorio', component: EscritorioComponent},
    { path: 'activos', component: ActivosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'recordar', component: RecordarComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const AppRoutes = RouterModule.forRoot(appRoutes, { enableTracing: true });
