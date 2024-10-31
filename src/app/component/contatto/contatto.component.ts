import { ProvaService } from './../../services/prova.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css'],
})
export class ContattoComponent implements OnInit {
  id: number = 0;
  person: any;

  constructor(
    private route: ActivatedRoute,
    private ProvaService: ProvaService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
      this.person = this.ProvaService.getPerson(this.id);
    });
  }
}
