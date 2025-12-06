import { gql } from "@apollo/client";


export const CAD_SIGLA_UNIDADE_PRODUTO = gql(`
mutation CriarNovaSiglaDeUnidadeDeMedidaDeProduto($inserirSiglaUnidadeMedidaProdutoDto: InserirSiglaUnidadeMedidaProdutoDto!) {
  CriarNovaSiglaDeUnidadeDeMedidaDeProduto(InserirSiglaUnidadeMedidaProdutoDto: $inserirSiglaUnidadeMedidaProdutoDto)
}
`)