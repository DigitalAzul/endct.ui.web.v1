import { gql } from "@apollo/client";


export const CAD_SUB_GRUPO_PRODUTOS = gql(`
mutation Produto_SubGrupo_Novo($inserirSubGrupoProdutoArgs: InserirSubGrupoProdutoArgs!) {
  Produto_SubGrupo_Novo(inserirSubGrupoProdutoArgs: $inserirSubGrupoProdutoArgs)
}
`)