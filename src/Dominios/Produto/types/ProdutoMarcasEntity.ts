import z from "zod";


export const ProdutoMarcasCriar = z.object({


    titulo: z.string().min(3, { error: 'Campo requerido! (MIM. 3 caracteres)' }),

    descricao: z.string(),


})
export const ProdutoMarcasEditar = z.object({
    _id: z.string().optional(),

    descricao: z.string(),

    titulo: z.string().optional().refine(val => {
        if (val !== undefined && val.length < 3) {
            return false;
        }
        return true;
    }, { message: "Informação requerida!" })


})
export const ProdutoMarcasEntity = z.object({

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
