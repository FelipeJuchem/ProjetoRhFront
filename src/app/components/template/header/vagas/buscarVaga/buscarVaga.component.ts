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

  constructor(private vagaServices: VagasServices, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.vagaServices.read().subscribe(vagas => {
      this.vagas = vagas
      console.log(vagas)
    })
  }

  deletar(id: number): void{
    this.vagaServices.deletar(id).subscribe(()=>{
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      this.vagaServices.showMessage('Deletado com sucesso!')
    })
  }






  // openDialog(id: number): void {
  //   const dialogRef = this.dialog.open(DeleteDialogComponent, {
  //     width: '250px',
  //     data: {id: id}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }



}
