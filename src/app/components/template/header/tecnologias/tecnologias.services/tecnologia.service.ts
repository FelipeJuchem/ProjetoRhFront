import { Tecnologia } from './../../../../../models/tecnologia';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaServices {

  Url = "http://localhost:5000/api/tecnologia"
  idUrl = "http://localhost:5000/api/tecnologia/"

constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

criar(tecnologia: Tecnologia): Observable<Tecnologia> {
  return this.http.post<Tecnologia>(this.Url, tecnologia)
}

read(): Observable<Tecnologia[]> {
  return this.http.get<Tecnologia[]>(this.Url)
}

deletar(id: number): Observable<any> {
  const resultado = this.http.delete(this.idUrl+id);
  console.log(resultado);
  return resultado;
}

readById(id: string): Observable<Tecnologia>{
  return this.http.get<Tecnologia>(this.idUrl+id)
}

atualizar(vaga: Tecnologia): Observable<Tecnologia>{
  return this.http.put<Tecnologia>(this.Url, vaga)
}

showMessage(msg: string): void {
  this.snackBar.open(msg, 'X', {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  })
}

private handleError(error: HttpErrorResponse){
  console.log(error.error);
  return throwError(error);
}

}
