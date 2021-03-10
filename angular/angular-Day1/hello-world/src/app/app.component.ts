import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-worldzzzz';

  clickHanlder($event) {
    console.log($event);
    console.log(this.title);
  }

}
