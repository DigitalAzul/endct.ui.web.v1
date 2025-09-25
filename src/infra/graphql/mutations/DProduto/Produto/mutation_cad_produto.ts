import { gql } from "@apollo/client";

export const CAD_PRODUTOS = gql(`
    mutation InserirNovoProduto($insProdutoEntraDto: InsProdutoEntraDto!) {
         InserirNovoProduto(insProdutoEntraDto: $insProdutoEntraDto) {
            _id
        }
    }
`)