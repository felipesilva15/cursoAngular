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
    <!-- <app-new-component></app-new-component> -->
    <!-- <app-input [contador]="addValue" [item]="item"></app-input>
    <button (click)="add()">Add</button> -->
    <ng-template [ngIf]="getDados">
      <h1>{{ getDados.nome }} - {{ getDados.idade }}</h1>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>
  `
})
export class AppComponent implements OnInit {
  public addValue: number = 20;
  public item: {nome: string, idade: number} = {nome: 'Felipe', idade: 19};
  public getDados: {nome: string, idade: number} | undefined;

  constructor() { }

  ngOnInit(): void {

  }

  public add() {
    this.addValue += 1;
  }

  public setDados(data: {nome: string, idade: number}): void {
    this.getDados = data;
  }
}
