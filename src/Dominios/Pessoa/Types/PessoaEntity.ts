
import { z } from 'zod';
import { NaturezaJuridicaEntity } from './NaturezaJuridica';




export const PessoaEschema = z.object({


    filial: z.boolean(),
    razao_social: z.string(),
    nome_fantasia: z.string(),
    cnpj_cpf: z.string(),
    inscricao_estadual: z.string(),
    pessoa_juridica: z.boolean(),
    tipo_natureza_juridica_id: z.string(),
    cnae: z.string(),

})


export const PessoaEntity = z.object({

    _id: z.string(),
    _criado_em: z.date(),
    _criado_por_id: z.string(),
    _atualizado_em: z.date().optional(),
    _atualizado_por_id: z.string().optional(),
    _excluido_em: z.date().optional(),
    _excluido_por_id: z.string().optional(),

    filial: z.boolean(),
    razao_social: z.string(),
    nome_fantasia: z.string(),
    cnpj_cpf: z.string(),
    inscricao_estadual: z.string(),
    pessoa_juridica: z.boolean(),
    tipo_natureza_juridica_id: z.string(),
    tipo_natureza_juridica: NaturezaJuridicaEntity,
    cnae: z.string(),

})


export const PessoaPsqAvancado = z.object({

})