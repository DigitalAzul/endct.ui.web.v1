import { gql } from "@apollo/client";


export const EDT_SUB_GRUPO_PRODUTOS = gql(`
mutation ProdutoSubGrupo_Edicao($produtoSubGrupoEdicaoId: String!, $dados: UpdateSubGrupoProdutoArgs!) {
  ProdutoSubGrupo_Edicao(id: $produtoSubGrupoEdicaoId, dados: $dados)
}
`)