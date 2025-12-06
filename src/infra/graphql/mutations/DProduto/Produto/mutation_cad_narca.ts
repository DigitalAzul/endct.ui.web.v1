import { gql } from "@apollo/client";

export const CAD_MARCA = gql(`
mutation CriarNovaMarcaDeProduto($inserirMarcaProdutoDto: MarcaProdutoArgs!) {
  CriarNovaMarcaDeProduto(InserirMarcaProdutoDto: $inserirMarcaProdutoDto)
}
`)