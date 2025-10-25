import { gql } from "@apollo/client";

export const OBTER_PRODUTO_MARCA = gql(`
query Produto_Marcas {
  Produto_Marcas {
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
`);