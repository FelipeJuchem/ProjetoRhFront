import { MatDialog } from '@angular/material/dialog';
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

  constructor(private tecnologiaServices: TecnologiaServices, private router: Router, public dialog: MatDialog) { }

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


