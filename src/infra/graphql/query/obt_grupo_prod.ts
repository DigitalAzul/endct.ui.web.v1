import { gql } from "@apollo/client";

export const OBTER_GRUPO_PRODUTOS = gql(`
  query Pessoas {
  pessoas {
    _id
    _criado_em
    _criado_por_id
    _atualizado_em
    _atualizado_por_id
    _excluido_em
    _excluido_por_id
    filial
    razao_social
    nome_fantasia
    cnpj_cpf
    inscricao_estadual
    pessoa_juridica
    tipo_natureza_juridica_id
    cnae
  }
}
`);