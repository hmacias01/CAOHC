import { Component, OnInit } from '@angular/core';
import { SalasService } from '../../service/salas/salas.service';
import { Foro } from '../../models/foros.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuarios.model';
import { UsuarioService } from '../../service/service.index';


@Component({
  selector: 'app-salacomputadoras',
  templateUrl: './salacomputadoras.component.html',
  styles: []
})
export class SalacomputadorasComponent implements OnInit {

  fecha = new Date();
  fecha2 = this.fecha.getDate() + '/' + this.fecha.getMonth() + '/' + this.fecha.getFullYear();

  categoria: string = '5bfd45e612228e2918cf60c7';
  usuario: Usuario;

  foros: Foro[] = [];
  desde: number = 0;

  cargando: boolean = true;


   constructor(public _salaService: SalasService, public _usuarioService: UsuarioService) {
     this.usuario = this._usuarioService.usuario;
    }



  ngOnInit() {
    // this.cargarForo();
  }



  guardarforo( forma: NgForm ) {

    const foro = new Foro(forma.value.titulo, forma.value.detalle, this.fecha2.toString(), this.categoria ); // , this.usuario._id

    console.log(foro);

    this._salaService.salvar( foro );
    //         .subscribe(resp => {

    //           console.log( resp );


    //         });
    // this.cargarForo();

  }


  // cargarForo() {

  //   this.cargando = true;

  //   this._salaService.cargarForo( this.categoria, this.desde )
  //             .subscribe( (resp: any) => {

  //               console.log(resp);
  //               this.foros = resp.foro;
  //               this.cargando = false;

  //             });

  // }

  // cambiardesde( valor: number ) {

  //   let desde = this.desde + valor;

  //   if ( desde >= 100 ) {
  //     return;
  //   }

  //   if ( desde < 0 ) {
  //     return;
  //   }

  //   this.desde += valor;
  //   this.cargarForo();

  // }

}
