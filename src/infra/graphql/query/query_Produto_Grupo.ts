import { gql } from "@apollo/client";

export const OBTER_PRODUTO_GRUPOS = gql(`
query Produto_Grupos_Todos {
  Produto_Grupos {
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