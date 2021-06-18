import { RelatoriosComponent } from './components/template/header/relatorios/relatorios.component';
import { AlterarTecnologiaComponent } from './components/template/header/tecnologias/alterarTecnologia/alterarTecnologia.component';
import { AlterarCandidatoComponent } from './components/template/header/candidatos/alterarCandidato/alterarCandidato.component';
import { AlterarVagaComponent } from './components/template/header/vagas/alterarVaga/alterarVaga.component';
import { BuscarCandidatoComponent } from './components/template/header/candidatos/buscarCandidato/buscarCandidato.component';
import { BuscarTecnologiaComponent } from './components/template/header/tecnologias/buscarTecnologia/buscarTecnologia.component';
import { BuscarVagaComponent } from './components/template/header/vagas/buscarVaga/buscarVaga.component';
import { CriarVagaComponent } from './components/template/header/vagas/criarVaga/criarVaga.component';
import { HomeComponent } from './components/template/home/home.component';
import { VagasComponent } from './components/template/header/vagas/vagas.component';
import { CandidatosComponent } from './components/template/header/candidatos/candidatos.component';
import { TecnologiasComponent } from './components/template/header/tecnologias/tecnologias.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarTecnologiaComponent } from './components/template/header/tecnologias/criarTecnologia/criarTecnologia.component';
import { CriarCandidatoComponent } from './components/template/header/candidatos/criarCandidato/criarCandidato.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },{
    path:"vagas",
    component: VagasComponent
  },{
    path:"tecnologias",
    component: TecnologiasComponent
  },{
    path:"candidatos",
    component: CandidatosComponent
  },{
    path:"vagas/criarVaga",
    component: CriarVagaComponent
  },{
    path:"vagas/buscarVaga",
    component: BuscarVagaComponent
  },{
    path:"tecnologias/criarTecnologia",
    component: CriarTecnologiaComponent
  },{
    path:"tecnologias/buscarTecnologia",
    component: BuscarTecnologiaComponent
  },{
    path:"candidatos/criarCandidato",
    component: CriarCandidatoComponent
  },{
    path:"candidatos/buscarCandidato",
    component: BuscarCandidatoComponent
  },{
    path:"vagas/alterarVaga/:id",
    component: AlterarVagaComponent
  },{
    path:"candidatos/alterarCandidato/:id",
    component: AlterarCandidatoComponent
  },{
    path:"tecnologias/alterarTecnologia/:id",
    component: AlterarTecnologiaComponent
  },{
    path:"relatorios",
    component: RelatoriosComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
