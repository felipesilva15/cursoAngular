import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  public emitEvent = new EventEmitter();
  public baseUrl: string = "http://localhost:3000";
  public list: Array<String> = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  public foodList(): Observable<FoodList[]> {
    return this.http.get<FoodList[]>(`${this.baseUrl}/list-food`, this.httpOptions)
                    .pipe(
                      res => res,
                      err => err
                    );
  }

  public foodListAdd(food: string): Observable<FoodList> {
    return this.http.post<FoodList>(`${this.baseUrl}/list-food`, { name: food})
                    .pipe(
                      res => res,
                      err => err
                    );
  }

  public foodListEdit(id: number, item: FoodList): Observable<FoodList> {
    return this.http.put<FoodList>(`${this.baseUrl}/list-food/${id}`, item)
                    .pipe(
                      res => res,
                      err => err
                    );
  }

  public foodListDelete(id: number): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.baseUrl}/list-food/${id}`)
                    .pipe(
                      res => res,
                      err => err
                    );
  }

  public foodListAlert(value: FoodList): void{
    return this.emitEvent.emit(value);
  }
}
