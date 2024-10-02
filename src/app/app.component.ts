import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng16';
  isVisible = true;

  people = [
    {
      name: 'Paul',
      surname: 'Badwihite',
      age: '22',
      isOnline: false,
    },
    {
      name: 'Chris',
      surname: 'Lion',
      age: '32',
      isOnline: true,
    },
    {
      name: 'Maggie',
      surname: 'Woolrich',
      age: '28',
      isOnline: false,
    },
    {
      name: 'Sara',
      surname: 'Castellani',
      age: '35',
      isOnline: true,
    },
    {
      name: 'Roberto',
      surname: 'Casadei',
      age: '29',
      isOnline: false,
    },
  ];

  
  string = "minnie";

  onInput(event: Event) {
    this.title = (<HTMLInputElement>event.target).value;
  }

  onClick(event: Event) {}
}
