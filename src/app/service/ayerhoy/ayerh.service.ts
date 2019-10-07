import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuarios.model';
import { URL_SERVICIO } from '../../config/config';


import swal from 'sweetalert';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AyerH } from '../../models/ayerH';

@Injectable({
  providedIn: 'root'
})
export class AyerhService {
  ayerh: AyerH;

  constructor(public http: HttpClient, public router: Router) { }

  crearAyerH ( ayerh: AyerH ) {

    const url = URL_SERVICIO + '/crear_ayerhoy';

   return this.http.post( url, ayerh )
       .map( (resp: any) => {
         swal('Registro Creado', 'success');
       return resp;
       })
       .catch( err => {
        console.log( err.error.mensaje );
        swal(err.error.mensaje, err.error.errors.message, 'error');
         return Observable.throw( err );
       });
  }

  actualizarAyerH( ayerh: AyerH ) {

    let url = URL_SERVICIO + '/ayerh/' + ayerh.Cedula;

    let verifica = Boolean;
    return this.http.put( url, ayerh )
                .map( (resp: any) => {
                 verifica = resp.ok;
                 if (verifica) {
                  console.log('Registro Acualizado');
                  swal('Registro actualizado', 'success' );
                 }
              });

  }


  cargarAyerH( ) {

    let url = URL_SERVICIO + '/ayerhoy';
    return this.http.get( url );

  }

    borrarayerh( cedula: string ) {

    let url = URL_SERVICIO + '/ayerhborrar/' + cedula;
    return this.http.delete( url )
                .map( resp => {
                  return true;
                });

  }


  VerificarAyerHoy( termino: string, ayerh: AyerH ) {
    let verificar: string;
    let url = URL_SERVICIO + '/BuscarayerHoy/' + termino;
    return this.http.get( url )
         .map( (resp: any ) =>  {
           verificar = resp.ok;
           console.log(verificar);
          if (verificar) {
             console.log('Existe el Paciente');
              this.actualizarAyerH(ayerh)
               .subscribe();
            return false;
          } else {
            console.log('No existe');
           this.crearAyerH(ayerh).subscribe();
          }
     });
  }

  cargarAyerhoyCedula( termino: string ) {

    let url = URL_SERVICIO + '/BuscarayerHoy/' + termino;

    return this.http.get( url )
              .map( (resp: any ) => resp.ayerh );

  }
}
