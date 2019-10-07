import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIO } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Servicio } from '../../models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  servicio: Servicio;

  constructor(public http: HttpClient, public ruote: Router, public _usuarioService: UsuarioService) { }

  salvar(servicio) {
    const url = URL_SERVICIO + '/servicio' + '?token=' + this._usuarioService.token;
    // url += '?token=' + this._usuarioService.token;

    return this.http.post( url, servicio )
        .map( (resp: any) => {

         return resp.servicio;
        });
  }


  cargarservicios(desde: number= 0) {

    let url = URL_SERVICIO + '/servicio' + '?desde=' + desde;
    return this.http.get( url );

  }

}
