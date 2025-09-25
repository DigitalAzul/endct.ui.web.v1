import { gql } from "@apollo/client";


export const CAD_GRUPO_PRODUTOS = gql(` mutation InseriNovoGrupoDeProduto($insProdutoGrupoDto: InsProdutoGrupoEntradaDto!) {
  inseriNovoGrupoDeProduto(insProdutoGrupoDto: $insProdutoGrupoDto) {
    _id
  }
} 
`)