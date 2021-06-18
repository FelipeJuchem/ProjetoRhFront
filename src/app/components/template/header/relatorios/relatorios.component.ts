import { VagasServices } from './../vagas/vagas.services/vagas.service.ts.service';
import { Vaga } from './../../../../models/vaga';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  vagas!: Vaga[]

  constructor(private vagaService: VagasServices) { }

    ngOnInit(): void {
      this.vagaService.read().subscribe(vagas => {
        this.vagas = vagas;
    })

  }
}
