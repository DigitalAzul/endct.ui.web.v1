import { gql } from "@apollo/client";

export const CAD_PRODUTOS = gql(`
mutation Produto_Novo($insProdutoEntraDto: InsProdutoEntraDto!) {
  Produto_Novo(insProdutoEntraDto: $insProdutoEntraDto) {
    _id
  }
}
`)