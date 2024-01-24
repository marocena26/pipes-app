import { Pipe, type PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero';

@Pipe({
  name: 'colorCase',
  standalone: true,
})
export class ColorCasePipe implements PipeTransform {

  transform(value: Color): string {
    switch (value) {
      case Color.red:
        return '0 - Rojo';
      case Color.black:
        return '1 - Negro';
      case Color.blue:
        return '2 - Azul';
      case Color.green:
        return '3 - Verde';
      default:
        return value;
    }
  }

}
