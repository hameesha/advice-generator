import { Component } from '@angular/core';
import { AdviceService } from './advice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  advices:any = { "id": 36, "advice": "If you think nobody cares if you're alive, try missing a few payments."};

  constructor(private adviceService:AdviceService){}

  fetchAdvice(){
    this.advices = this.adviceService.fetchAdvice();
  }

}
