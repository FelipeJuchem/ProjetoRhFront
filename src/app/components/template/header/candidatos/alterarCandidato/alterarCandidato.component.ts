import { CandidatoTecnologia } from './../../../../../models/candidatoTecnologia';
import { Tecnologia } from './../../../../../models/tecnologia';
import { Vaga } from './../../../../../models/vaga';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatoServices } from './../candidatos.services/candidato.service';
import { Candidato } from './../../../../../models/candidato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alterarCandidato',
  templateUrl: './alterarCandidato.component.html',
  styleUrls: ['./alterarCandidato.component.css']
})
export class AlterarCandidatoComponent implements OnInit {

  candidato: Candidato = {
    nome: "",
    sobrenome: "",
    idade: 0,
    cpf: 0,
    vagaId: 0
  }

  candidatoTecnologia: CandidatoTecnologia = {candidatoId: 0, tecnologiaId:0}

  tecnologiaSelecionada: Tecnologia = {descricao: ''}

  vagas!: Vaga[]

  vagaComTecnologia!: Vaga

  vaga!: Vaga

  mostrar: boolean = false

  constructor(private candidatoService: CandidatoServices,private router: Router, private route:ActivatedRoute) {}

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.candidatoService.readById(id!).subscribe(candidato =>{
      this.candidato = candidato;
      this.listarTecnologiasDaVaga(candidato.vagaId!);
    })
    this.listarVagas();
  }



  addTecnologia(): void{
    this.candidatoTecnologia.candidatoId = this.candidato.id!;
    this.candidatoTecnologia.tecnologiaId = this.tecnologiaSelecionada.id!;
    this.candidatoService.salvarCandidatoTecnologia(this.candidatoTecnologia).subscribe(() =>{
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      this.candidatoService.showMessage('Tecnologia adicionada com sucesso!');
    });
  }

  salvar(): void{
    this.candidatoService.atualizar(this.candidato).subscribe(()=> {
      this.candidatoService.showMessage('Vaga alterada com sucesso!')
      this.router.navigate(['/candidatos/buscarCandidato'])
    })
  }

  listarVagas(): void{
    this.candidatoService.readVagas().subscribe(vagas => {
      this.vagas = vagas;
      console.log(this.vagas);
    });
  }

  listarTecnologiasDaVaga(id: number): void{
    this.candidatoService.readById
    this.candidatoService.readVagaById(id).subscribe(vaga => {
      this.vaga = vaga;
    })
  }

  cancel(): void{
    this.router.navigate(['/candidatos/buscarCandidato'])
  }

  onAtualizar(tecnologia: Tecnologia): void{
    this.tecnologiaSelecionada = tecnologia;
  }

  mudarMostrar(): void {
    this.mostrar = ! this.mostrar;
  }

  deletar(tecnologiaId:number): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.candidatoService.deletarCandidatoTecnologia(id!, tecnologiaId).subscribe(()=> {
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      this.candidatoService.showMessage('Deletado com sucesso');
    })
  }

}
