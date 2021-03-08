import { Component } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-world';

  constructor(public myService: MyService) {
    this.title = myService.mySharedData;
  }

  activateSharedLogic() {
    this.myService.mySharedLogic();
  }
}
