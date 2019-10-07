import { Component, OnInit } from '@angular/core';
import { OtoscopiaEx } from '../../models/Otoscopia';
import { OtoscopiaService, AudiogramaService, AyerhService, DurantevidaService, UltimomesesService   } from '../../service/service.index';
// import { AudiogramaService } from '../../service/audiograma/audiograma.service';
import { AudiogramaEx } from '../../models/audiograma';
import { AyerH } from '../../models/ayerH';
import { DureanteVida } from '../../models/duranteV';
import { UltimoMeses } from '../../models/ultimosM';



@Component({
  selector: 'app-reporteria',
  templateUrl: './reporteria.component.html',
  styleUrls: ['./reporteria.component.css']
})
export class ReporteriaComponent implements OnInit {

  otoscopa: OtoscopiaEx[] = [];
  audiogramas: AudiogramaEx[] = [];
  ayerhoy: AyerH[] = [];
  durantev: DureanteVida[] = [];
  ultimosm: UltimoMeses[] = [];

  constructor(public _otoscopia: OtoscopiaService, public _audioGrama: AudiogramaService, public _ayerH: AyerhService,
    public _durantevida: DurantevidaService, public _ultimosMeses: UltimomesesService) { }

  ngOnInit() {
  }

  cargarOtoscopia(termino: string) {
    console.log(termino);
    if ( termino.length <= 0 ) {
      return;
    }

    this._otoscopia.cargarOtoscopiaCedula( termino )
            .subscribe( resp =>  this.otoscopa = resp );
            console.log(this.otoscopa);

            this.cargarAudiograma(termino);
            this.cargarAyerH(termino);
            this.cargarDuranteVCedula(termino);
            this.cargarUltimosMeses(termino);
  }


  cargarAudiograma(termino: string) {
    console.log(termino);
    if ( termino.length <= 0 ) {
      return;
    }

    this._audioGrama.cargarAudiogramaCedula( termino )
            .subscribe( audiograma =>  this.audiogramas = audiograma );
            console.log(this.audiogramas);
  }

  cargarAyerH(termino: string) {
    console.log(termino);
    if ( termino.length <= 0 ) {
      return;
    }

    this._ayerH.cargarAyerhoyCedula( termino )
            .subscribe( ayerh =>  this.ayerhoy = ayerh );
            console.log(this.ayerhoy);
  }

  cargarDuranteVCedula(termino: string) {
    console.log(termino);
    if ( termino.length <= 0 ) {
      return;
    }

    this._durantevida.cargarDuranteVCedula( termino )
            .subscribe( durantevid =>  this.durantev = durantevid );
            console.log(this.durantev);
  }

  cargarUltimosMeses(termino: string) {
    console.log(termino);
    if ( termino.length <= 0 ) {
      return;
    }

    this._ultimosMeses.cargarUltimosMVCedula( termino )
            .subscribe( resp =>  this.ultimosm = resp );
            console.log(this.durantev);
  }
}
