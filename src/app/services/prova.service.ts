import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProvaService {
  people = [
    {
      name: 'Paul',
      surname: 'Badwihite',
      age: '22',
      isOnline: false,
      color: 'green',
    },
    {
      name: 'Chris',
      surname: 'Lion',
      age: '32',
      isOnline: true,
      color: 'blue',
    },
    {
      name: 'Maggie',
      surname: 'Woolrich',
      age: '28',
      isOnline: false,
      color: 'red',
    },
    {
      name: 'Sara',
      surname: 'Castellani',
      age: '35',
      isOnline: true,
      color: 'black',
    },
    {
      name: 'Roberto',
      surname: 'Casadei',
      age: '29',
      isOnline: false,
      color: 'skyblue',
    },
  ];

  constructor() {}

  getPeople() {
    return this.people;
  }

  getPerson(index: number) {
    return this.people[index];
  }
}
