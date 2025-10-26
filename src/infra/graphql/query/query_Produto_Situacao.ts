import { gql } from "@apollo/client";

export const OBTER_SITUACAO_PRODUTO = gql(`
query Produto_Situacao {
  Produto_Situacao {
    value
    label
  }
}
`);