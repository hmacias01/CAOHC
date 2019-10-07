import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIO } from '../../config/config';


import swal from 'sweetalert';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AudiogramaEx } from '../../models/audiograma';

@Injectable({
  providedIn: 'root'
})
export class AudiogramaService {

  audiograma: AudiogramaEx;

  constructor(public http: HttpClient, public router: Router) { }

  crearAudiograma ( audiograma: AudiogramaEx) {

    const url = URL_SERVICIO + '/crear_audiograma';

   return this.http.post( url, audiograma )
       .map( (resp: any) => {
        swal('Registro creado', 'success' );
       // return resp.usuario;
       })
       .catch( err => {
        console.log( err.error.mensaje );
        swal(err.error.mensaje, err.error.errors.message, 'error');
         return Observable.throw( err );
       });
  }

  actualizarAudiograma( audiograma: AudiogramaEx ) {

    let url = URL_SERVICIO + '/editar_audiograma/' + audiograma.cedula;
  //  url += '?token=' + this.token;

  let verifica = Boolean;
  return this.http.put( url, audiograma )
              .map( (resp: any) => {
               verifica = resp.ok;
               if (verifica) {
                console.log('Registro Acualizado');
               }
               swal('Registro actualizado', 'success' );
            });

  }

  borrarAudiograma( id: string ) {

    let url = URL_SERVICIO + '/borraraudiograma/' + id;
  //  url += '?token=' + this.token;

    return this.http.delete( url )
                .map( resp => {
               //   swal('Usuario borrado', 'El usuario a sido eliminado correctamente', 'success');
                  return true;
                });

  }

  cargarAudiogramaCedula( termino: string ) {

    let url = URL_SERVICIO + '/buscaraudiograma/' + termino;

    return this.http.get( url )
              .map( (resp: any ) => resp.audiograma );

  }

  VerificarAudiograma( termino: string, audiograma: AudiogramaEx ) {
    let verificar: string;
    let url = URL_SERVICIO + '/buscaraudiograma/' + termino;
    return this.http.get( url )
         .map( (resp: any ) =>  {
           verificar = resp.ok;
           console.log(verificar);
          if (verificar) {
             console.log('Existe el Registro');
              this.actualizarAudiograma(audiograma)
               .subscribe();
            return false;
          } else {
            console.log('No existe');
           this.crearAudiograma(audiograma).subscribe();
          }
     });
  }
}
