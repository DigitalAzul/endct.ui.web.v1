import { gql } from "@apollo/client";

export const OBTER_CLASIFICACAO_PRODUTO = gql(`
query Produto_Classificacao {
  Produto_Classificacao {
    value
    label
  }
}
`);