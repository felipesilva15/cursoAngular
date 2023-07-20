import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  public nome: string = "Felipe";
  public idade: number = 19; 
  public checkedDisabled: boolean = true;
  public imgSrc: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJ1dS3ewspkje8phWlOfYRAafw-ZwOxLv4xeA6AyueC2Qj2bNpofB1NyepK0WtFqQZE4&usqp=CAU";
  public imgTitle: string = "Angular icon";

  public position: { x: number, y: number } = { x: 0, y: 0 };

  public alertaInfo(event: MouseEvent): void {
    console.log(event);
  }

  public mouseMoveTest(event: MouseEvent): void {
    this.position.x = event.offsetX;
    this.position.y = event.offsetY;
  }
}
