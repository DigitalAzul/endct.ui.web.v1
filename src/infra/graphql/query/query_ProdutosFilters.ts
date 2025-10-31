import { gql } from "@apollo/client";

export const OBTER_PRODUTOS_TODOS = gql(`
query Produto_Todos {
  Produtos {
    _id
    _criado_em
    _criado_por_id
    _atualizado_em
    _atualizado_por_id
    _excluido_em
    _excluido_por_id
    produto_marcaId
    produto_grupoId
    produto_sub_grupoId
    sigla_unidade_primariaId
    fator_conversao_primaria
    ha_segunda_unidade
    codigo_produto
    descricao
    licenca_anvisa_num
    data_validade_licenca_anvisa
    referencia
    peso_bruto
    peso_liquido
    situacao
    classificacao
    escala_temperatura
    sigla_unidade_secundariaId
    temp_max_conservacao
    temp_min_conservacao
  }
}

`);