import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Manager';
  isDisabled = false;

  user: User = {
    firstName: 'Thomas',
    lastName: 'Chan',
    emailAddress: 'tchan@somewhere.com'
  }

  users: User[] = [{
    firstName: 'Thomas',
    lastName: 'Chan',
    emailAddress: 'tchan@somewhere.com'
  },{
    firstName: 'Thomas2',
    lastName:'Chan2',
    emailAddress: 'tchan2@somewhere.com'
  }
  ];

  onSave() {
    console.log(this.user);
  }
}
