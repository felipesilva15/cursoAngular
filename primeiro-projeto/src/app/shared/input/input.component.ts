import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() public contador: number = 0;
  @Input() public item: {nome: string, idade: number} = {nome: '', idade: 0};
}
