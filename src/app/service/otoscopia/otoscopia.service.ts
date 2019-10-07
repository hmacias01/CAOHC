import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIO } from '../../config/config';

import swal from 'sweetalert';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { OtoscopiaEx } from '../../models/Otoscopia';


@Injectable({
  providedIn: 'root'
})

export class OtoscopiaService {

otoscopia: OtoscopiaEx;

  constructor(public http: HttpClient, public router: Router) { }

  crearOtoscopia ( otoscopia: OtoscopiaEx ) {
    const url = URL_SERVICIO + '/crear_otoscopia';
   return this.http.post( url, otoscopia )
       .map( (resp: any) => {
        // swal('Paciente Creado', otoscopia.Nombre, 'success');
       // return resp.usuario;
       })
       .catch( err => {
        console.log( err.error.mensaje );
        swal(err.error.mensaje, err.error.errors.message, 'error');
         return Observable.throw( err );
       });
  }

  actualizarOtoscopia(otoscopia: OtoscopiaEx ) {

    let url = URL_SERVICIO + '/editar_otoscopia/' + otoscopia.cedula;
    let verifica = Boolean;
    return this.http.put( url, otoscopia )
                .map( (resp: any) => {
                 verifica = resp.ok;
                 if (verifica) {
                  console.log('Registro Acualizado');
                 }
                 swal('Registro actualizado', 'success' );
              });
  }


  cargarOtoscopia( ) {
    let url = URL_SERVICIO + '/empleado';
    return this.http.get( url );
  }

  cargarOtoscopiaCedula( termino: string ) {

    let url = URL_SERVICIO + '/Buscarotoscopia/' + termino;
    return this.http.get( url )
              .map( (resp: any ) => resp.otoscopia );
  }

  VerificarOtoscopia( termino: string, otoscopia: OtoscopiaEx ) {
    let verificar: string;
    let url = URL_SERVICIO + '/Buscarotoscopia/' + termino;
    return this.http.get( url )
         .map( (resp: any ) =>  {
           verificar = resp.ok;
           console.log(verificar);
          if (verificar) {
             console.log('Existe el Registro');
              this.actualizarOtoscopia(otoscopia)
               .subscribe();
            return false;
          } else {
            console.log('No existe');
           this.crearOtoscopia(otoscopia).subscribe();
          }
     });
  }

  borrarOtoscopia( cedula: string ) {

    let url = URL_SERVICIO + '/borrarotoscopia/' + cedula;
    return this.http.delete( url )
                .map( resp => {
               //   swal('Usuario borrado', 'El usuario a sido eliminado correctamente', 'success');
                  return true;
                });
  }

}
