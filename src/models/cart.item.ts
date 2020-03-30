import { ProdutoDTO } from "../pages/produtos/produtodto";

export interface CartItem{
     
    quantidade: number;
    produto: ProdutoDTO;
}