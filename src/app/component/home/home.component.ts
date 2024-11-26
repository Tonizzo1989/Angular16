import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscribe: any;
  constructor() {}
  ngOnInit(): void {
    this.subscribe = interval(1000).subscribe((number) => {
      console.log(number);
    });
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
