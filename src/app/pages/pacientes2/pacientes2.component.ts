import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { PacienteService } from '../../service/pacientes/paciente.service';
import { Paciente } from '../../models/paciente';
import { ExamenService } from '../../service/examen/examen.service';
import { OtoscopiaService } from '../../service/otoscopia/otoscopia.service';
import { AudiogramaService } from '../../service/audiograma/audiograma.service';
import { AyerhService } from '../../service/ayerhoy/ayerh.service';
import { DurantevidaService } from '../../service/durantevida/durantevida.service';
import { UltimomesesService } from '../../service/ultimomeses/ultimomeses.service';



@Component({
  selector: 'app-pacientes2',
  templateUrl: './pacientes2.component.html',
  styleUrls: ['./pacientes2.component.css']
})
export class Pacientes2Component implements OnInit {

  fecha = new Date();
  fecha2 = this.fecha.getDate() + '/' + this.fecha.getMonth() + '/' + this.fecha.getFullYear();
  forma: FormGroup;
  forma2: FormGroup;
  paciente: Paciente[] = [];

  constructor(public _pacienteService: PacienteService, public _examenService: ExamenService,
    public _otoscopiaService: OtoscopiaService, public _audiogramaService: AudiogramaService,
    public _ayerhService: AyerhService, public _durantevService: DurantevidaService,
    public _ultimomService: UltimomesesService ) { }

  ngOnInit() {
    this.cargarPaciente();
   // console.log(this.paciente);
  }


  cargarPaciente() {

    this._pacienteService.cargarPacientes()
    .subscribe( (resp: any) => {

      // this.totalRegistros = resp.total;
       this.paciente = resp;
    //   console.log(this.paciente);
      // this.cargando = false;
    });


  }

  buscarPacientes(termino: string) {

    console.log('Cedula Enviada: ' + termino);
    if ( termino.length <= 0 ) {
      this.cargarPaciente();
      return;
    }

    this._pacienteService.buscarPacientes( termino )
            .subscribe( ( resp: any ) =>  {
              this.paciente = resp;
            });
              console.log(this.paciente);
            //   console.log('Resultados: ' + this.paciente);   //  [routerLink]="['/otoscopia', pacientes.Cedula]"
          // });
  }

  borrarPaciente(termino: string) {
     this._examenService.borrarExamen(termino).subscribe();
     this._otoscopiaService.borrarOtoscopia(termino).subscribe();
     this._audiogramaService.borrarAudiograma(termino).subscribe();
     this._ayerhService.borrarayerh(termino).subscribe();
     this._durantevService.borrarDurantev(termino).subscribe();
     this._ultimomService.borrarultimosMeses(termino).subscribe();



     this._pacienteService.borrarPacientes(termino).subscribe( resp =>
      this.cargarPaciente()
     );
  }



}
