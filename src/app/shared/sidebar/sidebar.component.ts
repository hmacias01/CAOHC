import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuarios.model';
import { UsuarioService, SidebardService } from '../../service/service.index';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  usuario: Usuario;

  constructor( public _usuarioService: UsuarioService, public _sidebar: SidebardService ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
  }

}
