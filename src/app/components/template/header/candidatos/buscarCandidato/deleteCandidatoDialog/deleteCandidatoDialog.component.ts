import { CandidatoServices } from './../../candidatos.services/candidato.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deleteCandidatoDialog',
  templateUrl: './deleteCandidatoDialog.component.html',
  styleUrls: ['./deleteCandidatoDialog.component.css']
})
export class DeleteCandidatoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteCandidatoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: number}, private candidatosServices: CandidatoServices
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deletar(): void{
    this.dialogRef.close();
    this.candidatosServices.deletar(this.data.id).subscribe(()=>{
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      this.candidatosServices.showMessage('Deletado com sucesso!')
    })
  }

}
