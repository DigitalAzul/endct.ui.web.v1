import { PRODUTO_FORMULARIOS, type TZLink } from '@/Dominios/comuns/types/Formularios';
//import { ulid } from "ulid";
import { create } from 'zustand';





interface zProdutos {
    formulario: TZLink;
    setFormulario: (formulario: TZLink) => void;
}



export const zProdutos = create<zProdutos>()((set) => ({
    formulario: {
        id: '',
        form: PRODUTO_FORMULARIOS.NENHUM,
        tituloJanela: '',
        titulo: '',
        subTitulo: '',
        aberto: false,
    },
    setFormulario: (formulario) => {
        if (formulario) {
            set(() => ({
                formulario: {
                    id: formulario.id,
                    form: formulario.form,
                    tituloJanela: formulario.tituloJanela,
                    titulo: formulario.titulo,
                    subTitulo: formulario.subTitulo,
                    aberto: true,
                }
            }))
        } else {
            set(() => ({
                formulario: {
                    id: '',
                    form: PRODUTO_FORMULARIOS.NENHUM,
                    tituloJanela: '',
                    titulo: '',
                    subTitulo: '',
                    aberto: false,
                }
            }))
        }

    },
}))