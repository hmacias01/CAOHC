import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HttpClientModule } from '@angular/common/http';
// tslint:disable-next-line:max-line-length
import { UsuarioService, LoginGuardGuard, AdminGuardGuard, SubirArchivoService, SidebardService, PacienteService, EmpresasService, ExamenService, AudiogramaService, OtoscopiaService, UltimomesesService, DurantevidaService, AyerhService } from './service.index';
import { ModaluploadService } from '../components/modal-upload/modalupload.service';







@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
      ],
      providers: [
          SidebardService,
          UsuarioService,
          SubirArchivoService,
          LoginGuardGuard,
          AdminGuardGuard,
          ModaluploadService,
          PacienteService,
          EmpresasService,
          ExamenService,
          AudiogramaService,
          OtoscopiaService,
          UltimomesesService,
          DurantevidaService,
          AyerhService
      ],
      declarations: [
      ]
})

export class ServiceModule { }
