import { VagaTecnologia } from './../../../../../models/vagaTecnologia';
import { Tecnologia } from './../../../../../models/tecnologia';
import { Vaga } from './../../../../../models/vaga';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VagasServices {



  resultado: boolean = false;

  vagaComTecnologiasECandidatosSorteadosUrl = "http://localhost:5000/api/Vagas/GetVagasComCandidatosSorteados/"
  baseUrl = "http://localhost:5000/api/vagas"
  idUrl = "http://localhost:5000/api/vagas/"
  tecnologiaAddUrl = "http://localhost:5000/api/vagaTecnologia"
  tecnologiaUrL = "http://localhost:5000/api/tecnologia"
  barra = "/"
  vagaTecnologiaIdUrl = "http://localhost:5000/api/vagaTecnologia/"

constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

criar(vaga: Vaga): Observable<Vaga> {
  return this.http.post<Vaga>(this.baseUrl, vaga)
}

addTecnologia(tecnologia: VagaTecnologia): Observable<Tecnologia>{
  return this.http.post<Tecnologia>(this.tecnologiaAddUrl, tecnologia);
}

showMessage(msg: string): void {
  this.snackBar.open(msg, 'X', {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  })
}

readTecnologia(): Observable<Tecnologia[]>{
  return this.http.get<Tecnologia[]>(this.tecnologiaUrL);
}

read(): Observable<Vaga[]> {
  return this.http.get<Vaga[]>(this.baseUrl)
}

readById(id: string): Observable<Vaga>{
  return this.http.get<Vaga>(this.idUrl+id)
}

readByIdComInclude(id: string): Observable<Vaga>{
  return this.http.get<Vaga>(`${this.vagaComTecnologiasECandidatosSorteadosUrl}${id}`)
}

readByIdNumber(id: number): Observable<Vaga>{
  return this.http.get<Vaga>(this.idUrl+id)
}
atualizar(vaga: Vaga): Observable<Vaga>{
  return this.http.put<Vaga>(this.baseUrl, vaga)
}

deletar(id: number): Observable<any> {
  const resultado = this.http.delete(this.idUrl+id);
  console.log(resultado);
  return resultado;
}

deletarVagaTecnologia(vagaId: string, tecnologiaId:number):  Observable<any>{
   return this.http.delete(this.vagaTecnologiaIdUrl+vagaId+this.barra+tecnologiaId)
   .pipe(
     catchError(this.handleError))
}

private handleError(error: HttpErrorResponse){
  console.log(error.error);
  return throwError(error);
}

}


