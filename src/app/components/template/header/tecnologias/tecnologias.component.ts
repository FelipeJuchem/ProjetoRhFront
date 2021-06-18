import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegarParaCriarTecnologia(): void {
    this.router.navigate(['/tecnologias/criarTecnologia'])
  }

  navegarParaBuscarTecnologia(): void {
    this.router.navigate(['/tecnologias/buscarTecnologia'])
  }
}
