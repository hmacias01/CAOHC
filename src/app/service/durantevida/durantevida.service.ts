import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuarios.model';
import { URL_SERVICIO } from '../../config/config';


import swal from 'sweetalert';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DureanteVida } from '../../models/duranteV';


@Injectable({
  providedIn: 'root'
})
export class DurantevidaService {
  durantevida: DureanteVida;

  constructor(public http: HttpClient, public router: Router) { }

  crearDuranteV ( durantevida: DureanteVida ) {
    const url = URL_SERVICIO + '/crear_durantevida';
   return this.http.post( url, durantevida )
       .map( (resp: any) => {
        // swal('Paciente Creado', otoscopia.Nombre, 'success');
       return resp;
       })
       .catch( err => {
        console.log( err.error.mensaje );
        swal(err.error.mensaje, err.error.errors.message, 'error');
         return Observable.throw( err );
       });
  }

  actualizarDuranteV( durantevida: DureanteVida ) {

    let url = URL_SERVICIO + '/durantevida/' + durantevida.Cedula;
    let verifica = Boolean;
    return this.http.put( url, durantevida )
                .map( (resp: any) => {
                 verifica = resp.ok;
                 if (verifica) {
                  console.log('Registro Acualizado');
                 }
               //  swal('Usuario actualizado', paciente.Nombre, 'success' );
              });

  }


  borrarDurantev( id: string ) {

    let url = URL_SERVICIO + '/borrardurantev/' + id;
    return this.http.delete( url )
                .map( resp => {
                   return true;
                });

  }
  VerificarPaciente( termino: string, durantev: DureanteVida ) {
    let verificar: string;
    let url = URL_SERVICIO + '/Buscardurantevida/' + termino;
    return this.http.get( url )
         .map( (resp: any ) =>  {
           verificar = resp.ok;
           console.log(verificar);
          if (verificar) {
             console.log('Existe el Paciente');
              this.actualizarDuranteV(durantev)
               .subscribe();
            return false;
          } else {
            console.log('No existe');
           this.crearDuranteV(durantev).subscribe();
          }
     });
  }

  cargarDuranteVCedula( termino: string ) {

    let url = URL_SERVICIO + '/Buscardurantevida/' + termino;

    return this.http.get( url )
              .map( (resp: any ) => resp.durantev );

  }
}
