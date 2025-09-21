import z from "zod";


export const ProdutoSubGrupoEntity = z.object({


    titulo: z.string(),

    descricao: z.string(),


})
