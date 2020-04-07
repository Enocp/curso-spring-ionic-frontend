import {CidadeDTO} from "./cidade.dto";

export interface EndrecoDTO {
    id: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: CidadeDTO; 
}