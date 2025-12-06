import z from "zod";


export const ProdutoUniMedidaEntity = z.object({

    _id: z.string(),
    _criado_em: z.date(),
    _criado_por_id: z.string(),
    _atualizado_em: z.date().optional(),
    _atualizado_por_id: z.string().optional(),
    _excluido_em: z.date().optional(),
    _excluido_por_id: z.string().optional(),



    sigla_unidade_primaria_id: z.string(),

    fator_conversao_primaria: z.string(),

    ha_segunda_unidade: z.boolean(),

    sigla_unidade_secundaria_id: z.boolean(),

    fator_conversao_secundaria: z.boolean(),

    titulo: z.string(),

    descricao: z.string(),

})
export const ProdutoUniMedidaArgs = z.object({

    sigla_unidade_primaria_id: z.string(),

    fator_conversao_primaria: z.string(),

    ha_segunda_unidade: z.boolean(),

    sigla_unidade_secundaria_id: z.boolean(),

    fator_conversao_secundaria: z.boolean(),

    titulo: z.string(),

    descricao: z.string(),

})

// sigla_unidade_primaria_id: z.string().optional(),
// fator_conversao_primaria: z.string().optional(),
// ha_segunda_unidade: z.string().optional(),
// sigla_unidade_secundaria_id: z.string().optional(),
// fator_conversao_secundaria: z.string().optional(),