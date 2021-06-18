import { MatDialog } from '@angular/material/dialog';
import { VagasServices } from './../../vagas/vagas.services/vagas.service.ts.service';
import { Vaga } from './../../../../../models/vaga';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CandidatoServices } from './../candidatos.services/candidato.service';
import { Candidato } from './../../../../../models/candidato';
import { Component, OnInit } from '@angular/core';
import { DeleteCandidatoDialogComponent } from './deleteCandidatoDialog/deleteCandidatoDialog.component';

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

  constructor(private candidatoServices: CandidatoServices, private router: Router, private vagasServices: VagasServices,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.candidatoServices.read().subscribe(candidatos => {
      this.candidatos = candidatos;
      console.log(candidatos);
    })
  }

  readVaga(id: number ):void {
    this.vagasServices.readByIdNumber(id).subscribe(vaga =>{
      this.vaga = vaga;
    })
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteCandidatoDialogComponent, {
      width: '250px',
      data: {id: id}
 });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
   });
 }

}
