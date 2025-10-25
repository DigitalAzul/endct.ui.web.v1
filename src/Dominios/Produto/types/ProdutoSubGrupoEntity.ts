import z from "zod";


export const ProdutoSubGrupoEntity = z.object({
    _id: z.string(),
    _criado_em: z.date(),
    _criado_por_id: z.string(),
    _atualizado_em: z.date().optional(),
    _atualizado_por_id: z.string().optional(),
    _excluido_em: z.date().optional(),
    _excluido_por_id: z.string().optional(),


    titulo: z.string(),

    descricao: z.string(),
})


export const ProdutoSubGrupoArgs = z.object({

    titulo: z.string(),

    descricao: z.string(),
})
