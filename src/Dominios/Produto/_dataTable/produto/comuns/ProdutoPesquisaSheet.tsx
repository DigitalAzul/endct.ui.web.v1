import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/da/shadcn/sheet";
import type { Tcf } from "@/Dominios/comuns/types/crudFormEnum";
import { CADProdutoForm } from "@/Dominios/Produto/forms/CAD.ProdutoForm";
import { ProdutoGrupoForm } from "@/Dominios/Produto/forms/ProdutoGrupoForm";
import { ProdutoMarcaForm } from "@/Dominios/Produto/forms/ProdutoMarcaForm";
import { ProdutoPsqForm } from "@/Dominios/Produto/forms/ProdutoPsqForm";
import { ProdutoUniMedidaForm } from "@/Dominios/Produto/forms/ProdutoUniMedidaForm";
import { ProdutoUniMedSiglaForm } from "@/Dominios/Produto/forms/ProdutoUniMedSiglaForm";
import { zProdutos } from "@/infra/servicos/zustand/dominios/Produtos/zProdutos";
import { useEffect, useState } from "react";


interface IProdutoPesquisaSheet {
    abrir: boolean
}
const _callBackFunction = (c: Tcf) => {
    if (c.exe == 'DISMISS') {

    }
}


export function ProdutoPesquisaSheet({ abrir }: IProdutoPesquisaSheet) {

    const { formulario } = zProdutos()

    const [abreSheetForm, setAbreSheetForm] = useState(abrir);

    useEffect(() => {
        if (formulario.aberto === true) {
            setAbreSheetForm(true)
        } else {
            setAbreSheetForm(false)
        }
    }, [formulario])

    const i = () => {
        switch (formulario.form) {
            case 'CAD_PRODUTO':
                return <CADProdutoForm callBackFunction={(c) => _callBackFunction(c)} />
                break;
            case 'CAD_PROD_GRUPO':
                return <ProdutoGrupoForm callBackFunction={(c) => _callBackFunction(c)} />
                break;
            case 'CAD_PROD_SUB_GRUPO':
                return <ProdutoGrupoForm callBackFunction={(c) => _callBackFunction(c)} />
                break;
            case 'CAD_PROD_MARCA':
                return <ProdutoMarcaForm callBackFunction={(c) => _callBackFunction(c)} />
                break;
            case 'CAD_PROD_UNI_MED':
                return <ProdutoUniMedidaForm callBackFunction={(c) => _callBackFunction(c)} />
                break;
            case 'CAD_PROD_UNI_MED_SIGLA':
                return <ProdutoUniMedSiglaForm callBackFunction={(c) => _callBackFunction(c)} />
                break;
            case 'PSQ_PRODUTO':
                return <ProdutoPsqForm callBackFunction={(c) => _callBackFunction(c)} />
                break;

            default:
                break;
        }
    }

    return (
        <Sheet open={abreSheetForm} onOpenChange={setAbreSheetForm}>

            <SheetContent className='w-1/3'>
                <SheetHeader className='h-0'>
                    <SheetTitle className='h-0'></SheetTitle>
                    <SheetDescription className='h-0'></SheetDescription>
                </SheetHeader>
                <div className="h-screen">
                    {i()}
                </div>
            </SheetContent>
        </Sheet>
    )

}