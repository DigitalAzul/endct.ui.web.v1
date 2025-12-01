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
                        titulo: 'PRODUTO ',
                        links: [
                            {
                                id: ulid(),
                                tituloJanela: 'Cadastro de Produto',
                                titulo: 'Produto',
                                subTitulo: '',
                                url: '/produto/produto',
                                aberto: false,

                            },
                            {
                                id: ulid(),
                                tituloJanela: 'Cadastro de Grupo de Produto',
                                titulo: 'Grupo de Produtos',
                                subTitulo: '',
                                url: '/produto/grupo',
                                aberto: false,
                            },
                            {
                                id: ulid(),
                                tituloJanela: 'Cadastro de sub Produto',
                                titulo: 'Sub Grupo Produtos',
                                subTitulo: '',
                                url: '/produto/subGrupo',
                                aberto: false,
                            },
                            {
                                id: ulid(),
                                tituloJanela: 'Cadastro de Marca',
                                titulo: 'Marcas',
                                subTitulo: '',
                                aberto: false,
                                url: '/produto/marca',
                            },
                            {
                                id: ulid(),
                                tituloJanela: 'Cadastro de Uni. Medida',
                                titulo: 'Unidade de Medida',
                                subTitulo: '',
                                aberto: false,
                                url: '/produto/unidmedida',
                            },
                            {
                                id: ulid(),
                                tituloJanela: 'Cadastro de Sigla Unid.',
                                titulo: 'Sigla Unidade',
                                subTitulo: '',
                                url: '/produto/usigla',
                                aberto: false,
                            },
                        ]
                    }
                ]
            }

        }))
    },
}))