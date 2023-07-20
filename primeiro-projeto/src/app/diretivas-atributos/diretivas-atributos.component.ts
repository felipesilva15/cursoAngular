import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent {
  public valor: boolean = true;
  public height: string = "20px";
  public background: string = "red";

  public nome: string = "";
  public list: Array<{ nome: string }> = []

  public date: Date = new Date();

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor;
      this.height = this.height == "20px" ? "50px" : "20px";
      this.background = this.background == "red" ? "blue" : "red";
    }, 2000);
  }

  public salvar(): void {
    this.list.push({ nome: this.nome });
    this.nome = "";
  }
}
