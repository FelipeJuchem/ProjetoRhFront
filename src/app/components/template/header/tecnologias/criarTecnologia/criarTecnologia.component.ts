import { Router } from '@angular/router';
import { TecnologiaServices } from './../tecnologias.services/tecnologia.service';
import { Component, OnInit } from '@angular/core';
import { Tecnologia } from 'src/app/models/tecnologia';

@Component({
  selector: 'app-criarTecnologia',
  templateUrl: './criarTecnologia.component.html',
  styleUrls: ['./criarTecnologia.component.css']
})
export class CriarTecnologiaComponent implements OnInit {

  tecnologia: Tecnologia = {
    descricao:'',
    peso:0
  }


  constructor(private tecnologiaService: TecnologiaServices, private router: Router ) { }

  ngOnInit() {
  }

  criarTecnologia():void{
  this.tecnologiaService.criar(this.tecnologia).subscribe(() =>{
  this.tecnologiaService.showMessage('Tecnologia Criada!')
  this.router.navigate(['/tecnologias'])
  });
  }

  cancel(): void{
    this.router.navigate(['/tecnologias'])
  }

}
