import { VagasServices } from './../../vagas/vagas.services/vagas.service.ts.service';
import { Vaga } from './../../../../../models/vaga';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CandidatoServices } from './../candidatos.services/candidato.service';
import { Candidato } from './../../../../../models/candidato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscarCandidato',
  templateUrl: './buscarCandidato.component.html',
  styleUrls: ['./buscarCandidato.component.css']
})
export class BuscarCandidatoComponent implements OnInit {

  candidatos!: Candidato[]

  vaga: Vaga = {
    id: 0,
    descricao: ''
  }

  constructor(private candidatoServices: CandidatoServices, private router: Router, private vagasServices: VagasServices) { }

  ngOnInit(): void {
    this.candidatoServices.read().subscribe(candidatos => {
      this.candidatos = candidatos;
      console.log(candidatos);
    })
  }

  deletar(id: number): void{
    this.candidatoServices.deletar(id).subscribe(()=>{
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      this.candidatoServices.showMessage('Deletado com sucesso!')
    })
  }

  readVaga(id: number ):void {
    this.vagasServices.readByIdNumber(id).subscribe(vaga =>{
      this.vaga = vaga;
    })

  }

}
