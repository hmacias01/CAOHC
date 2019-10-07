import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuarios.model';
import { UsuarioService } from '../../service/service.index';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styles: []
})
export class PremiumComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuario: Usuario;
  role: String;
  acepto: boolean;


  constructor(public _usuarioService: UsuarioService, public router: Router) { }

  ngOnInit() {

    this.usuario = this._usuarioService.usuario;

  }

  ver( forma: NgForm ) {
    this.acepto = forma.value.acepto;
     console.log(this.acepto);
  }

  salvarUsuario(usuario: Usuario) {

    this.usuario.role = 'ADMIN';

    // console.log(usuario);
    // console.log(usuario);
    this._usuarioService.actualizarUsuario(usuario)
    .subscribe(resp => {
      console.log(resp);
      swal('Exelente', 'Ya eres Premium!!', 'success');
      this.router.navigate(['/dashboard']);
    });

    // this._usuarioService.actualizarUsuario( )
    // .subscribe();
  }

}
