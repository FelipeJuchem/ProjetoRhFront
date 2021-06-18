import { Candidato } from './candidato';
import { Tecnologia } from './tecnologia';

export interface Vaga {
    id: number
    descricao: string
    tecnologias?: Array<Tecnologia>
    candidatos?: Array<Candidato>
}
