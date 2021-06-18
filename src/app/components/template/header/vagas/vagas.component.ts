import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegarParaCriarVagas(): void {
    this.router.navigate(['/vagas/criarVaga'])
  }

  navegarParaBuscarVaga(): void {
    this.router.navigate(['/vagas/buscarVaga'])
  }


}
