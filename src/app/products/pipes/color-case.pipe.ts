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
        return '0 - Red';
      case Color.black:
        return '1 - Black';
      case Color.blue:
        return '2 - Blue';
      case Color.green:
        return '3 - Green';
      default:
        return value;
    }
  }

}
