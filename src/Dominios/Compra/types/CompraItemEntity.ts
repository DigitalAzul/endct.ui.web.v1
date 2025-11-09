import z from 'zod'

export const CompraItemEntity = z.object({

    _id: z.string(),
    _criado_em: z.date(),
    _criado_por_id: z.string(),
    _atualizado_em: z.date().optional(),
    _atualizado_por_id: z.string().optional(),
    _excluido_em: z.date().optional(),
    _excluido_por_id: z.string().optional(),


    previsao_entrega: z.date(),

    compraId: z.string(),

    produtoId: z.string(),

    quantidade: z.number(),

    valor_esperado: z.number(),

    valor_negociado: z.number(),

    desconto: z.number(),

    valor_total: z.number()


})

export const CompraItemSchema = z.object({


    previsao_entrega: z.date(),

    compraId: z.string(),

    produtoId: z.string(),

    quantidade: z.number(),

    valor_esperado: z.number(),

    valor_negociado: z.number(),

    desconto: z.number(),

    valor_total: z.number()


})