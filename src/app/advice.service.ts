import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class AdviceService{

  constructor(private http:HttpClient){}

  advices:any = { "id": 36, "advice": "If you think nobody cares if you're alive, try missing a few payments."};

  fetchAdvice():any{
    this.http.get<any>('https://api.adviceslip.com/advice').subscribe({
     
      next: data => {
        this.advices = data.slip;
      },
      error: error => {
          this.advices = { "id": 36, "advice": "If you think nobody cares if you're alive, try missing a few payments."};
          console.error('There was an error!', error);
      }
      
    })
    return this.advices;
  }

}