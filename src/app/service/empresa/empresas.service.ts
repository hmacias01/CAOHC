import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Foro } from '../../models/foros.model';


import swal from 'sweetalert';

import 'rxjs/add/operator/catch';
import { URL_SERVICIO } from '../../config/config';
import { Observable } from 'rxjs/Rx';
import { Empresas } from '../../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {



  empresa: Empresas;


  constructor(public http: HttpClient, public ruote: Router) { }

  salvar(empresa: Empresas) {
    const url = URL_SERVICIO + '/crear_empresa';
    // url += '?token=' + this._usuarioService.token;



    console.log('valor a Salvar ' + empresa.nombre );

    return this.http.post( url, empresa )
        .map( (resp: any) => {
         console.log(resp);
         return resp;
        })
        .catch( err => {
          console.log( err );
          // swal(err.error.mensaje, 'As');
           return Observable.throw( err );
         });
  }


  // cargarForo( categoria: string, desde: number= 0) {

  //   let url = URL_SERVICIO + '/busqueda/coleccion/foro/' + categoria  + '?desde=' + desde;
  //   return this.http.get( url );

  // }

  borrar( id: number ) {

    let url = URL_SERVICIO + '/empresa/' + id;

    return this.http.delete( url )
                .map( resp => {
               //   swal('Usuario borrado', 'El usuario a sido eliminado correctamente', 'success');
                  return true;
                });

  }

  cargarEmpresas() {

    let url = URL_SERVICIO + '/empresa';
    return this.http.get( url );

  }
}
