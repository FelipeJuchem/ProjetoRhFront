import { VagasServices } from './../../vagas.services/vagas.service.ts.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deleteDialog',
  templateUrl: './deleteDialog.component.html',
  styleUrls: ['./deleteDialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: number}, private vagaServices: VagasServices
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deletar(): void{
    this.dialogRef.close();
    this.vagaServices.deletar(this.data.id).subscribe(()=>{
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      this.vagaServices.showMessage('Deletado com sucesso!')
    })
  }

}
