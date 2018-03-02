import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { VinilosComponent } from './components/vinilos/vinilos.component';
import { LoginComponent } from './components/login/login.component';
import { RecordarComponent } from './components/recordar/recordar.component';

const appRoutes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'vinilos', component: VinilosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'recordar', component: RecordarComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const AppRoutes = RouterModule.forRoot(appRoutes, { enableTracing: true });
