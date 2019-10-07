import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../service/pacientes/paciente.service';
import { URL_SERVICIO } from '../../config/config';


@Component({
  selector: 'app-resulanalisis',
  templateUrl: './resulanalisis.component.html',
  styleUrls: ['./resulanalisis.component.css']
})
export class ResulanalisisComponent implements OnInit {

  paciente: Paciente[] = [];
  imagenSubir: File;
  imagenTemp: any;
  paciente2: Paciente;
  imgresult: string;
  imag: string;
  constructor(public _pacienteService: PacienteService) {
  }

  ngOnInit() {
  }



  seleccionImage( archivo: File ) {

    console.log(event);

    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('imagen') < 0 ) {
    //  swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    // codigo javascript
    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => this.imagenTemp = reader.result;

  }

  retornarimg(img: string) {
    let url = URL_SERVICIO + '/imagenaudiometria/' + img ;

    this.imgresult = url;

   }

   buscarPacientes(termino: string) {

    console.log('Cedula Enviada: ' + termino);
    if ( termino.length <= 0 ) {
     // this.cargarPaciente();
      return;
    }

    this._pacienteService.buscarPacientes( termino )
            .subscribe( ( resp: any ) =>  {
              this.paciente = resp;
              console.log(this.paciente[0].img);
this.imag = this.paciente[0].img;
             this.retornarimg(this.paciente[0].img);
            });
            // console.log(this.paciente);
            //   console.log('Resultados: ' + this.paciente);   //  [routerLink]="['/otoscopia', pacientes.Cedula]"
          // });
  }
  // cargarPaciente() {

  //   this._pacienteService.cargarPacientes()
  //   .subscribe( (resp: any) => {

  //     // this.totalRegistros = resp.total;
  //      this.paciente = resp;
  //   //   console.log(this.paciente);
  //     // this.cargando = false;
  //   });


 // }

}
