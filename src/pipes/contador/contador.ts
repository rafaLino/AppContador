import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ContadorPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'contador',
})
export class ContadorPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(num: number, ...args) {
    if(num <= 9){
      return `0${num.toString()}`;
    }else{
      return num.toString();
    }
  }
}
