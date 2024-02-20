

import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {


  it('should return "my value" from the real service', () =>{
    const valueService =new ValueService;
    const masterService =new MasterService (valueService);
    expect (masterService.getValue()).toBe('my value');
  });

  it('should return "other value" from the fake objectt', () =>{
    const fake = {getVaue : () => 'fake from objet'}
    const masterService =new MasterService (fake as unknown as ValueService);
    expect (masterService.getValue()).toBe('fake from obje');
  });
  
  //Mock espiable.
  it('should call to getValue fron ValueService', () =>{
    const valeSerceSpy= jasmine.createSpyObj('ValueService', ['getValue']);
    valeSerceSpy.getValue.and.returnValue('fake value');
    const masterService = new MasterService(valeSerceSpy)
    expect (masterService.getValue()).toBe('fake value');
    expect (valeSerceSpy.getValue).toHaveBeenCalled();
    expect (valeSerceSpy.getValue).toHaveBeenCalledTimes(1);
  });


});

