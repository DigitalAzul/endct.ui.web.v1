import { z } from 'zod';

export const ProdutoGrupoEntity = z.object({
    _id: z.string(),
    _criado_em: z.date(),
    _criado_por_id: z.string(),
    _atualizado_em: z.date().optional(),
    _atualizado_por_id: z.string().optional(),
    _excluido_em: z.date().optional(),
    _excluido_por_id: z.string().optional(),


    titulo: z.string().min(1),

    descricao: z.string().min(1)
})


export const ProdutoGrupoArgs = z.object({

    titulo: z.string().min(1),

    descricao: z.string().min(1)
})


export const ProdutoGRupoPsqAvancado = z.object({
    titulo: z.string().min(1),
    descricao: z.string().min(1)

})