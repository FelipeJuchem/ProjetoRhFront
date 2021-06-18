import { Tecnologia } from './../../../../../models/tecnologia';
import { VagaTecnologia } from './../../../../../models/vagaTecnologia';
import { ActivatedRoute, Router } from '@angular/router';
import { VagasServices } from './../vagas.services/vagas.service.ts.service';
import { Vaga } from './../../../../../models/vaga';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-alterarVaga',
  templateUrl: './alterarVaga.component.html',
  styleUrls: ['./alterarVaga.component.css']
})
export class AlterarVagaComponent implements OnInit {

  tecnologias!: Tecnologia[]

  tecnologiaSelecionada!: Tecnologia

  vagaTecnologia: VagaTecnologia = {vagaId : 0, tecnologiaId : 0}

  vaga: Vaga = {
    descricao: '',
    id: 0,
  }

  error = null;

  mostrar: boolean = false

  constructor(private vagaService: VagasServices,private router: Router, private route:ActivatedRoute,
    ) {
    }

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.vagaService.readTecnologia().subscribe(tecnologias =>{
      this.tecnologias = tecnologias;
    })
    this.vagaService.readById(id!).subscribe(vaga =>{
      this.vaga = vaga;
      console.log(vaga)
    })
  }

  salvar(): void{
    this.vagaService.atualizar(this.vaga).subscribe(()=> {
      this.vagaService.showMessage('Vaga alterada com sucesso!')
      this.router.navigate(['/vagas/buscarVaga'])
    })
  }

  cancel(): void{
    this.router.navigate(['/vagas/buscarVaga'])
  }

  mudarMostrar(): void {
    this.mostrar = ! this.mostrar;
  }

  addTecnologia():void{
    this.vagaService.addTecnologia(this.vagaTecnologia).subscribe(() =>{
      this.vagaService.showMessage('Tecnologia vinculada!')
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    });
  }

  onAtualizar(tecnologia: Tecnologia): void{
    this.tecnologiaSelecionada = tecnologia;
    this.vagaTecnologia.vagaId = this.vaga.id;
    this.vagaTecnologia.tecnologiaId = tecnologia.id!;
  }

  deletar(tecnologiaId:number): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.vagaService.deletarVagaTecnologia(id!, tecnologiaId)
      .subscribe
      (() => {setTimeout(() => {
        window.location.reload();
      }, 1500);
      this.vagaService.showMessage('Deletado com sucesso!')
      }
      , (response: any) => {
      alert(response.error);
      });

    }




}



  // addClasseNoHtml(): void{
  //   var html = this._elementRef.nativeElement.querySelector(`#nova-tecnologia`)
  //   html!.classList.add('invisivel');
  // }


