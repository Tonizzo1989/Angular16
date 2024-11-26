import { interval, Observable } from 'rxjs';
import { ProvaService } from './services/prova.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng16';

  ngOnInit(): void {}
}
