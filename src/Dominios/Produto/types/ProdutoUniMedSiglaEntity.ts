import z from "zod";


export const ProdutoUniMedSiglaCriar = z.object({


    titulo: z.string(),

    descricao: z.string(),


})
export const ProdutoUniMedSiglaEntity = z.object({

    _id: z.string(),
    _criado_em: z.date(),
    _criado_por_id: z.string(),
    _atualizado_em: z.date().optional(),
    _atualizado_por_id: z.string().optional(),
    _excluido_em: z.date().optional(),
    _excluido_por_id: z.string().optional(),

    sigla: z.string(),

    descricao: z.string(),


})
