import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { DataService } from './data.service';
import { CritiqueInterface } from '../Interface/critique.interface';
import { MessageInterface } from '../Interface/message.interface';

@Injectable({
  providedIn: 'root',
})
export class CritiqueService{
  
  constructor(private dataService: DataService) {}

  public getCritiqueByIdAttraction(attraction_id: number): Observable<CritiqueInterface[]> {
    const url = `http://127.0.0.1:5000/critique/${attraction_id}`;
    return this.dataService.getData(url).pipe(
      map((data) => (data ? data : []))
    ) as Observable<CritiqueInterface[]>;
  }

  public getCrtiques(): Observable<CritiqueInterface[]> {
    const url = `http://127.0.0.1:5000/critique`;
    return this.dataService.getData(url).pipe(
      map((data) => (data ? data : []))
    ) as Observable<CritiqueInterface[]>;
  }
  
  public postCritique(critique: CritiqueInterface): Observable<MessageInterface> {
    const url = `http://127.0.0.1:5000/critique`;
    return this.dataService.postData(url, critique) as Observable<MessageInterface>;
  }
}
