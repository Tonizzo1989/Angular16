import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit {
  isDisabled = true;

  constructor() {
    console.log('costruttore');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
