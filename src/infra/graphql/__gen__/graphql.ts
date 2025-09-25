/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type InsProdutoEntraDto = {
  codigo_ncm: Scalars['String']['input'];
  codigo_produto: Scalars['String']['input'];
  codigo_rms: Scalars['String']['input'];
  data_validade_licenca_anvisa: Scalars['String']['input'];
  descricao: Scalars['String']['input'];
  descricao_tecnica: Scalars['String']['input'];
  imagem: Scalars['String']['input'];
  licenca_anvisa_num: Scalars['String']['input'];
  marca_produto_id: Scalars['String']['input'];
  observacoes: Scalars['String']['input'];
  peso_bruto: Scalars['String']['input'];
  peso_liquido: Scalars['String']['input'];
  produto_grupoId: Scalars['String']['input'];
  produto_sub_grupoId: Scalars['String']['input'];
  referencia: Scalars['String']['input'];
  situacao: Scalars['String']['input'];
  temp_max_conservacao: Scalars['String']['input'];
  tipo_produto: Scalars['String']['input'];
};

export type InsProdutoGrupoEntradaDto = {
  descricao: Scalars['String']['input'];
  titulo: Scalars['String']['input'];
};

export type InsProdutoGrupoRespostaDto = {
  __typename?: 'InsProdutoGrupoRespostaDto';
  AlteracaoDataHora: Scalars['String']['output'];
  AlteracaoUsuario: Scalars['String']['output'];
  CodigoGrupoProduto: Scalars['String']['output'];
  Descricao: Scalars['String']['output'];
  Imagem: Scalars['String']['output'];
  _atualizado_em?: Maybe<Scalars['DateTime']['output']>;
  _atualizado_por_id?: Maybe<Scalars['String']['output']>;
  _criado_em?: Maybe<Scalars['DateTime']['output']>;
  _criado_por_id?: Maybe<Scalars['String']['output']>;
  _excluido_em?: Maybe<Scalars['DateTime']['output']>;
  _excluido_por_id?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['String']['output']>;
};

export type InserirNovoUsuarioInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type InserirPessoaInputDto = {
  cnae: Scalars['String']['input'];
  cnpj_cpf: Scalars['String']['input'];
  filial: Scalars['Boolean']['input'];
  inscricao_estadual: Scalars['String']['input'];
  nome_fantasia: Scalars['String']['input'];
  pessoa_juridica: Scalars['Boolean']['input'];
  razao_social: Scalars['String']['input'];
  tipo_natureza_juridica_id: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CriarNovoUsuario: UsuarioDto;
  InserirNovoProduto: ProdutoSchema;
  InserirPessoa: PessoaDto;
  inseriNovoGrupoDeProduto: InsProdutoGrupoRespostaDto;
  removePessoa: PessoaDto;
  removeProduto: ProdutoSchema;
  removeUsuario: UsuarioDto;
  updateMercador: PessoaDto;
  updateProduto: ProdutoSchema;
  updateUsuario: UsuarioDto;
};


export type MutationCriarNovoUsuarioArgs = {
  InserirNovoUsuarioInput: InserirNovoUsuarioInput;
};


export type MutationInserirNovoProdutoArgs = {
  insProdutoEntraDto: InsProdutoEntraDto;
};


export type MutationInserirPessoaArgs = {
  inserirPessoaInput: InserirPessoaInputDto;
};


export type MutationInseriNovoGrupoDeProdutoArgs = {
  insProdutoGrupoDto: InsProdutoGrupoEntradaDto;
};


export type MutationRemovePessoaArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveProdutoArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUsuarioArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateMercadorArgs = {
  updatePessoaInput: UpdatePessoaInputDto;
};


export type MutationUpdateProdutoArgs = {
  updateProdutoInput: UpdateProdutoInput;
};


export type MutationUpdateUsuarioArgs = {
  updateUsuarioInput: UpdateUsuarioInput;
};

export type NaturezaJuridicaDto = {
  __typename?: 'NaturezaJuridicaDto';
  _atualizado_em?: Maybe<Scalars['DateTime']['output']>;
  _atualizado_por_id?: Maybe<Scalars['String']['output']>;
  _criado_em: Scalars['DateTime']['output'];
  _criado_por_id: Scalars['String']['output'];
  _excluido_em?: Maybe<Scalars['DateTime']['output']>;
  _excluido_por_id?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['String']['output']>;
  titulo: Scalars['String']['output'];
};

export type PessoaDto = {
  __typename?: 'PessoaDto';
  _atualizado_em?: Maybe<Scalars['DateTime']['output']>;
  _atualizado_por_id?: Maybe<Scalars['String']['output']>;
  _criado_em: Scalars['DateTime']['output'];
  _criado_por_id: Scalars['String']['output'];
  _excluido_em?: Maybe<Scalars['DateTime']['output']>;
  _excluido_por_id?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['String']['output']>;
  cnae: Scalars['String']['output'];
  cnpj_cpf: Scalars['String']['output'];
  filial: Scalars['Boolean']['output'];
  inscricao_estadual: Scalars['String']['output'];
  nome_fantasia: Scalars['String']['output'];
  pessoa_juridica: Scalars['Boolean']['output'];
  razao_social: Scalars['String']['output'];
  tipo_natureza_juridica: NaturezaJuridicaDto;
  tipo_natureza_juridica_id: Scalars['String']['output'];
};

export type ProdutoSchema = {
  __typename?: 'ProdutoSchema';
  _atualizado_em?: Maybe<Scalars['DateTime']['output']>;
  _atualizado_por_id?: Maybe<Scalars['String']['output']>;
  _criado_em?: Maybe<Scalars['DateTime']['output']>;
  _criado_por_id?: Maybe<Scalars['String']['output']>;
  _excluido_em?: Maybe<Scalars['DateTime']['output']>;
  _excluido_por_id?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['String']['output']>;
  codigo_ncm: Scalars['String']['output'];
  codigo_produto: Scalars['String']['output'];
  codigo_rms: Scalars['String']['output'];
  data_validade_licenca_anvisa: Scalars['String']['output'];
  descricao: Scalars['String']['output'];
  descricao_tecnica: Scalars['String']['output'];
  grupo_produto_id: Scalars['String']['output'];
  imagem: Scalars['String']['output'];
  licenca_anvisa_num: Scalars['String']['output'];
  marca_produto_id: Scalars['String']['output'];
  observacoes: Scalars['String']['output'];
  peso_bruto: Scalars['String']['output'];
  peso_liquido: Scalars['String']['output'];
  referencia: Scalars['String']['output'];
  situacao: Scalars['String']['output'];
  sub_grupo_produto_id: Scalars['String']['output'];
  temp_max_conservacao: Scalars['String']['output'];
  tipo_produto: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  pessoa: PessoaDto;
  pessoas: Array<PessoaDto>;
  produto: ProdutoSchema;
  usuario: UsuarioDto;
};


export type QueryPessoaArgs = {
  id: Scalars['String']['input'];
};


export type QueryProdutoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUsuarioArgs = {
  id: Scalars['Int']['input'];
};

export type UpdatePessoaInputDto = {
  _atualizado_em?: InputMaybe<Scalars['DateTime']['input']>;
  _atualizado_por_id?: InputMaybe<Scalars['String']['input']>;
  _criado_em?: InputMaybe<Scalars['DateTime']['input']>;
  _criado_por_id?: InputMaybe<Scalars['String']['input']>;
  _excluido_em?: InputMaybe<Scalars['DateTime']['input']>;
  _excluido_por_id?: InputMaybe<Scalars['String']['input']>;
  _id?: InputMaybe<Scalars['String']['input']>;
  cnae?: InputMaybe<Scalars['String']['input']>;
  cnpj_cpf?: InputMaybe<Scalars['String']['input']>;
  filial?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  inscricao_estadual?: InputMaybe<Scalars['String']['input']>;
  nome_fantasia?: InputMaybe<Scalars['String']['input']>;
  pessoa_juridica?: InputMaybe<Scalars['Boolean']['input']>;
  razao_social?: InputMaybe<Scalars['String']['input']>;
  tipo_natureza_juridica_id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProdutoInput = {
  codigo_ncm?: InputMaybe<Scalars['String']['input']>;
  codigo_produto?: InputMaybe<Scalars['String']['input']>;
  codigo_rms?: InputMaybe<Scalars['String']['input']>;
  data_validade_licenca_anvisa?: InputMaybe<Scalars['String']['input']>;
  descricao?: InputMaybe<Scalars['String']['input']>;
  descricao_tecnica?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  imagem?: InputMaybe<Scalars['String']['input']>;
  licenca_anvisa_num?: InputMaybe<Scalars['String']['input']>;
  marca_produto_id?: InputMaybe<Scalars['String']['input']>;
  observacoes?: InputMaybe<Scalars['String']['input']>;
  peso_bruto?: InputMaybe<Scalars['String']['input']>;
  peso_liquido?: InputMaybe<Scalars['String']['input']>;
  produto_grupoId?: InputMaybe<Scalars['String']['input']>;
  produto_sub_grupoId?: InputMaybe<Scalars['String']['input']>;
  referencia?: InputMaybe<Scalars['String']['input']>;
  situacao?: InputMaybe<Scalars['String']['input']>;
  temp_max_conservacao?: InputMaybe<Scalars['String']['input']>;
  tipo_produto?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUsuarioInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UsuarioDto = {
  __typename?: 'UsuarioDto';
  _atualizado_em?: Maybe<Scalars['DateTime']['output']>;
  _atualizado_por_id?: Maybe<Scalars['String']['output']>;
  _criado_em?: Maybe<Scalars['DateTime']['output']>;
  _criado_por_id?: Maybe<Scalars['String']['output']>;
  _excluido_em?: Maybe<Scalars['DateTime']['output']>;
  _excluido_por_id?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['String']['output']>;
  pnome: Scalars['String']['output'];
  role: Scalars['String']['output'];
  snome: Scalars['String']['output'];
};

export type PessoasQueryVariables = Exact<{ [key: string]: never; }>;


export type PessoasQuery = { __typename?: 'Query', pessoas: Array<{ __typename?: 'PessoaDto', _id?: string | null, _criado_em: any, _criado_por_id: string, _atualizado_em?: any | null, _atualizado_por_id?: string | null, _excluido_em?: any | null, _excluido_por_id?: string | null, filial: boolean, razao_social: string, nome_fantasia: string, cnpj_cpf: string, inscricao_estadual: string, pessoa_juridica: boolean, tipo_natureza_juridica_id: string, cnae: string }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const PessoasDocument = new TypedDocumentString(`
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
    `) as unknown as TypedDocumentString<PessoasQuery, PessoasQueryVariables>;