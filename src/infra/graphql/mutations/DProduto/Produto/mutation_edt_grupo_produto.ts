import { gql } from "@apollo/client";


export const EDT_GRUPO_PRODUTOS = gql(`
mutation ProdutoGrupo_Edicao($produtoGrupoEdicaoId: String!, $dados: EditaGrupoProdutoArgs!) {
  ProdutoGrupo_Edicao(id: $produtoGrupoEdicaoId, dados: $dados)
}
`)