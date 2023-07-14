import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponent()">Destruir componente</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  public valor: number = 1;
  public destruir: boolean = true;

  constructor() { }

 public destruirComponent(): void {
    this.destruir = false;
 }
}
