

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { EVENTO, FORMULARIO } from './types/eventTypes';




interface IzAcoesDataTable {

    formSheet: {
        form: FORMULARIO,
        acao: EVENTO,
        entity: any,
        dados: any
    };
    setAcoesDataTable: (form: FORMULARIO, acao: EVENTO, entity: any, dados?: any) => void
    resetFormSheet: () => void

}


export const zAcoesDataTable = create<IzAcoesDataTable>()(
    persist(
        (set) => ({

            formSheet: {
                form: FORMULARIO.NENHUM,
                acao: EVENTO.NENHUM,
                entity: null,
                dados: null
            },



            setAcoesDataTable: (form: FORMULARIO, acao: EVENTO, entity: any, dados: any) => {
                set(() => ({ formSheet: { acao: acao, form: form, entity: typeof entity, dados: dados } }))
            },
            resetFormSheet: () => {
                set(() => ({ formSheet: { acao: EVENTO.NENHUM, form: FORMULARIO.NENHUM, entity: null, dados: null } }))
            },
        }),
        {
            name: 'da-rc0',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                // usuarioCorrente: state.usuarioCorrente,
                // token: state.token,
            }),
        }
    )
)

