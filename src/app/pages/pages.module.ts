import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PruebadbComponent } from './pruebadb/pruebadb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '../pipes/pipe.module';
import { ComputadoraComponent } from './computadora/computadora.component';
import { UsuarioComponent } from './usuario/usuario.component';
// import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { SalacomputadorasComponent } from './salas/salacomputadoras.component';
import { SalalaptosComponent } from './salas/salalaptos.component';
import { SalaimpresorasComponent } from './salas/salaimpresoras.component';
import { ServiciopageComponent } from './servicios/serviciopage.component';
import { PremiumComponent } from './premium/premium.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ResulanalisisComponent } from './resulanalisis/resulanalisis.component';
import { RegclinicoComponent } from './regclinico/regclinico.component';
import { OtoscopiaComponent } from './otoscopia/otoscopia.component';
import { Pacientes2Component } from './pacientes2/pacientes2.component';
import { IngpacienteComponent } from './ingpaciente/ingpaciente.component';
import { TablasComponent } from './tablas/tablas.component';
import { ReporteriaComponent } from './reporteria/reporteria.component';
import { ListarpaceinteComponent } from './listarpaceinte/listarpaceinte.component';
import { EmpresasComponent } from './empresas/empresas.component';



@NgModule({
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    PipeModule
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    NopagesfoundComponent
  ],
  providers: [PipeModule],
  declarations: [
    PagesComponent,
    DashboardComponent,
    AccountSettingComponent,
    NopagesfoundComponent,
    PruebadbComponent,
    ComputadoraComponent,
    UsuarioComponent,
   // ModalUploadComponent,
    SalacomputadorasComponent,
    SalalaptosComponent,
    SalaimpresorasComponent,
    ServiciopageComponent,
    PremiumComponent,
    PacientesComponent,
    ResulanalisisComponent,
    RegclinicoComponent,
    OtoscopiaComponent,
    Pacientes2Component,
    IngpacienteComponent,
    TablasComponent,
    ReporteriaComponent,
    ListarpaceinteComponent,
    EmpresasComponent
    ]
})
export class PagesModule { }
