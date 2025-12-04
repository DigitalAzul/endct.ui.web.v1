import { gql } from "@apollo/client";

export const EDT_PRODUTOS = gql(`
mutation Produto_Edicao($produtoEdicaoId: String!, $updateProdutoInput: UpdateProdutoInput!) {
  Produto_Edicao(id: $produtoEdicaoId, updateProdutoInput: $updateProdutoInput) {
    _id
  }
}
`)