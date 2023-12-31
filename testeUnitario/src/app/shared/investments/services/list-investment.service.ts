import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Investments } from '../model/investments';

@Injectable({
  providedIn: 'root'
})
export class ListInvestmentService {
  private url: string = 'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  constructor(private http: HttpClient) { }

  public list(): Observable<Investments[]> {
    return this.http.get<Investments[]>(this.url).pipe(
      map(
        res => res
      )
    );
  }
}
