import { gql } from "@apollo/client";


export const CAD_GRUPO_PRODUTOS = gql(`
mutation Produto_Grupo_Novo($insProdutoGrupoDto: InserirGrupoProdutoArgs!) {
  Produto_Grupo_Novo(insProdutoGrupoDto: $insProdutoGrupoDto) {
    _id
    _criado_em
    _criado_por_id
    _atualizado_em
    _atualizado_por_id
    _excluido_em
    _excluido_por_id
    titulo
    descricao
  }
}
`)