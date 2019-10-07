import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIO } from '../../config/config';


import swal from 'sweetalert';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Paciente } from '../../models/paciente';
import { SubirArchivoService } from '../subir-Archivo/subir-archivo.service';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

 // usuario: Usuario;
  paciente: Paciente;

  constructor(public http: HttpClient, public router: Router, public _subirArchivoService: SubirArchivoService ) { }


  guardarStorage(Cedula: string, Nombre: string, imag: string) {
    localStorage.setItem('cedula', Cedula);
    localStorage.setItem('nombre', Nombre);
    localStorage.setItem('imagen', imag);
    // localStorage.setItem('Nombre', JSON.stringify(Nombre) );
   // this.paciente = paciente;
   }

  crearPaciente ( paciente: Paciente ) {
    const url = URL_SERVICIO + '/crear_empleado';
   return this.http.post( url, paciente )
       .map( (resp: any) => {
    //   if (!resp) {
    //  //  this.actualizarPaciente( paciente );
    //    console.log('Paciente Modificado');
    //   }
        swal('Paciente Creado', paciente.Nombre, 'success');
       })
       .catch( err => {
        console.log( err.error.mensaje );
        // swal(err.error.mensaje, err.error.errors.message, 'error');
         return Observable.throw( err );
       });
  }

  actualizarPaciente( paciente: Paciente ) {
     console.log(paciente.Cedula);
    let url = URL_SERVICIO + '/Actualizar_empleado/' + paciente.Cedula;
    let verifica = Boolean;
    return this.http.put( url, paciente )
                .map( (resp: any) => {
                 verifica = resp.ok;
                 if (verifica) {
                  console.log('Registro Acualizado');
                 }
                 swal('Usuario actualizado', paciente.Nombre, 'success' );
              });
  }

  cambiarImagen( archivo: File, Cedula: string ) {
    this._subirArchivoService.subirArchivo( archivo,  Cedula )
          .then( (resp: any) => {
            this.paciente.img = resp.paciente.img;
         //   swal( 'Imagen Actualizada', this.usuario.nombre, 'success' );
          //  this.guardarStorage( id, this.token, this.usuario );
          })
          .catch( resp => {
            console.log( resp );
          }) ;
  }



  probar() {
    console.log('Probado');
  }

  cargarPacientes( desde: number= 0 ) {
    let url = URL_SERVICIO + '/empleados';
    return this.http.get( url );
  }

  buscarPacientes( termino: string ) {
    let url = URL_SERVICIO + '/emple/' + termino;
    return this.http.get( url )
         .map( (resp: any ) =>  resp.paciente);
         //  this.guardarStorage( this.paciente.Cedula, this.paciente.Nombre, this.paciente.img);
     //   });
          // let pacientedb: Paciente = resp.paciente;
          //    this.guardarStorage( '251452001', 'Fausto', '15421421');
      //   });
  }


  VerificarPaciente( termino: string, paciente: Paciente ) {
    let verificar: string;
    let url = URL_SERVICIO + '/emple/' + termino;
    return this.http.get( url )
         .map( (resp: any ) =>  {
           verificar = resp.ok;
           console.log(verificar);
          if (verificar) {
             console.log('Existe el Paciente');
              this.actualizarPaciente(paciente)
               .subscribe();
            return false;
          } else {
            console.log('No existe');
           this.crearPaciente(paciente).subscribe();
          }
     });
  }


  borrarPacientes( id: string ) {

    let url = URL_SERVICIO + '/borrarempleado/' + id;
  //  url += '?token=' + this.token;

    return this.http.delete( url )
                .map( resp => {
                 swal('Paciente borrado', 'El Paciente a sido eliminado correctamente', 'success');
                  return true;
                });

  }



}
