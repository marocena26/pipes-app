import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {

  public nameLower: string = 'expression';
  public nameUpper: string = 'EXPRESSION';
  public fullName: string = 'eXPre sSIoN';

  public customDate: Date = new Date();

}
