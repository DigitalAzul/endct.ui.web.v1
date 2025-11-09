import z from 'zod'

export const CompraEntity = z.object({

    _id: z.string(),
    _criado_em: z.date(),
    _criado_por_id: z.string(),
    _atualizado_em: z.date().optional(),
    _atualizado_por_id: z.string().optional(),
    _excluido_em: z.date().optional(),
    _excluido_por_id: z.string().optional(),


    previsao_entrega: z.date(),
    fornecedor_id: z.string(),


})

export const CompraSchema = z.object({

    previsao_entrega: z.date(),
    fornecedor_id: z.string(),


})