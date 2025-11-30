
import { z } from 'zod';
import { ESCALA_TEMRATURA_ENUM } from './ProdutoTypesComuns';
import { PRODUTO_CLASSIFICACAO_ENUN, SITUACAO_PRODUTO } from './comuns/produto.enum';




export const produtoEschema = z.object({

    produto_marcaId: z.string(),


    grupoId: z.string(),


    produto_sub_grupoId: z.string(),


    sigla_unidade_primariaId: z.string(),


    fator_conversao_primaria: z.number(),


    ha_segunda_unidade: z.boolean(),


    codigo_produto: z.string(),


    licenca_anvisa_num: z.string(),


    data_validade_licenca_anvisa: z.date(),


    referencia: z.string(),


    peso_bruto: z.float64(),


    peso_liquido: z.float64(),


    situacao: z.enum(SITUACAO_PRODUTO),


    classificacao: z.enum(PRODUTO_CLASSIFICACAO_ENUN),


    escala_temperatura: z.enum(ESCALA_TEMRATURA_ENUM),


    fator_conversao_secundaria: z.number(),




    sigla_unidade_secundariaId: z.string().optional(),

    codigo_ncm: z.string().optional(),


    codigo_rms: z.string().optional(),


    descricao: z.string().optional(),


    descricao_tecnica: z.string().optional(),


    observacoes: z.string().optional(),


    imagem: z.string().optional(),


    temp_max_conservacao: z.float64(),


    temp_min_conservacao: z.float64(),







    // grupo: z.object(ProdutoGrupoEntity).optional(),
    // subgrupo: z.object(ProdutoSubGrupoEntity).optional(),


})


export const ProdutoEntity = z.object({

    _id: z.string(),
    _criado_em: z.date(),
    _criado_por_id: z.string(),
    _atualizado_em: z.date().optional(),
    _atualizado_por_id: z.string().optional(),
    _excluido_em: z.date().optional(),
    _excluido_por_id: z.string().optional(),



    produto_marcaId: z.string(),


    produto_grupoId: z.string(),


    produto_sub_grupoId: z.string(),


    sigla_unidade_primariaId: z.string(),


    fator_conversao_primaria: z.number(),


    ha_segunda_unidade: z.boolean(),


    codigo_produto: z.string(),


    licenca_anvisa_num: z.string(),


    data_validade_licenca_anvisa: z.date(),


    referencia: z.string(),


    peso_bruto: z.float64(),


    peso_liquido: z.float64(),


    situacao: z.enum(SITUACAO_PRODUTO),


    classificacao: z.enum(PRODUTO_CLASSIFICACAO_ENUN),


    escala_temperatura: z.enum(ESCALA_TEMRATURA_ENUM),


    fator_conversao_secundaria: z.number(),




    sigla_unidade_secundariaId: z.string().optional(),

    codigo_ncm: z.string().optional(),


    codigo_rms: z.string().optional(),


    descricao: z.string().optional(),


    descricao_tecnica: z.string().optional(),


    observacoes: z.string().optional(),


    imagem: z.string().optional(),


    temp_max_conservacao: z.float64(),


    temp_min_conservacao: z.float64(),
})


export const ProdutoPsqAvancado = z.object({

    codigo_produto: z.string().optional(),
    referencia: z.string().optional(),
    situacao: z.enum(SITUACAO_PRODUTO).optional(),
    classificacao: z.enum(PRODUTO_CLASSIFICACAO_ENUN).optional(),
    _criado_em: z.date().optional(),
    _criado_por_id: z.string().optional(),
    _excluido_em: z.date().optional().optional(),
    produto_marcaId: z.string().optional(),
    produto_grupoId: z.string().optional(),
    produto_sub_grupoId: z.string().optional(),
})