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
                        titulo: 'produto',
                        links: [
                            {
                                id: ulid(),
                                form: "CAD_PRODUTO",
                                tituloJanela: 'Cadastro de Produto',
                                titulo: 'Produto',
                                subTitulo: '',
                                aberto: false,

                            },
                            {
                                id: ulid(),
                                form: 'CAD_PROD_GRUPO',
                                tituloJanela: 'Cadastro de Grupo de Produto',
                                titulo: 'Grupo de Produtos',
                                subTitulo: '',
                                aberto: false,
                            },
                            {
                                id: ulid(),
                                form: 'CAD_PROD_SUB_GRUPO',
                                tituloJanela: 'Cadastro de sub Produto',
                                titulo: 'Sub Grupo Produtos',
                                subTitulo: '',
                                aberto: false,
                            },
                            {
                                id: ulid(),
                                form: 'CAD_PROD_MARCA',
                                tituloJanela: 'Cadastro de Marca',
                                titulo: 'Marcas',
                                subTitulo: '',
                                aberto: false,
                            },
                            {
                                id: ulid(),
                                form: 'CAD_PROD_UNI_MED',
                                tituloJanela: 'Cadastro de Uni. Medida',
                                titulo: 'Unidade de Medida',
                                subTitulo: '',
                                aberto: false,
                            },
                            {
                                id: ulid(),
                                form: 'CAD_PROD_UNI_MED_SIGLA',
                                tituloJanela: 'Cadastro de Sigla Unid.',
                                titulo: 'Sigla Unidade',
                                subTitulo: '',
                                aberto: false,
                            },
                        ]
                    }
                ]
            }

        }))
    },
}))