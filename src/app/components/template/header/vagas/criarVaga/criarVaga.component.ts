import { Vaga } from './../../../../../models/vaga';
import { Router } from '@angular/router';
import { VagasServices } from './../vagas.services/vagas.service.ts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criarVaga',
  templateUrl: './criarVaga.component.html',
  styleUrls: ['./criarVaga.component.css']
})
export class CriarVagaComponent implements OnInit {

  vaga: Vaga = {
    descricao:'',
    id: 0,

  }

  constructor(private vagaService: VagasServices, private router: Router) { }

  ngOnInit() {
  }

  criarVaga():void{
    this.vagaService.criar(this.vaga).subscribe(() =>{
      this.vagaService.showMessage('Vaga Criada!')
      this.router.navigate(['/vagas/buscarVaga'])
    });
  }

  cancel(): void{
    this.router.navigate(['/vagas'])
  }

}
