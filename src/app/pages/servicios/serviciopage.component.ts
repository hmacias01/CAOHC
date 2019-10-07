import { Servicio } from '../../models/servicio';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuarios.model';
import { UsuarioService } from '../../service/service.index';
import { ServicioService } from '../../service/servicio/servicio.service';

import swal from 'sweetalert';




@Component({
  selector: 'app-serviciopage',
  templateUrl: './serviciopage.component.html',
  styles: []
})
export class ServiciopageComponent implements OnInit {

  fecha = new Date();
  fecha2 = this.fecha.getDate() + '/' + this.fecha.getMonth() + '/' + this.fecha.getFullYear();


  usuario: Usuario;

  servicio: Servicio[] = [];
  desde: number = 0;

  constructor( public _servicioService: ServicioService, public _usuarioService: UsuarioService) {
    this.usuario = this._usuarioService.usuario;
   }

  ngOnInit() {
  }

  guardarServicio( forma: NgForm ) {

    const servicio = new Servicio(forma.value.asunto, forma.value.detalle, this.fecha2.toString(),  this.usuario._id);

    console.log(servicio);

    this._servicioService.salvar( servicio )
            .subscribe(resp => {

              swal('Exelente', 'Ya eres Premium!!', 'success');
              console.log( resp );


            });

  }

}
