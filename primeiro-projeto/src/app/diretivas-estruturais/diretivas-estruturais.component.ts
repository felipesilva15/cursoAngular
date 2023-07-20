import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

  public nome: string = "Felipe";

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Felipe", idade: 19 },
    { nome: "José", idade: 59 },
    { nome: "Rafael", idade: 25 }
  ]

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition;
    }, 2000)
  }

  onClick() {
    this.conditionClick = !this.conditionClick;
  }

  public onClickAddList(): void {
    this.list.push({ nome: "Nay", idade: 35});
  }

  public onClickEventList(event: number): void {
    this.list.splice(event, 1);
  }
}
