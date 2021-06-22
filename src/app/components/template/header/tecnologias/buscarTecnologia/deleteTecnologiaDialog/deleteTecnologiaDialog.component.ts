import { TecnologiaServices } from './../../tecnologias.services/tecnologia.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deleteTecnologiaDialog',
  templateUrl: './deleteTecnologiaDialog.component.html',
  styleUrls: ['./deleteTecnologiaDialog.component.css']
})
export class DeleteTecnologiaDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteTecnologiaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: number}, private tecnologiaServices: TecnologiaServices
  ) { }

  error = null;

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deletar(): void{
    this.dialogRef.close();
    this.tecnologiaServices.deletar(this.data.id).subscribe(()=>{
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      this.tecnologiaServices.showMessage('Deletado com sucesso!')
    },(response: any) => {
      alert(response.error);
      this.error = response.error;
      })
  }
}
