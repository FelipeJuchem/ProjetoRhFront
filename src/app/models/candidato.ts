import { Tecnologia } from './tecnologia';
export interface Candidato {
  id?: number;
  nome: string
  sobrenome: string
  idade?: number;
  cpf?: number;
  vagaId?: number;
  vagaDescricao?: string
  pontuacao?: number
  tecnologias?: Tecnologia[]
}


