import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { PacienteService } from '../../service/pacientes/paciente.service';
import { Empresas } from '../../models/empresa';
import { Paciente } from '../../models/paciente';
import { Exan } from '../../models/examen';
import { ExamenService } from '../../service/examen/examen.service';



@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  fecha = new Date();
  fecha2 = this.fecha.getFullYear() + '-' + this.fecha.getMonth() + '-' +  this.fecha.getDate();
  forma: FormGroup;
  forma2: FormGroup;
  empresas: Empresas[] = [];
  // examen: Exan[] = [];
  ver: boolean;

  constructor(public _pacienteService: PacienteService, public _examenService: ExamenService) {
  }

  ngOnInit() {
    // this.cargarEmpresa();

    this.forma2 = new FormGroup({
      Nombre: new FormControl( null, Validators.required ),
      Cedula: new FormControl( null, Validators.required ),
      Edad: new FormControl( null, Validators.required ),
      Genero: new FormControl( null, Validators.required ),
      F_Contratacion: new FormControl( null, Validators.required ),
      Puesto: new FormControl( null, Validators.required ),
      Turno: new FormControl( null, Validators.required ),
      NHoras: new FormControl( null, Validators.required ),
      RuidoDba: new FormControl( null, Validators.required ),
      Tipo: new FormControl( null, Validators.required ),
      Proteccion: new FormControl( null, Validators.required ),
      TipoProteccion: new FormControl( null, Validators.required ),
      OtrosProteccion: new FormControl( null, Validators.required ),
      Molestia: new FormControl( null, Validators.required ),
      MolestiasDetalle: new FormControl( null, Validators.required ),
      Audiometro: new FormControl( null, Validators.required ),
      empresa: new FormControl( null, Validators.required ),
    });

  }

    cargarPaciente() {
    this._pacienteService.cargarPacientes()
              .subscribe( (resp: any) => {

                console.log(resp);
                // this.totalRegistros = resp.total;
                // this.usuarios = resp.usuarios;
                // this.cargando = false;

              });

  }

  GuardarPacientes() {
    let paciente = new Paciente(this.forma2.value.Nombre,
    this.forma2.value.Cedula,
    this.forma2.value.Edad,
    this.forma2.value.Genero,
    this.forma2.value.F_Contratacion,
    this.forma2.value.Puesto,
    this.forma2.value.Turno,
    this.forma2.value.NHoras,
    this.forma2.value.empresa,
  );
  console.log(paciente);
  this._pacienteService.VerificarPaciente( this.forma2.value.Cedula, paciente )
    .subscribe();

    this.GuardarExamen();
  }

  GuardarExamen() {
    let examen = new Exan(
    this.forma2.value.Audiometro,
    this.forma2.value.Tipo,
    this.forma2.value.RuidoDba,
    this.forma2.value.F_Contratacion,
    this.forma2.value.Cedula,
    this.forma2.value.Proteccion,
    this.forma2.value.TipoProteccion,
    this.forma2.value.OtrosProteccion,
    this.forma2.value.Molestia,
    this.forma2.value.MolestiasDetalle,
  );
  console.log(examen);
  this._examenService.VerificarExamen(this.forma2.value.Cedula, examen).subscribe();


  // this._examenService.crearExamen( examen )
  //           .subscribe((resp: any) => {
  //             console.log( resp );
  //           });
  //    console.log(examen);
  // }

  }
}
