import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { PacienteService } from '../../service/pacientes/paciente.service';
import { Paciente } from '../../models/paciente';
import { Exan } from '../../models/examen';
import { ExamenService } from '../../service/examen/examen.service';


@Component({
  selector: 'app-listarpaceinte',
  templateUrl: './listarpaceinte.component.html',
  styleUrls: ['./listarpaceinte.component.css']
})
export class ListarpaceinteComponent implements OnInit {

  constructor(public _pacienteService: PacienteService, public _examenService: ExamenService ) { }

  fecha = new Date();
  fecha2 = this.fecha.getDate() + '/' + this.fecha.getMonth() + '/' + this.fecha.getFullYear();
  forma: FormGroup;
  forma2: FormGroup;
  paciente: Paciente[] = [];

  ngOnInit() {
  }

  buscarPacientes(termino: string) {

    console.log('Cedula Enviada: ' + termino);
    if ( termino.length <= 0 ) {
      return;
    }

    this._pacienteService.buscarPacientes( termino )
            .subscribe( ( resp: any ) =>  {
              this.paciente = resp;
              console.log(this.paciente);
            });
            //   console.log('Resultados: ' + this.paciente);   //  [routerLink]="['/otoscopia', pacientes.Cedula]"
          // });
          this.buscarExamen(termino);
  }

  buscarExamen(termino: string) {

  //   this._examenService.buscarExamen( termino )
  //           .subscribe( ( resp: any ) =>  {
  //             this.paciente = resp;
  //           });
  //           //   console.log(this.paciente);
  //           //   console.log('Resultados: ' + this.paciente);   //  [routerLink]="['/otoscopia', pacientes.Cedula]"
  //         // });
   }

}
