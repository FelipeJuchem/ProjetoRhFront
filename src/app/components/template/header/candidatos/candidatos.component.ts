import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  navegarParaCriarCandidato(): void {
    this.router.navigate(['/candidatos/criarCandidato'])
  }

  navegarParaBuscarCandidato(): void {
    this.router.navigate(['/candidatos/buscarCandidato'])
  }


}
