import { Router } from '@angular/router';
import { TecnologiaServices } from './../tecnologias.services/tecnologia.service';
import { Tecnologia } from './../../../../../models/tecnologia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscarTecnologia',
  templateUrl: './buscarTecnologia.component.html',
  styleUrls: ['./buscarTecnologia.component.css']
})
export class BuscarTecnologiaComponent implements OnInit {

  tecnologias!: Tecnologia[]

  constructor(private tecnologiaServices: TecnologiaServices, private router: Router) { }

  ngOnInit(): void {
    this.tecnologiaServices.read().subscribe(tecnologias => {
      this.tecnologias = tecnologias
      console.log(tecnologias)
    })
  }

  deletar(id: number): void{
    this.tecnologiaServices.deletar(id).subscribe(()=>{
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      this.tecnologiaServices.showMessage('Deletado com sucesso!')
    })
  }


}


