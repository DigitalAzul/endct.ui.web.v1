//import { ulid } from "ulid";
import { create } from 'zustand';
import type { IMesaDominio } from '../../types/mesaDominio/interfaces';





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
        titulo: ''
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