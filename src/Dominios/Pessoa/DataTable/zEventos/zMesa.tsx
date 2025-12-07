//import { ulid } from "ulid";
import { PESSOA_SUB_DOMINIO, type IMesaPessoa } from '@/infra/types/mesaDominio/pessoa/interfaces';
import { create } from 'zustand';





interface zMesaDominioPessoas {
    mesas: IMesaPessoa[],
    mesaCorrente: IMesaPessoa,
    tituloContexto: {
        titulo: string,
        subTitulo: string
    },
    setMesas: (mesas: IMesaPessoa[]) => void;
    setMesaCorrente: (mesa: IMesaPessoa) => void;
    setTituloContexto: (tituloContexto: { titulo: string, subTitulo: string }) => void;

}



export const zMesaDominioPessoa = create<zMesaDominioPessoas>()((set) => ({
    mesas: [],
    mesaCorrente: {
        index: -1,
        janela: '',
        titulo: '',
        subDominio: PESSOA_SUB_DOMINIO.NENHUM,
    },
    tituloContexto: {
        titulo: '',
        subTitulo: ''
    },
    setMesas: (mesas: IMesaPessoa[]) => {
        set(() => ({
            mesas: mesas
        }))
    },
    setMesaCorrente: (mesa: IMesaPessoa) => {
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