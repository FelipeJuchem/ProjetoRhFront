import { Vaga } from './../../../../../models/vaga';
import { ActivatedRoute } from '@angular/router';
import { VagasServices } from './../../vagas/vagas.services/vagas.service.ts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorioGerado',
  templateUrl: './relatorioGerado.component.html',
  styleUrls: ['./relatorioGerado.component.css']
})
export class RelatorioGeradoComponent implements OnInit {

  vaga!: Vaga

  constructor(private vagaServices: VagasServices, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.vagaServices.readByIdComInclude(id!).subscribe(vaga => {
      this.vaga = vaga;
      console.log(vaga);
    })
  }

}
