import { ModaluploadService } from '../../components/modal-upload/modalupload.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuarios.model';
import { UsuarioService } from '../../service/service.index';




// import * as  swal from 'sweetalert';

declare var swal: any;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 0;

  totalRegistros: number;
  cargando: boolean = true;

  constructor(public _usuarioService: UsuarioService,
    public _modalUploadService: ModaluploadService ) { }

  ngOnInit() {
    this.cargarUsuarios();

    // this._modalUploadService.notificacion
    //       .subscribe( resp => this.cargarUsuarios() );
  }


  cargarUsuarios() {

    this.cargando = true;

    this._usuarioService.cargarUsuarios( this.desde )
              .subscribe( (resp: any) => {

                console.log(resp);
                this.totalRegistros = resp.total;
                this.usuarios = resp.usuarios;
                this.cargando = false;

              });

  }

  cambiardesde( valor: number ) {

    let desde = this.desde + valor;

    if ( desde >= this.totalRegistros ) {
      return;
    }

    if ( desde < 0 ) {
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();

  }

  buscarUsuario( termino: string ) {

    if ( termino.length <= 0 ) {
      this.cargarUsuarios();
      return;
    }

    this.cargando = true;

    this._usuarioService.buscarUsuarios( termino )
            .subscribe( (usuarios: Usuario[] ) => {

              this.usuarios = usuarios;
              this.cargando = false;
            });

  }

  borrarUsuario( usuario: Usuario ) {

    if ( usuario._id === this._usuarioService.usuario._id ) {
      swal('No puede borrar usuario', 'No se puede borrar a si mismo', 'error');
     console.log( 'no se puede borar el mismo usuario' );
      return;
    }

    // swal({
    //   title: '¿Esta seguro?',
    //   text: 'Esta a punto de borrar a ' + usuario.nombre,
    //   icon: 'warning',
    //   buttons: true,
    //   dangerMode: true,
    // })
    // .then( borrar => {

      // if (borrar) {

        this._usuarioService.borrarUsuario( usuario._id )
                  .subscribe( borrado => {
                      this.cargarUsuarios();
                  });

        // console.log( borrar );
    //   }

    // });

  }


  guardarUsuario( usuario: Usuario ) {

    this._usuarioService.actualizarUsuario( usuario )
            .subscribe();

  }

  // mostrarModal( id: string ) {
  //        console.log(id);
  //   this._modalUploadService.mostrarModal( 'usuarios', id );
  // }

}
