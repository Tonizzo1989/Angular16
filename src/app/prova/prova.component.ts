import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit {
  @Output() sendDataEvent = new EventEmitter<string>();

  name = 'Pippo';

  constructor() {}

  ngOnInit(): void {}

  sendData() {
    this.sendDataEvent.emit(this.name);
  }
}
