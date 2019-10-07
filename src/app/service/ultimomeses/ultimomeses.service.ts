import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIO } from '../../config/config';


import swal from 'sweetalert';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { UltimoMeses } from '../../models/ultimosM';


@Injectable({
  providedIn: 'root'
})
export class UltimomesesService {

  ultimom: UltimoMeses;

  constructor(public http: HttpClient, public router: Router) { }

  crearUltimom( ultimom: UltimoMeses ) {

    const url = URL_SERVICIO + '/crear_ultimomeses';

   return this.http.post( url, ultimom )
       .map( (resp: any) => {
      //  swal('Paciente Creado', ultimomeses.IdUltimosM, 'success');
       return resp;
       })
       .catch( err => {
        console.log( err.error.mensaje );
        swal(err.error.mensaje, err.error.errors.message, 'error');
         return Observable.throw( err );
       });
  }

  actualizarUltimom( ultimom: UltimoMeses ) {

    let url = URL_SERVICIO + '/ultimomeses/' + ultimom.Cedula;

    let verifica = Boolean;
    return this.http.put( url, ultimom )
                .map( (resp: any) => {
                 verifica = resp.ok;
                 if (verifica) {
                  console.log('Registro Acualizado');
                 }
                 swal('Registro actualizado', 'success' );
              });

  }


  cargarUltimom( ) {

    let url = URL_SERVICIO + '/ultimomeses';
    return this.http.get( url );

  }

    borrarultimosMeses( cedula: string ) {

    let url = URL_SERVICIO + '/ultimomesesborrar/' + cedula;
    return this.http.delete( url )
                .map( resp => {
                  return true;
                });

  }

  VerificarUltimosM( termino: string, ultimom: UltimoMeses ) {
    let verificar: string;
    let url = URL_SERVICIO + '/BuscarultimosM/' + termino;
    return this.http.get( url )
         .map( (resp: any ) =>  {
           verificar = resp.ok;
           console.log(verificar);
          if (verificar) {
             console.log('Existe el Paciente');
              this.actualizarUltimom(ultimom)
               .subscribe();
            return false;
          } else {
            console.log('No existe');
           this.crearUltimom(ultimom).subscribe();
          }
     });
  }

  cargarUltimosMVCedula( termino: string ) {

    let url = URL_SERVICIO + '/BuscarultimosM/' + termino;

    return this.http.get( url )
              .map( (resp: any ) => resp.ultimom );

  }
}
