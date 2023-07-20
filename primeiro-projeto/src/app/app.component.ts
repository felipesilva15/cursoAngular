import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-data-binding></app-data-binding> -->
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
    <!-- <app-diretivas-atributos>
      <h1>Aulas de diretiva atributos</h1>
      <hr>
    </app-diretivas-atributos>
    <app-diretivas-atributos>
      <h1>Felipe Silva</h1>
      <hr>
    </app-diretivas-atributos>
    <router-outlet></router-outlet> -->
    <!-- <app-diretivas-atributos></app-diretivas-atributos> -->
    <app-new-component></app-new-component>
  `
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }


}
