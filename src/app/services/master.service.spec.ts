

import { TestBed } from '@angular/core/testing';
import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {
  let masterService: MasterService;
  let valueServiceSpy: jasmine.SpyObj<ValueService>;
  // O se puede crear un beforeEacah para que lo este dentro de el se ejecute antes de cada prueba
  beforeEach(() => {
    const spy = jasmine.createSpyObj('ValueService', ['getValue']);
    TestBed.configureTestingModule({
       providers: [ MasterService,
                  { provide: ValueService, useValue: spy }
                  ]
    });
    masterService = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
  });

  it('shoul be create', () =>{
    // Se debe instaciar el servicio para indicar que esta creado
    /* service = new ValueService(); */
    expect(masterService).toBeTruthy();
  });

/*   it('should return "my value" from the real service', () =>{
    const valueService =new ValueService;
    const masterService =new MasterService (valueService);
    expect (masterService.getValue()).toBe('my value');
  });

  it('should return "other value" from the fake objectt', () =>{
    const fake = {getVaue : () => 'fake from objet'}
    const masterService =new MasterService (fake as unknown as ValueService);
    expect (masterService.getValue()).toBe('fake from obje');
  }); */

  //Mock espiable.
  it('should call to getValue fron ValueService', () =>{
    const valeSerceSpy= jasmine.createSpyObj('ValueService', ['getValue']);
    valeSerceSpy.getValue.and.returnValue('fake value');
    /* const masterService = new MasterService(valeSerceSpy) */
    expect (masterService.getValue()).toBe('fake value');
    expect (valeSerceSpy.getValue).toHaveBeenCalled();
    expect (valeSerceSpy.getValue).toHaveBeenCalledTimes(1);
  });


});

