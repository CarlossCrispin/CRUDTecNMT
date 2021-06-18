
import { Injectable } from '@angular/core';
/* estudiar rutas  */
import { fakeData} from '../data/dummy.js';
import { ItemI } from '../models/items.interface.js';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {


  /* declarando un arreglo de gelatinas */
  datos: ItemI[];

  constructor() {
    this.datos = fakeData;
  }
}
