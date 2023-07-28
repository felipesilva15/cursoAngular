import { Investments } from './../model/investments';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public investments: Array<Investments> = [
    { name: 'Itaú', value: 100 },
    { name: 'Banco do Brasil', value: 100 },
    { name: 'Nubank', value: 100 },
    { name: 'Inter', value: 100 },
  ];
}
