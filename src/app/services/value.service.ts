import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  private value= 'my value'

  constructor() { }
  //Llamar a una variable privada
  getValue(){
    return this.value;
  }

  setValue(value: string){
    this.value=value;
  }
  getPromiseValue(){
    return Promise.resolve('promise value')
  }

  getObservableValue(){
    return of('observable value');
  }
}
