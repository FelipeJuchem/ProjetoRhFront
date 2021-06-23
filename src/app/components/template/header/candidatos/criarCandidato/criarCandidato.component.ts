import { Vaga } from './../../../../../models/vaga';
import { Router } from '@angular/router';
import { CandidatoServices } from './../candidatos.services/candidato.service';
import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/models/candidato';

@Component({
  selector: 'app-criarCandidato',
  templateUrl: './criarCandidato.component.html',
  styleUrls: ['./criarCandidato.component.css']
})
export class CriarCandidatoComponent implements OnInit {

  candidato: Candidato = {
    nome: '',
    sobrenome: '',
  };

  vagaSelecionada!: Vaga

  vagas!: Vaga[]

  constructor(private candidatoServices: CandidatoServices, private router: Router) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  criarCandidato():void{
    this.candidatoServices.criar(this.candidato).subscribe(() =>{
    this.candidatoServices.showMessage('Candidato Criado!')
    this.router.navigate(['/candidatos/buscarCandidato'])
    });
  }

  listarVagas(): void{
    this.candidatoServices.readVagas().subscribe(vagas => {
      this.vagas = vagas;
      console.log(this.vagas);
    });
  }

  cancel(): void{
    this.router.navigate(['/candidatos'])
  }

  onAtualizar(vaga: Vaga): void{
    this.vagaSelecionada = vaga;
    this.candidato.vagaId = this.vagaSelecionada.id;
  }


}
