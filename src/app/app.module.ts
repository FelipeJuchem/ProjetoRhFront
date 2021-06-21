import { DeleteCandidatoDialogComponent } from './components/template/header/candidatos/buscarCandidato/deleteCandidatoDialog/deleteCandidatoDialog.component';
import { DeleteTecnologiaDialogComponent } from './components/template/header/tecnologias/buscarTecnologia/deleteTecnologiaDialog/deleteTecnologiaDialog.component';
import { DeleteDialogComponent } from './components/template/header/vagas/buscarVaga/deleteDialog/deleteDialog.component';
import { RelatoriosComponent } from './components/template/header/relatorios/relatorios.component';
import { AlterarTecnologiaComponent } from './components/template/header/tecnologias/alterarTecnologia/alterarTecnologia.component';
import { BuscarTecnologiaComponent } from './components/template/header/tecnologias/buscarTecnologia/buscarTecnologia.component';
import { BuscarCandidatoComponent } from './components/template/header/candidatos/buscarCandidato/buscarCandidato.component';
import { AlterarCandidatoComponent } from './components/template/header/candidatos/alterarCandidato/alterarCandidato.component';
import { AlterarVagaComponent } from './components/template/header/vagas/alterarVaga/alterarVaga.component';
import { BuscarVagaComponent } from './components/template/header/vagas/buscarVaga/buscarVaga.component';
import { CriarVagaComponent } from './components/template/header/vagas/criarVaga/criarVaga.component';
import { HttpClientModule } from '@angular/common/http';
import { VagasComponent } from './components/template/header/vagas/vagas.component';
import { TecnologiasComponent } from './components/template/header/tecnologias/tecnologias.component';
import { CandidatosComponent } from './components/template/header/candidatos/candidatos.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/template/home/home.component';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CriarCandidatoComponent } from './components/template/header/candidatos/criarCandidato/criarCandidato.component';
import { CriarTecnologiaComponent } from './components/template/header/tecnologias/criarTecnologia/criarTecnologia.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { RelatorioGeradoComponent } from './components/template/header/relatorios/relatorioGerado/relatorioGerado.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CandidatosComponent,
    TecnologiasComponent,
    VagasComponent,
    CriarVagaComponent,
    CriarCandidatoComponent,
    CriarTecnologiaComponent,
    BuscarVagaComponent,
    AlterarVagaComponent,
    AlterarCandidatoComponent,
    BuscarCandidatoComponent,
    BuscarTecnologiaComponent,
    CriarTecnologiaComponent,
    AlterarTecnologiaComponent,
    RelatoriosComponent,
    DeleteDialogComponent,
    DeleteTecnologiaDialogComponent,
    DeleteCandidatoDialogComponent,
    RelatorioGeradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    CommonModule,
    MatTableModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDialogModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
