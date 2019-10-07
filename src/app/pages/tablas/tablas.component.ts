import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { DureanteVida } from '../../models/duranteV';
import { AyerH } from '../../models/ayerH';
import { AyerhService } from '../../service/ayerhoy/ayerh.service';
import { DurantevidaService } from '../../service/service.index';
import { UltimomesesService } from '../../service/service.index';
import { UltimoMeses } from '../../models/ultimosM';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {
  fecha = new Date();
  fecha2 = this.fecha.getDate() + '/' + this.fecha.getMonth() + '/' + this.fecha.getFullYear();
  forma: FormGroup;
 ultimosm: UltimoMeses;
 cedulas: string;
//  DolorO = 'A';
//  SupuracionS = 'A';
//  RuidoTZ = 'A';
//  MareoV = 'A';
//  SorderaS = 'A';
//  SorderaF = 'A';
//  TapadoML = 'A';
//  DolorMR = 'A';
//  GolpesCO = 'A';
//  PAA = 'A';
//  MedicamentosP = 'A';

  constructor(public _ayerh: AyerhService, public _duranteV: DurantevidaService, public _ultimoM: UltimomesesService,
     public activatedRoute: ActivatedRoute) { 

      activatedRoute.params.subscribe( params => {
        const cedula = params['Cedula'];
        this.cedulas = cedula;
        if ( cedula !== 'nuevo' ) {
      //   console.log('El Numero de Cedula es ');
       }
      });
     }



  ngOnInit() {
    this.forma = new FormGroup({
      DolorO: new FormControl( null, Validators.required ),
      SupuracionS: new FormControl( null, Validators.required ),
      RuidoTZ: new FormControl( null, Validators.required ),
      MareoV: new FormControl( null, Validators.required ),
      SorderaS: new FormControl( null, Validators.required ),
      SorderaF: new FormControl( null, Validators.required ),
      TapadoML: new FormControl( null, Validators.required ),
      DolorMR: new FormControl( null, Validators.required ),
      GolpesCO: new FormControl( null, Validators.required ),
      PAA: new FormControl( null, Validators.required ),
      MedicamentosP: new FormControl( null, Validators.required ),


      Fiebre: new FormControl( null, Validators.required ),
      ConsultoO: new FormControl( null, Validators.required ),
      OperacionO: new FormControl( null, Validators.required ),
      PerdidaC: new FormControl( null, Validators.required ),
      Paperas: new FormControl( null, Validators.required ),
      Escarlatina: new FormControl( null, Validators.required ),
      Sarampion: new FormControl( null, Validators.required ),
      Meningitis: new FormControl( null, Validators.required ),
      Diabetes: new FormControl( null, Validators.required ),
      ERinones: new FormControl( null, Validators.required ),
      Alergias: new FormControl( null, Validators.required ),
      InstrumentosM: new FormControl( null, Validators.required ),
      SFamilia: new FormControl( null, Validators.required ),
      ServicioM: new FormControl( null, Validators.required ),
      MRCasaHoras: new FormControl( null, Validators.required ),
      MFuerte: new FormControl( null, Validators.required ),
      PasatiempoR: new FormControl( null, Validators.required ),
      ArmasF: new FormControl( null, Validators.required ),
      Cohetes: new FormControl( null, Validators.required ),
      Gentamicina: new FormControl( null, Validators.required ),
      Quinina: new FormControl( null, Validators.required ),
      Quimicos: new FormControl( null, Validators.required ),
      TrabajoAnt: new FormControl( null, Validators.required ),

      Moto: new FormControl( null, Validators.required ),
      Bus: new FormControl( null, Validators.required ),
      Gripe: new FormControl( null, Validators.required ),
      RFSinProt: new FormControl( null, Validators.required ),
      Fiesta: new FormControl( null, Validators.required ),
      Otros: new FormControl( null, Validators.required ),

    });
  }

  GuardarUltimoMeses() {


    let ultimomeses = new UltimoMeses(
      this.forma.value.DolorO,
    this.forma.value.SupuracionS,
    this.forma.value.RuidoTZ,
    this.forma.value.MareoV,
    this.forma.value.SorderaS,
    this.forma.value.SorderaF,
    this.forma.value.TapadoML,
    this.forma.value.DolorMR,
    this.forma.value.GolpesCO,
    this.forma.value.PAA,
    this.forma.value.MedicamentosP,
    this.cedulas,
    );
    this._ultimoM.VerificarUltimosM(this.cedulas, ultimomeses)
    .subscribe( (resp: any) => console.log(resp));

    // console.log(ultimomeses);
   this.GuardarDurantevida();
  }

  GuardarDurantevida() {
    let durantevida = new DureanteVida(this.forma.value.Fiebre,
    this.forma.value.ConsultoO,
    this.forma.value.OperacionO,
    this.forma.value.PerdidaC,
    this.forma.value.Paperas,
    this.forma.value.Escarlatina,
    this.forma.value.Sarampion,
    this.forma.value.Meningitis,
    this.forma.value.Diabetes,
    this.forma.value.ERinones,
    this.forma.value.Alergias,
    this.forma.value.InstrumentosM,
    this.forma.value.SFamilia,
    this.forma.value.ServicioM,
    this.forma.value.MRCasaHoras,
    this.forma.value.MFuerte,
    this.forma.value.PasatiempoR,
    this.forma.value.ArmasF,
    this.forma.value.Cohetes,
    this.forma.value.Gentamicina,
    this.forma.value.Quinina,
    this.forma.value.Quimicos,
    this.forma.value.TrabajoAnt,
    this.cedulas,
    );

    this._duranteV.VerificarPaciente(this.cedulas, durantevida)
    .subscribe( (resp: any) => console.log(resp));
    console.log(durantevida);

    this.GuardarAyerHoy();
  }

  GuardarAyerHoy() {
    let ayerh = new AyerH(this.forma.value.Moto,
    this.forma.value.Bus,
    this.forma.value.Gripe,
    this.forma.value.RFSinProt,
    this.forma.value.Fiesta,
    this.forma.value.Otros,
    this.cedulas,
    );
    this._ayerh.VerificarAyerHoy(this.cedulas, ayerh)
    .subscribe( (resp: any) => console.log(resp));
    console.log(ayerh);

  }

}
