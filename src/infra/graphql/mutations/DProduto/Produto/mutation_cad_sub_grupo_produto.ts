import { gql } from "@apollo/client";


export const CAD_SUB_GRUPO_PRODUTOS = gql(`
mutation Produto_SubGrupo_Novo($inserirSubGrupoProdutoDto: InserirSubGrupoProdutoDto!) {
  Produto_SubGrupo_Novo(inserirSubGrupoProdutoDto: $inserirSubGrupoProdutoDto) {
    _id
    _criado_em
    _criado_por_id
    _atualizado_em
    _atualizado_por_id
    _excluido_em
    _excluido_por_id
    titulo
    descricao
    grupo_produtoId
  }
}
`)