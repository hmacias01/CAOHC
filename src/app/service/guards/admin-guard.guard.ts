import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor(public _usuarioService: UsuarioService, public router: Router) {}

  canActivate() {
    if ( this._usuarioService.usuario.role === 'ADMIN' ) {
      return true;

    } else {
      console.log('Bloqueado por el ADMIN-Guards');
      this.router.navigate(['/dashboard']);
    return false;
    }

  }
}
