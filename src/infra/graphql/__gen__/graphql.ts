/* eslint-disable */
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

export type ClassificacaoProdutoSchema = {
  __typename?: 'ClassificacaoProdutoSchema';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type GrupoProdutoSchema = {
  __typename?: 'GrupoProdutoSchema';
  _atualizado_em?: Maybe<Scalars['DateTime']['output']>;
  _atualizado_por_id?: Maybe<Scalars['String']['output']>;
  _criado_em?: Maybe<Scalars['DateTime']['output']>;
  _criado_por_id?: Maybe<Scalars['String']['output']>;
  _excluido_em?: Maybe<Scalars['DateTime']['output']>;
  _excluido_por_id?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['String']['output']>;
  descricao: Scalars['String']['output'];
  titulo: Scalars['String']['output'];
};

export type InsProdutoEntraDto = {
  classificacao: Scalars['String']['input'];
  codigo_ncm?: InputMaybe<Scalars['String']['input']>;
  codigo_produto: Scalars['String']['input'];
  codigo_rms?: InputMaybe<Scalars['String']['input']>;
  data_validade_licenca_anvisa: Scalars['String']['input'];
  descricao?: InputMaybe<Scalars['String']['input']>;
  descricao_tecnica?: InputMaybe<Scalars['String']['input']>;
  escala_temperatura: Scalars['String']['input'];
  fator_conversao_primaria: Scalars['Float']['input'];
  fator_conversao_secundaria?: InputMaybe<Scalars['Float']['input']>;
  ha_segunda_unidade: Scalars['Boolean']['input'];
  imagem?: InputMaybe<Scalars['String']['input']>;
  licenca_anvisa_num: Scalars['String']['input'];
  observacoes?: InputMaybe<Scalars['String']['input']>;
  peso_bruto: Scalars['Float']['input'];
  peso_liquido: Scalars['Float']['input'];
  produto_grupoId: Scalars['String']['input'];
  produto_marcaId: Scalars['String']['input'];
  produto_sub_grupoId: Scalars['String']['input'];
  referencia: Scalars['String']['input'];
  sigla_unidade_primariaId: Scalars['String']['input'];
  sigla_unidade_secundariaId?: InputMaybe<Scalars['String']['input']>;
  situacao: Scalars['String']['input'];
  temp_max_conservacao?: InputMaybe<Scalars['Float']['input']>;
  temp_min_conservacao?: InputMaybe<Scalars['Float']['input']>;
};

export type InserirGrupoProdutoArgs = {
  descricao: Scalars['String']['input'];
  titulo: Scalars['String']['input'];
};

export type InserirMarcaProdutoDto = {
  descricao: Scalars['String']['input'];
  titulo: Scalars['String']['input'];
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

export type InserirProdutoGrupoRespostaDto = {
  __typename?: 'InserirProdutoGrupoRespostaDto';
  _atualizado_em?: Maybe<Scalars['DateTime']['output']>;
  _atualizado_por_id?: Maybe<Scalars['String']['output']>;
  _criado_em?: Maybe<Scalars['DateTime']['output']>;
  _criado_por_id?: Maybe<Scalars['String']['output']>;
  _excluido_em?: Maybe<Scalars['DateTime']['output']>;
  _excluido_por_id?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['String']['output']>;
  descricao: Scalars['String']['output'];
  titulo: Scalars['String']['output'];
};

export type InserirSiglaUnidadeMedidaProdutoDto = {
  descricao: Scalars['String']['input'];
  sigla: Scalars['String']['input'];
};

export type InserirSubGrupoProdutoDto = {
  descricao: Scalars['String']['input'];
  titulo: Scalars['String']['input'];
};

export type InserirSubGrupoProdutoRespostaDto = {
  __typename?: 'InserirSubGrupoProdutoRespostaDto';
  _atualizado_em?: Maybe<Scalars['DateTime']['output']>;
  _atualizado_por_id?: Maybe<Scalars['String']['output']>;
  _criado_em?: Maybe<Scalars['DateTime']['output']>;
  _criado_por_id?: Maybe<Scalars['String']['output']>;
  _excluido_em?: Maybe<Scalars['DateTime']['output']>;
  _excluido_por_id?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['String']['output']>;
  descricao: Scalars['String']['output'];
  grupo_produtoId: Scalars['String']['output'];
  titulo: Scalars['String']['output'];
};

export type InserirUnidadeMedidaProdutoDto = {
  descricao: Scalars['String']['input'];
  fator_conversao_primaria: Scalars['Float']['input'];
  fator_conversao_secundaria: Scalars['Float']['input'];
  ha_segunda_unidade: Scalars['Boolean']['input'];
  sigla_unidade_primariaId: Scalars['String']['input'];
  sigla_unidade_secundariaId: Scalars['String']['input'];
  titulo: Scalars['String']['input'];
};

export type MarcaProdutoSchema = {
  __typename?: 'MarcaProdutoSchema';
  _atualizado_em?: Maybe<Scalars['DateTime']['output']>;
  _atualizado_por_id?: Maybe<Scalars['String']['output']>;
  _criado_em?: Maybe<Scalars['DateTime']['output']>;
  _criado_por_id?: Maybe<Scalars['String']['output']>;
  _excluido_em?: Maybe<Scalars['DateTime']['output']>;
  _excluido_por_id?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['String']['output']>;
  descricao: Scalars['String']['output'];
  titulo: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  AtualizeEstaPessoa: PessoaDto;
  CriarNovaMarcaDeProduto: MarcaProdutoSchema;
  CriarNovaPessoa: PessoaDto;
  CriarNovaSiglaDeUnidadeDeMedidaDeProduto: SiglaUnidadeMedidaProdutoSchema;
  CriarNovaUnidadeMedidaProduto: UnidadeMedidaProdutoSchema;
  CriarNovoUsuario: UsuarioDto;
  Produto_Edicao: ProdutoSchema;
  Produto_Grupo_Novo: InserirProdutoGrupoRespostaDto;
  Produto_Novo: ProdutoSchema;
  Produto_Remover: ProdutoSchema;
  Produto_SubGrupo_Novo: InserirSubGrupoProdutoRespostaDto;
  RemovaEstaPessoa: PessoaDto;
  removeUsuario: UsuarioDto;
  updateUsuario: UsuarioDto;
};


export type MutationAtualizeEstaPessoaArgs = {
  _id: Scalars['String']['input'];
  updatePessoaInput: UpdatePessoaInputDto;
};


export type MutationCriarNovaMarcaDeProdutoArgs = {
  InserirMarcaProdutoDto: InserirMarcaProdutoDto;
};


export type MutationCriarNovaPessoaArgs = {
  inserirPessoaInput: InserirPessoaInputDto;
};


export type MutationCriarNovaSiglaDeUnidadeDeMedidaDeProdutoArgs = {
  InserirSiglaUnidadeMedidaProdutoDto: InserirSiglaUnidadeMedidaProdutoDto;
};


export type MutationCriarNovaUnidadeMedidaProdutoArgs = {
  InserirUnidadeMedidaProdutoDto: InserirUnidadeMedidaProdutoDto;
};


export type MutationCriarNovoUsuarioArgs = {
  InserirNovoUsuarioInput: InserirNovoUsuarioInput;
};


export type MutationProduto_EdicaoArgs = {
  updateProdutoInput: UpdateProdutoInput;
};


export type MutationProduto_Grupo_NovoArgs = {
  insProdutoGrupoDto: InserirGrupoProdutoArgs;
};


export type MutationProduto_NovoArgs = {
  insProdutoEntraDto: InsProdutoEntraDto;
};


export type MutationProduto_RemoverArgs = {
  id: Scalars['Int']['input'];
};


export type MutationProduto_SubGrupo_NovoArgs = {
  inserirSubGrupoProdutoDto: InserirSubGrupoProdutoDto;
};


export type MutationRemovaEstaPessoaArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveUsuarioArgs = {
  id: Scalars['Int']['input'];
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

export type PaginatedResponse = {
  __typename?: 'PaginatedResponse';
  items: Array<PessoaDto>;
  page: Scalars['Float']['output'];
  size: Scalars['Float']['output'];
  totalItems: Scalars['Float']['output'];
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
  classificacao: Scalars['String']['output'];
  codigo_ncm?: Maybe<Scalars['String']['output']>;
  codigo_produto: Scalars['String']['output'];
  codigo_rms?: Maybe<Scalars['String']['output']>;
  data_validade_licenca_anvisa: Scalars['String']['output'];
  descricao?: Maybe<Scalars['String']['output']>;
  descricao_tecnica?: Maybe<Scalars['String']['output']>;
  escala_temperatura: Scalars['String']['output'];
  fator_conversao_primaria: Scalars['Float']['output'];
  fator_conversao_secundaria?: Maybe<Scalars['Float']['output']>;
  ha_segunda_unidade: Scalars['Boolean']['output'];
  imagem?: Maybe<Scalars['String']['output']>;
  licenca_anvisa_num: Scalars['String']['output'];
  observacoes?: Maybe<Scalars['String']['output']>;
  peso_bruto: Scalars['Float']['output'];
  peso_liquido: Scalars['Float']['output'];
  produto_grupoId: Scalars['String']['output'];
  produto_marcaId: Scalars['String']['output'];
  produto_sub_grupoId: Scalars['String']['output'];
  referencia: Scalars['String']['output'];
  sigla_unidade_primariaId: Scalars['String']['output'];
  sigla_unidade_secundariaId?: Maybe<Scalars['String']['output']>;
  situacao: Scalars['String']['output'];
  temp_max_conservacao?: Maybe<Scalars['Float']['output']>;
  temp_min_conservacao?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  ListarPessoaPeloID: PessoaDto;
  ListarSiglaUnidadeMedidaDeProduto?: Maybe<SiglaUnidadeMedidaProdutoSchema>;
  ListarTodasPessoas: Array<PessoaDto>;
  ListarTodasSiglasUnidadeMedidaDeProduto?: Maybe<Array<SiglaUnidadeMedidaProdutoSchema>>;
  Paginacao: PaginatedResponse;
  Produto_Classificacao: Array<ClassificacaoProdutoSchema>;
  Produto_Grupos?: Maybe<Array<GrupoProdutoSchema>>;
  Produto_Marcas?: Maybe<Array<MarcaProdutoSchema>>;
  Produto_PorID: ProdutoSchema;
  Produto_Situacao: Array<SituacaoProdutoSchema>;
  Produto_SubGrupos?: Maybe<Array<SubGrupoProdutoSchema>>;
  Produtos: Array<ProdutoSchema>;
  UnidadesMedidaProduto?: Maybe<Array<UnidadeMedidaProdutoSchema>>;
  usuario: UsuarioDto;
};


export type QueryListarPessoaPeloIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryListarSiglaUnidadeMedidaDeProdutoArgs = {
  _id: Scalars['String']['input'];
};


export type QueryPaginacaoArgs = {
  FilteringParams: _Filtering;
  PaginationParams: _Pagination;
  SortingParams: _Sorting;
};


export type QueryProduto_PorIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUsuarioArgs = {
  id: Scalars['Int']['input'];
};

export type SiglaUnidadeMedidaProdutoSchema = {
  __typename?: 'SiglaUnidadeMedidaProdutoSchema';
  _atualizado_em?: Maybe<Scalars['DateTime']['output']>;
  _atualizado_por_id?: Maybe<Scalars['String']['output']>;
  _criado_em?: Maybe<Scalars['DateTime']['output']>;
  _criado_por_id?: Maybe<Scalars['String']['output']>;
  _excluido_em?: Maybe<Scalars['DateTime']['output']>;
  _excluido_por_id?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['String']['output']>;
  descricao: Scalars['String']['output'];
  sigla: Scalars['String']['output'];
};

export type SituacaoProdutoSchema = {
  __typename?: 'SituacaoProdutoSchema';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type SubGrupoProdutoSchema = {
  __typename?: 'SubGrupoProdutoSchema';
  _atualizado_em?: Maybe<Scalars['DateTime']['output']>;
  _atualizado_por_id?: Maybe<Scalars['String']['output']>;
  _criado_em?: Maybe<Scalars['DateTime']['output']>;
  _criado_por_id?: Maybe<Scalars['String']['output']>;
  _excluido_em?: Maybe<Scalars['DateTime']['output']>;
  _excluido_por_id?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['String']['output']>;
  descricao: Scalars['String']['output'];
  titulo: Scalars['String']['output'];
};

export type UnidadeMedidaProdutoSchema = {
  __typename?: 'UnidadeMedidaProdutoSchema';
  _atualizado_em?: Maybe<Scalars['DateTime']['output']>;
  _atualizado_por_id?: Maybe<Scalars['String']['output']>;
  _criado_em?: Maybe<Scalars['DateTime']['output']>;
  _criado_por_id?: Maybe<Scalars['String']['output']>;
  _excluido_em?: Maybe<Scalars['DateTime']['output']>;
  _excluido_por_id?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['String']['output']>;
  descricao: Scalars['String']['output'];
  fator_conversao_primaria: Scalars['Float']['output'];
  fator_conversao_secundaria: Scalars['Float']['output'];
  ha_segunda_unidade: Scalars['Boolean']['output'];
  sigla_primaria: SiglaUnidadeMedidaProdutoSchema;
  sigla_secundaria: SiglaUnidadeMedidaProdutoSchema;
  sigla_unidade_primariaId: Scalars['String']['output'];
  sigla_unidade_secundariaId: Scalars['String']['output'];
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
  inscricao_estadual?: InputMaybe<Scalars['String']['input']>;
  nome_fantasia?: InputMaybe<Scalars['String']['input']>;
  pessoa_juridica?: InputMaybe<Scalars['Boolean']['input']>;
  razao_social?: InputMaybe<Scalars['String']['input']>;
  tipo_natureza_juridica_id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProdutoInput = {
  classificacao?: InputMaybe<Scalars['String']['input']>;
  codigo_ncm?: InputMaybe<Scalars['String']['input']>;
  codigo_produto?: InputMaybe<Scalars['String']['input']>;
  codigo_rms?: InputMaybe<Scalars['String']['input']>;
  data_validade_licenca_anvisa?: InputMaybe<Scalars['String']['input']>;
  descricao?: InputMaybe<Scalars['String']['input']>;
  descricao_tecnica?: InputMaybe<Scalars['String']['input']>;
  escala_temperatura?: InputMaybe<Scalars['String']['input']>;
  fator_conversao_primaria?: InputMaybe<Scalars['Float']['input']>;
  fator_conversao_secundaria?: InputMaybe<Scalars['Float']['input']>;
  ha_segunda_unidade?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  imagem?: InputMaybe<Scalars['String']['input']>;
  licenca_anvisa_num?: InputMaybe<Scalars['String']['input']>;
  observacoes?: InputMaybe<Scalars['String']['input']>;
  peso_bruto?: InputMaybe<Scalars['Float']['input']>;
  peso_liquido?: InputMaybe<Scalars['Float']['input']>;
  produto_grupoId?: InputMaybe<Scalars['String']['input']>;
  produto_marcaId?: InputMaybe<Scalars['String']['input']>;
  produto_sub_grupoId?: InputMaybe<Scalars['String']['input']>;
  referencia?: InputMaybe<Scalars['String']['input']>;
  sigla_unidade_primariaId?: InputMaybe<Scalars['String']['input']>;
  sigla_unidade_secundariaId?: InputMaybe<Scalars['String']['input']>;
  situacao?: InputMaybe<Scalars['String']['input']>;
  temp_max_conservacao?: InputMaybe<Scalars['Float']['input']>;
  temp_min_conservacao?: InputMaybe<Scalars['Float']['input']>;
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

export type _Filtering = {
  property: Scalars['String']['input'];
  rule: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type _Pagination = {
  limit: Scalars['Float']['input'];
  offset: Scalars['Float']['input'];
  page: Scalars['Float']['input'];
  size: Scalars['Float']['input'];
};

export type _Sorting = {
  direction: Scalars['String']['input'];
  property: Scalars['String']['input'];
};

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
