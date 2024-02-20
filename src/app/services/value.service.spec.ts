import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;
  // O se puede crear un beforeEacah para que lo este dentro de el se ejecute antes de cada prueba
  beforeEach (()=>{
    TestBed.configureTestingModule({
      providers: [ValueService]
    })
    service = TestBed.inject(ValueService);
  })
  it('shoul be create', () =>{
    // Se debe instaciar el servicio para indicar que esta creado
    /* service = new ValueService(); */
    expect(service).toBeTruthy();
  });

  describe('Test for getValue', () => {
    // AAA
    it('Should return "my value"', () => {
      expect(service.getValue()).toBe('my value');
    });
  });

  describe('Test for setValue', () => {
    // AAA
    it('Should change the value', () => {
      expect(service.getValue()).toBe('my value');
      service.setValue('change');
      expect(service.getValue()).toBe('change');
    });
  });


  describe('Test for getPromiseValue', () => {
    // AAA
    it('Should return "promise value" from promise', (doneFn) => {
      service.getPromiseValue()
      //Acaca biene ela respuesta de la promesa
      .then((value) => {
        // assert
        expect(value).toBe('promise value');
        doneFn();
      });
    });
    // Esta es ptra forma de definilo de manera líneal
    it('Should return "promise value" from promise using async', async() => {
     const rta = await service.getPromiseValue();
     expect(rta).toBe('promise value');
    });
  });

  describe('Test for getObservableValue', () => {
    // AAA
    it('Should return "observable value" from observable', (doneFn) => {
      service.getObservableValue()
      //Acaca biene ela respuesta de del observable.
      .subscribe((value) => {
        // assert
        expect(value).toBe('observable value');
        doneFn();
      });
    });
  });
});
