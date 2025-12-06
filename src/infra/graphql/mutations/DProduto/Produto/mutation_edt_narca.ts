import { gql } from "@apollo/client";

export const EDT_MARCA = gql(`
mutation MarcaDeProduto_Edicao($marcaDeProdutoEdicaoId: String!, $dados: MarcaProdutoArgs!) {
  MarcaDeProduto_Edicao(id: $marcaDeProdutoEdicaoId, dados: $dados)
}
`)