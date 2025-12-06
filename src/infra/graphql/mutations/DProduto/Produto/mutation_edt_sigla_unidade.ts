import { gql } from "@apollo/client";


export const EDT_SIGLA_UNIDADE_PRODUTO = gql(`
mutation SiglaDeUnidadeDeMedidaDeProduto_Edicao($siglaDeUnidadeDeMedidaDeProdutoEdicaoId: String!, $dados: SiglaUnidadeMedidaProdutoEditaArgs!) {
  SiglaDeUnidadeDeMedidaDeProduto_Edicao(id: $siglaDeUnidadeDeMedidaDeProdutoEdicaoId, dados: $dados)
}
`)