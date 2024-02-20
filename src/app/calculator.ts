export class Calculator
{
  //Método que recibe doas varibles y multiplica
  multiply(a:number, b:number){
    return a*b;
  }

    //Método que recibe doas varibles y divide
    divide(a:number, b:number){
      if(b === 0){
        return null;
      }
      return a/b;
    }
}
