import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { LoginGuardGuard, AdminGuardGuard } from '../service/service.index';


// pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { ComputadoraComponent } from './computadora/computadora.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SalacomputadorasComponent } from './salas/salacomputadoras.component';
import { SalaimpresorasComponent } from './salas/salaimpresoras.component';
import { SalalaptosComponent } from './salas/salalaptos.component';
import { ServiciopageComponent } from './servicios/serviciopage.component';
import { PremiumComponent } from './premium/premium.component';
import { OtoscopiaComponent } from './otoscopia/otoscopia.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { Pacientes2Component } from './pacientes2/pacientes2.component';
import { TablasComponent } from './tablas/tablas.component';
import { ReporteriaComponent } from './reporteria/reporteria.component';
import { ListarpaceinteComponent } from './listarpaceinte/listarpaceinte.component';
import { ResulanalisisComponent } from './resulanalisis/resulanalisis.component';











const pagesRouter: Routes = [
    {
        path: '',
        component: PagesComponent,
       // canActivate: [ LoginGuardGuard ],
        children: [
          //  { path: 'account', component: AccountSettingComponent },
            { path: 'dashboard', component: DashboardComponent },
            // Foros Servicios Especializados
            { path: 'computadora', component: ComputadoraComponent, data: { titulo: 'Servicio Computadoras' } },
            { path: 'salacomputadoras', component: SalacomputadorasComponent, data: { titulo: 'Sala Computadoras' } },
            { path: 'salaimpresoras', component: SalaimpresorasComponent, data: { titulo: 'Sala Impresoras' } },
            { path: 'salalaptos', component: SalalaptosComponent, data: { titulo: 'Sala Laptos' } },
            { path: 'premium', component: PremiumComponent, data: { titulo: 'Usuario Premiun' } },
            { path: 'otoscopia/:Cedula', component: OtoscopiaComponent, data: { titulo: 'Formulario Otoscopia' } },
            { path: 'paciente', component: PacientesComponent, data: { titulo: 'Formulario de Pacientes' } },
            { path: 'pacientes', component: Pacientes2Component, data: { titulo: 'Busqueda de Pacientes' } },
            { path: 'tablas/:Cedula', component: TablasComponent, data: { titulo: 'Formularios' } },
            { path: 'reportes', component: ReporteriaComponent, data: { titulo: 'Reportes' } },
            { path: 'verpaciente', component: ListarpaceinteComponent, data: { titulo: 'Ver Pacientes' } },
            { path: 'resultados', component: ResulanalisisComponent, data: { titulo: 'Ver Pacientes' } },
            // para Administrador
            { path: 'usuarios', component: UsuarioComponent, canActivate: [ AdminGuardGuard ],  data: { titulo: 'Servicio de Usuarios' } },
            { path: 'solicitud', component: ServiciopageComponent, data: { titulo: 'Solicitud de Servicios' } },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRouter );
