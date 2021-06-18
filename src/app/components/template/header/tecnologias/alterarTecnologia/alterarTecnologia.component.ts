import { Router, ActivatedRoute } from '@angular/router';
import { TecnologiaServices } from './../tecnologias.services/tecnologia.service';
import { Tecnologia } from './../../../../../models/tecnologia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alterarTecnologia',
  templateUrl: './alterarTecnologia.component.html',
  styleUrls: ['./alterarTecnologia.component.css']
})
export class AlterarTecnologiaComponent implements OnInit {

  tecnologia!: Tecnologia

  constructor(private tecnologiaService: TecnologiaServices,private router: Router, private route:ActivatedRoute) {}

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.tecnologiaService.readById(id!).subscribe(tecnologia =>{
      this.tecnologia = tecnologia;
    })
  }

  salvar(): void{
    this.tecnologiaService.atualizar(this.tecnologia).subscribe(()=> {
      this.tecnologiaService.showMessage('Vaga alterada com sucesso!')
      this.router.navigate(['/tecnologias/buscarTecnologia'])
    })
  }

  cancel(): void{
    this.router.navigate(['/tecnologias/buscarTecnologia'])
  }

}
