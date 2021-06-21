import { CandidatoTecnologia } from './../../../../../models/candidatoTecnologia';
import { Vaga } from './../../../../../models/vaga';
import { Router } from '@angular/router';
import { Candidato } from './../../../../../models/candidato';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CandidatoServices {

  Url = "http://localhost:5000/api/candidatos"

  idUrl= "http://localhost:5000/api/candidatos/"

  vagasUrl = "http://localhost:5000/api/vagas"

  vagaIdUrl = "http://localhost:5000/api/vagas/"

  candidatoTecnologiaUrl = "http://localhost:5000/api/candidatoTecnologia"

  candidatoTecnologiaIdUrl = "http://localhost:5000/api/candidatoTecnologia/"

  vagaComTecnologiaUrl = "http://localhost:5000/api/vagas/getTeste/"

  candidatoComTecnologia = "http://localhost:5000/api/candidatos/candidatoETecnologia/"



constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

criar(candidato: Candidato): Observable<Candidato> {
  return this.http.post<Candidato>(this.Url, candidato)
}

showMessage(msg: string): void {
  this.snackBar.open(msg, 'X', {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  })
}

readVagas(): Observable<Vaga[]> {
  return this.http.get<Vaga[]>(this.vagasUrl);
}

read(): Observable<Candidato[]> {
  return this.http.get<Candidato[]>(this.Url);
}

readById(id: string): Observable<Candidato>{
  return this.http.get<Candidato>(this.candidatoComTecnologia+id);
}

atualizar(candidato: Candidato): Observable<Candidato>{
  return this.http.put<Candidato>(this.Url, candidato);
}

salvarCandidatoTecnologia(candidatoTecnologia: CandidatoTecnologia): Observable<CandidatoTecnologia>{
  return this.http.post<CandidatoTecnologia>(this.candidatoTecnologiaUrl, candidatoTecnologia);
}

deletar(id: number): Observable<Candidato> {
  return this.http.delete<Candidato>(this.idUrl+id);
}

deletarCandidatoTecnologia(vagaId: string, tecnologiaId:number): Observable<any>{
  const resultado = this.http.delete(`${this.candidatoTecnologiaIdUrl}${vagaId}/${tecnologiaId}`);
  return resultado;
}

readVagaById(id : number): Observable<Vaga>{
  return this.http.get<Vaga>(this.vagaComTecnologiaUrl+id);
}

private handleError(error: HttpErrorResponse){
  console.log(error.error);
  return throwError(error);
}

}
