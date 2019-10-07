import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { PacienteService } from '../../service/pacientes/paciente.service';
import { Paciente } from '../../models/paciente';
import { OtoscopiaEx } from '../../models/Otoscopia';
import { AudiogramaEx } from '../../models/audiograma';
import { OtoscopiaService } from '../../service/otoscopia/otoscopia.service';
import { AudiogramaService } from '../../service/audiograma/audiograma.service';


@Component({
  selector: 'app-otoscopia',
  templateUrl: './otoscopia.component.html',
  styleUrls: ['./otoscopia.component.css']
})
export class OtoscopiaComponent implements OnInit {
  fecha = new Date();
  fecha2 = this.fecha.getDate() + '/' + this.fecha.getMonth() + '/' + this.fecha.getFullYear();
  forma: FormGroup;
  otoscopia: OtoscopiaEx[] = [];
  audiograma: AudiogramaEx[] = [];
  pacientes: Paciente;
  imagenSubir: File;
  imagenTemp: any;
  public cedulas: string;
  disable: boolean;

  constructor(public _otoscopia: OtoscopiaService, public _audiograma: AudiogramaService, public _paciente: PacienteService,
    public activatedRoute: ActivatedRoute, public router: Router) {

    activatedRoute.params.subscribe( params => {
      const cedula = params['Cedula'];
      this.cedulas = cedula;
      if ( cedula !== 'nuevo' ) {
    //   console.log('El Numero de Cedula es ');
        this.cargarPaciente( cedula );
      }
    });

   }

  ngOnInit() {
  // this.pacientes = this._paciente.paciente;

    // console.log(this.paciente.Nombre);
    this.forma = new FormGroup({
      Normal: new FormControl( null, Validators.required ),
      AlteracionCongenita: new FormControl( null, Validators.required ),
      Ausente: new FormControl( null, Validators.required ),
      caeNormal: new FormControl( null, Validators.required ),
      Colapsado: new FormControl( null, Validators.required ),
      Congenita: new FormControl( null, Validators.required ),
      Cerumen: new FormControl( null, Validators.required ),
      CerumenP: new FormControl( null, Validators.required ),
      CerumenT: new FormControl( null, Validators.required ),
      CerumenI: new FormControl( null, Validators.required ),
      CerumenIP: new FormControl( null, Validators.required ),
      CerumenIT: new FormControl( null, Validators.required ),
      Otorragia: new FormControl( null, Validators.required ),
      Otorrea: new FormControl( null, Validators.required ),
      Otitis: new FormControl( null, Validators.required ),
      hallazgos: new FormControl( null, Validators.required ),
      Extraccion: new FormControl( null, Validators.required ),
      MembrNacaNor: new FormControl( null, Validators.required ),
      MembrNacaRoj: new FormControl( null, Validators.required ),
      MembrNacaOpc: new FormControl( null, Validators.required ),
      MembrNacaPerD: new FormControl( null, Validators.required ),
      MembrNacaPerI: new FormControl( null, Validators.required ),
      MembrNacaRetD: new FormControl( null, Validators.required ),
      MembrNacaRetI: new FormControl( null, Validators.required ),
      MembrNacaMonoD: new FormControl( null, Validators.required ),
      MembrNacaMonoI: new FormControl( null, Validators.required ),

      NDconperfilplano: new FormControl( null, Validators.required ),
      NDdescendente: new FormControl( null, Validators.required ),
      NDascendente: new FormControl( null, Validators.required ),
      NDbatea: new FormControl( null, Validators.required ),
      NDcampana: new FormControl( null, Validators.required ),
      NDmixto: new FormControl( null, Validators.required ),
      NIconperfilplano: new FormControl( null, Validators.required ),
      NIdescendente: new FormControl( null, Validators.required ),
      NIascendente: new FormControl( null, Validators.required ),
      NIbatea: new FormControl( null, Validators.required ),
      NIcampana: new FormControl( null, Validators.required ),
      NImixto: new FormControl( null, Validators.required ),

      PDsuperficial: new FormControl( null, Validators.required ),
      PDmoderada: new FormControl( null, Validators.required ),
      PDmoderadas: new FormControl( null, Validators.required ),
      PDsevera: new FormControl( null, Validators.required ),
      PDprofunda: new FormControl( null, Validators.required ),
      PDperfilp: new FormControl( null, Validators.required ),
      PDdescendente: new FormControl( null, Validators.required ),
      PDascendente: new FormControl( null, Validators.required ),
      PDbatea: new FormControl( null, Validators.required ),
      PDcampana: new FormControl( null, Validators.required ),
      PDmixto: new FormControl( null, Validators.required ),
      PDcaracterC: new FormControl( null, Validators.required ),
      PDsensorial: new FormControl( null, Validators.required ),
      PDmixto2: new FormControl( null, Validators.required ),
      PIsuperficial: new FormControl( null, Validators.required ),
      PImoderada: new FormControl( null, Validators.required ),
      PImoderadas: new FormControl( null, Validators.required ),
      PIsevera: new FormControl( null, Validators.required ),
      PIprofunda: new FormControl( null, Validators.required ),
      PIperfilp: new FormControl( null, Validators.required ),
      PIdescendente: new FormControl( null, Validators.required ),
      PIascendente: new FormControl( null, Validators.required ),
      PIbatea: new FormControl( null, Validators.required ),
      PIcampana: new FormControl( null, Validators.required ),
      PImixto: new FormControl( null, Validators.required ),
      PIcaracterC: new FormControl( null, Validators.required ),
      PIsensorial: new FormControl( null, Validators.required ),
      PImixto2: new FormControl( null, Validators.required ),
      MuescaOD: new FormControl( null, Validators.required ),
      MuescaOI: new FormControl( null, Validators.required ),
      FNhallazgos: new FormControl( null, Validators.required ),
    });


  }


  GuardarOtoscopia() {
    let otoscopia = new OtoscopiaEx(
    this.forma.value.Normal,
    this.forma.value.AlteracionCongenita,
    this.forma.value.Ausente,
    this.forma.value.caeNormal,
    this.forma.value.Colapsado,
    this.forma.value.Congenita,
    this.forma.value.Cerumen,
    this.forma.value.CerumenP,
    this.forma.value.CerumenT,
    this.forma.value.CerumenI,
    this.forma.value.CerumenIP,
    this.forma.value.CerumenIT,
    this.forma.value.Extraccion,
    this.forma.value.MembrNacaNor,
    this.forma.value.MembrNacaRoj,
    this.forma.value.MembrNacaOpc,
    this.forma.value.MembrNacaPerD,
    this.forma.value.MembrNacaPerI,
    this.forma.value.MembrNacaRetD,
    this.forma.value.MembrNacaRetI,
    this.forma.value.MembrNacaMonoD,
    this.forma.value.MembrNacaMonoI,
    this.forma.value.Otorragia,
    this.forma.value.Otorrea,
    this.forma.value.Otitis,
    this.forma.value.hallazgos,
    this.cedulas,
  );
this._otoscopia.VerificarOtoscopia(this.cedulas,  otoscopia).subscribe();


  // this._otoscopia.crearOtoscopia( otoscopia)
  //      .subscribe((resp: any) => {

  //     console.log( resp );
  // });

     console.log(otoscopia);
    this.GuardarAudiograma();
  }

  GuardarAudiograma() {
    let audiograma = new AudiogramaEx(this.forma.value.NDconperfilplano,
      this.forma.value.NDdescendente,
      this.forma.value.NDascendente,
      this.forma.value.NDbatea,
      this.forma.value.NDcampana,
      this.forma.value.NDmixto,
      this.forma.value.NIconperfilplano,
      this.forma.value.NIdescendente,
      this.forma.value.NIascendente,
      this.forma.value.NIbatea,
      this.forma.value.NIcampana,
      this.forma.value.NImixto,
      this.forma.value.PDsuperficial,
      this.forma.value.PDmoderada,
      this.forma.value.PDmoderadas,
      this.forma.value.PDsevera,
      this.forma.value.PDprofunda,
      this.forma.value.PDperfilp,
      this.forma.value.PDdescendente,
      this.forma.value.PDascendente,
      this.forma.value.PDbatea,
      this.forma.value.PDcampana,
      this.forma.value.PDmixto,
      this.forma.value.PDcaracterC,
      this.forma.value.PDsensorial,
      this.forma.value.PDmixto2,
      this.forma.value.PIsuperficial,
      this.forma.value.PImoderada,
      this.forma.value.PImoderadas,
      this.forma.value.PIsevera,
      this.forma.value.PIprofunda,
      this.forma.value.PIperfilp,
      this.forma.value.PIdescendente,
      this.forma.value.PIascendente,
      this.forma.value.PIbatea,
      this.forma.value.PIcampana,
      this.forma.value.PImixto,
      this.forma.value.PIcaracterC,
      this.forma.value.PIsensorial,
      this.forma.value.PImixto2,
      this.forma.value.MuescaOD,
      this.forma.value.MuescaOI,
      this.forma.value.FNhallazgos,
      this.cedulas,
    );
    this._audiograma.VerificarAudiograma(this.cedulas, audiograma).subscribe();
     console.log(audiograma);
    //  this._audiograma.crearAudiograma(audiograma)
    //  .subscribe((resp: any) => {

    //  console.log( resp );

    // this.router.navigate(['/pacientes']);
  //    });
  }


  seleccionImage( archivo: File ) {

    console.log(event);

    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('image') < 0 ) {
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

  cambiarImagen() {

    this._paciente.cambiarImagen( this.imagenSubir, this.cedulas );

   }


  cargarPaciente(cedula: string) {
    console.log('La cedula Capturada es ' + cedula);

    // this._paciente.buscarPacientes( cedula )
    // .subscribe( pacientes =>  this.paciente = pacientes );
  }


}
