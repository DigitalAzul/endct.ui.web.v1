import z from "zod";


export const ProdutoMarcaEntity = z.object({


    titulo: z.string(),

    descricao: z.string(),


})
