import { Injectable } from '@angular/core';

@Injectable()
export class SidebardService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Setthings', url: '/account' },
        { titulo : 'Contactos', url: '/contactos' },
        { titulo: 'Home', url: '/dashboard' }
      ]
    }
  ];

  constructor() { }

}
