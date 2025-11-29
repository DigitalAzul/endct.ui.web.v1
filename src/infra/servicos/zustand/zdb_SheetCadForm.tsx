import { PRODUTO_FORMULARIOS, type TZLink } from '@/Dominios/comuns/types/Formularios';
import { create } from 'zustand';




interface zIFormularios {
    formulario: TZLink;
    abrirFormulario: (formulario: TZLink) => void
    fecharFormulario: (id: TZLink['id']) => void
    canalCadForms: number
    pingCanalCadForms: () => void
}



export const zdb_SheetCadForm = create<zIFormularios>()((set) => ({
    formulario: {
        id: '',
        form: PRODUTO_FORMULARIOS.NENHUM,
        tituloJanela: '',
        titulo: '',
        subTitulo: '',
        aberto: false,
    },
    canalCadForms: 0,
    pingCanalCadForms: () => set({ canalCadForms: new Date().getTime() }),
    abrirFormulario: (formulario) => {
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
    },
    fecharFormulario: (id: string) => {
        console.log(id)
        set(() => (
            {
                formulario: {
                    id: '',
                    form: PRODUTO_FORMULARIOS.NENHUM,
                    tituloJanela: '',
                    titulo: '',
                    subTitulo: '',
                    aberto: false,
                }
            }
        ))
    }
}))