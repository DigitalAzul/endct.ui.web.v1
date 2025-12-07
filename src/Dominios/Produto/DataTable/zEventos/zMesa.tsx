//import { ulid } from "ulid";
import { create } from 'zustand';
import { SUB_DOMINIO, type IMesaDominio } from './eventTypes';





interface zMesaDominioProduto {
    mesas: IMesaDominio[],
    mesaCorrente: IMesaDominio,
    tituloContexto: {
        titulo: string,
        subTitulo: string
    },
    setMesas: (mesas: IMesaDominio[]) => void;
    setMesaCorrente: (mesa: IMesaDominio) => void;
    setTituloContexto: (tituloContexto: { titulo: string, subTitulo: string }) => void;

}



export const zMesaDominioProduto = create<zMesaDominioProduto>()((set) => ({
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

}))