import { ulid } from "ulid";
import { create } from 'zustand';





interface zIRC0 {
    rotas: any, //IRotas;
    getRotas: () => void;

}



export const zdb_RC0 = create<zIRC0>()((set) => ({
    rotas: {
        grupos: []
    }
    ,
    getRotas: () => {
        set(() => ({
            rotas:
            {
                grupos: [
                    {
                        id: ulid(),
                        titulo: 'DOMÍNIOS ',
                        links: [
                            {
                                id: ulid(),
                                tituloJanela: 'Cadastro de Produto',
                                titulo: 'Produto',
                                subTitulo: '',
                                url: '/produto',
                                aberto: false,

                            },
                            {
                                id: ulid(),
                                tituloJanela: 'Cadastro Pesssoas Físicas e Júridicas',
                                titulo: 'Pessoas',
                                subTitulo: '',
                                url: '/pessoa',
                                aberto: false,
                            },
                            {
                                id: ulid(),
                                tituloJanela: 'Cadastro de sub Produto',
                                titulo: 'Outros',
                                subTitulo: '',
                                url: '/outros',
                                aberto: false,
                            },

                        ]
                    }
                ]
            }

        }))
    },
}))