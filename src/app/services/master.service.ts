import { Injectable } from '@angular/core';
import { ValueService} from './value.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  //Inyección de dependencias en Angular en el constructor.

  constructor( private ValueService: ValueService) { }

  //Método getValue para llaman un método internet then y master depende de Value
  //Ejecutar el método ValueService y valida si funciona o NO.
  getValue(){
    return this.ValueService.getValue();
  }
}
