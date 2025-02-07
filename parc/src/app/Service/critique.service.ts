import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from './data.service';
import { CritiqueInterface } from '../Interface/critique.interface';
import { MessageInterface } from '../Interface/message.interface';

@Injectable({
  providedIn: 'root',
})
export class CritiqueService{
  
  constructor(private dataService: DataService) {
    
  }
  
  public getCritiqueByIdAttraction(attraction_id : number) : Observable<CritiqueInterface[]> {
    const url = "http://127.0.0.1:5000/critique/" + attraction_id
    const data = this.dataService.getData(url);
    return data as Observable<CritiqueInterface[]>;
  }
  
  public getCrtiques() : Observable<CritiqueInterface[]>{
    const url = "http://127.0.0.1:5000/critique"
    const data = this.dataService.getData(url);
    return data as Observable<CritiqueInterface[]>
  }
  
  postCritique(critique: CritiqueInterface) {
    const url = "http://127.0.0.1:5000/critique";
    const data = this.dataService.postData(url, critique);
    return data as Observable<MessageInterface>;
  }
}