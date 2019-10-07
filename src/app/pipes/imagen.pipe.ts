import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIO } from '../config/config';


@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string ): any {
    let url = URL_SERVICIO + '/imagenaudiometria/';
    console.log(img);
    if ( !img ) {
      return url + 'xxx';
    }

    if ( img.indexOf('https') >= 0 ) {
      return img;
    }

    url += img;
    console.log(url);
    return ;



    // switch ( tipo ) {

    //   case 'usuario':
    //     url += '/usuarios/' + img;
    //   break;

    //   default:
    //     console.log('tipo de imagen no existe, usuario');
    //     url += '/usuarios/xxx';
    // }

   // return url;
  }

}
