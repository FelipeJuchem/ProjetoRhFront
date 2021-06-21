import { DeleteDialogComponent } from './deleteDialog/deleteDialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Vaga } from './../../../../../models/vaga';
import { VagasServices } from './../vagas.services/vagas.service.ts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscarVaga',
  templateUrl: './buscarVaga.component.html',
  styleUrls: ['./buscarVaga.component.css']
})
export class BuscarVagaComponent implements OnInit {

  vagas!: Vaga[]

  error = null

  constructor(private vagaServices: VagasServices, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.vagaServices.read().subscribe(vagas => {
      this.vagas = vagas
      console.log(vagas)
    },(response: any) => {
      alert(response.error);
      this.error = response.error;
      })
  }

  openDialog(id: number): void {
     const dialogRef = this.dialog.open(DeleteDialogComponent, {
       width: '250px',
       data: {id: id}
  });

     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
    });
  }



}
