import { gql } from "@apollo/client";

export const OBTER_SIGLA_UNIDADE_MEDIDA = gql(`
query TodasSiglasUnidadeMedidaDeProduto {
  TodasSiglasUnidadeMedidaDeProduto {
    _id
    _criado_em
    _criado_por_id
    _atualizado_em
    _atualizado_por_id
    _excluido_em
    _excluido_por_id
    sigla
    descricao
  }
}
`);