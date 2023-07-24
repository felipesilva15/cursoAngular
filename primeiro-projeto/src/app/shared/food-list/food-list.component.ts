import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit{
  public foodList: Array<FoodList> | any = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      (res) => {
        this.foodList = res
      },
      (err) => {
        console.error(err);
      }
    );

    this.foodListService.emitEvent.subscribe(
      (res) => {
        alert(`Você adicionou o item => ${res.name}`);
        return this.foodList.push(res);
      }
    );
  }

  public foodListDelete(id: number): void {
    this.foodListService.foodListDelete(id).subscribe(
      (res) => {
        this.foodList = this.foodList.filter(
          (item: FoodList) => {
            return id !== item.id
          }
        )
      },
      (err) => {
        console.error(err);
      }
    );
  }

  public foodListEdit(item: FoodList): void {
    this.foodListService.foodListEdit(item.id ,item).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
