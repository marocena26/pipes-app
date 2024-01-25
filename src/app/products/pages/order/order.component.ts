import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: true,
      color: Color.black,
    },
    {
      name: 'Black Canary',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Wonder Woman',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'She Hulk',
      canFly: false,
      color: Color.green,
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}
