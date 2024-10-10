import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ng16';

  @ViewChild('inputSaluti') inputSaluti!: ElementRef;

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

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.inputSaluti);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.inputSaluti);
  }

  onClick() {
    console.log(this.inputSaluti);
  }
}
