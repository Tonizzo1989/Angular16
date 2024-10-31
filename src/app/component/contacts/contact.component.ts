import { ActivatedRoute } from '@angular/router';
import { ProvaService } from './../../services/prova.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  person: any;

  constructor(private ProvaService: ProvaService) {}

  ngOnInit(): void {
    this.person = this.ProvaService.getPeople();
  }
}
