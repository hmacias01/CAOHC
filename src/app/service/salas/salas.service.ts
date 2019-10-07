import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Foro } from '../../models/foros.model';

import swal from 'sweetalert';

import 'rxjs/add/operator/catch';
import { URL_SERVICIO } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Observable } from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class SalasService {
  foro: Foro;


  constructor(public http: HttpClient, public ruote: Router, public _usuarioService: UsuarioService) { }

  salvar(foro) {
    const url = URL_SERVICIO + '/foro' // + '?token=' + this._usuarioService.token;
    // url += '?token=' + this._usuarioService.token;
     console.log('Datos de Sala' + foro);
    // return this.http.post( url, foro )
    //     .map( (resp: any) => {

    //      return resp.foro;
    //     })
    //     .catch( err => {
    //       console.log( err.error.mensaje );
    //       swal(err.error.mensaje, 'Aste Premium');
    //        return Observable.throw( err );
    //      });
  }


  cargarForo( categoria: string, desde: number= 0) {

    let url = URL_SERVICIO + '/busqueda/coleccion/foro/' + categoria  + '?desde=' + desde;
    return this.http.get( url );

  }
}
