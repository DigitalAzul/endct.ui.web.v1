

import { create } from 'zustand';
import { EVENTO, FORMULARIO, SUB_DOMINIO, type IMesaDominio } from './eventTypes';





interface IzAcoesDataTable {

    mesas: IMesaDominio[],
    mesaCorrente: IMesaDominio,
    tituloContexto: {
        titulo: string,
        subTitulo: string
    },
    setMesas: (mesas: IMesaDominio[]) => void;
    setMesaCorrente: (mesa: IMesaDominio) => void;
    setTituloContexto: (tituloContexto: { titulo: string, subTitulo: string }) => void;

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

        mesas: [],
        mesaCorrente: {
            index: -1,
            janela: '',
            titulo: '',
            subDominio: SUB_DOMINIO.VISAO,
        },
        tituloContexto: {
            titulo: '',
            subTitulo: ''
        },
        setMesas: (mesas: IMesaDominio[]) => {
            set(() => ({
                mesas: mesas
            }))
        },
        setMesaCorrente: (mesa: IMesaDominio) => {
            set(() => ({
                mesaCorrente: mesa
            }))
        },
        setTituloContexto: (tituloContexto: { titulo: string, subTitulo: string }) => {
            set(() => ({
                tituloContexto: {
                    titulo: tituloContexto.titulo,
                    subTitulo: tituloContexto.subTitulo
                },
            }))
        },
    }),


)

