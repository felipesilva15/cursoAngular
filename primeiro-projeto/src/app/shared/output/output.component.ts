import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  @Output() public enviarDados = new EventEmitter();
  
  public list: Array<{nome: string, idade: number}> = [
    {nome: "felipe", idade: 19},
    {nome: "Teste", idade: 20}
  ];

  public getDados(index: number): void {
    this.enviarDados.emit(this.list[index]);
  }
}
