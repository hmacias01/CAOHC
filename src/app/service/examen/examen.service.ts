import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIO } from '../../config/config';


import swal from 'sweetalert';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Exan } from '../../models/examen';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  examen: Exan;
  constructor(public http: HttpClient, public router: Router) { }

  crearExamen ( examen: Exan ) {
   const url = URL_SERVICIO + '/crear_examen';
   return this.http.post( url, examen )
       .map( (resp: any) => {
       // swal('Paciente Creado', paciente.Nombre, 'success');
        return resp;
       });
      //  .catch( err => {
      //   console.log( err.error.mensaje );
      //   // swal(err.error.mensaje, err.error.errors.message, 'error');
      //    return Observable.throw( err );
      //  });
  }

  actualizarExamen( examen: Exan ) {
    let url = URL_SERVICIO + '/editar_examen/' + examen.Cedula;
    let verifica = Boolean;
    return this.http.put( url, examen )
                .map( (resp: any) => {
                 verifica = resp.ok;
                 if (verifica) {
                  console.log('Registro Acualizado');
                 }
              //   swal('Usuario actualizado', paciente.Nombre, 'success' );
              });

  }

  cargarExamen( desde: number= 0 ) {
    let url = URL_SERVICIO + '/examen';
    return this.http.get( url );
  }

  VerificarExamen( termino: string, examen: Exan ) {
    let verificar: string;
    let url = URL_SERVICIO + '/emple/' + termino;
    return this.http.get( url )
         .map( (resp: any ) =>  {
           verificar = resp.ok;
           console.log(verificar);
          if (verificar) {
              this.actualizarExamen(examen)
               .subscribe();
            return false;
          } else {
            console.log('No existe');
           this.crearExamen(examen).subscribe();
          }
     });
  }

  buscarExamen( termino: string ) {
    let url = URL_SERVICIO + '/buscarexamen/' + termino;
    return this.http.get( url )
         .map( (resp: any ) =>  resp.examen);
         //  this.guardarStorage( this.paciente.Cedula, this.paciente.Nombre, this.paciente.img);
     //   });
          // let pacientedb: Paciente = resp.paciente;
          //    this.guardarStorage( '251452001', 'Fausto', '15421421');
      //   });
  }

  borrarExamen( cedula: string ) {

    let url = URL_SERVICIO + '/borrarexamen/' + cedula;
    return this.http.delete( url )
                .map( resp => {
               //   swal('Usuario borrado', 'El usuario a sido eliminado correctamente', 'success');
                  return true;
                });
  }
}
