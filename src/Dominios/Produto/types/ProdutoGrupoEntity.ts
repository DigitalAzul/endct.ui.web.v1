import { z } from 'zod';
import { ProdutoSubGrupoEntity } from './ProdutoSubGrupoEntity';

export const ProdutoGrupoEntity = z.object({

    subgrupo: z.object(ProdutoSubGrupoEntity).optional(),



    titulo: z.string().min(1),



    descricao: z.string().min(1)
})