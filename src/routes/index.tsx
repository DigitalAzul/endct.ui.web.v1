// https://javascript.plainenglish.io/zustand-and-tanstack-query-the-dynamic-duo-that-simplified-my-react-state-management-e71b924efb90

import { createFileRoute } from '@tanstack/react-router'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "@/components/da/shadcn/sheet"
import type { Tcf } from '@/Dominios/comuns/types/crudFormEnum'
import { ProdutoForm } from '@/Dominios/Produto/forms/ProdutoForm'
import { ProdutoGrupoForm } from '@/Dominios/Produto/forms/ProdutoGrupoForm'
import { ProdutoMarcaForm } from '@/Dominios/Produto/forms/ProdutoMarcaForm'
import { ProdutoUniMedidaForm } from '@/Dominios/Produto/forms/ProdutoUniMedidaForm'
import { ProdutoUniMedSiglaForm } from '@/Dominios/Produto/forms/ProdutoUniMedSiglaForm'
import { zdb_SheetCadForm } from '@/infra/servicos/zustand/zdb_SheetCadForm'
import { useEffect, useState } from 'react'


import { OBTER_GRUPO_PRODUTOS } from '@/infra/graphql/query/obt_grupo_prod'
import { useQuery } from "@apollo/client/react"


export const Route = createFileRoute('/')({
  component: App,
})

function App() {

  const { formulario, fecharFormulario, canalCadForms } = zdb_SheetCadForm()


  const [abreSheetForm, setAbreSheetForm] = useState(false);


  const { loading, error, data } = useQuery(OBTER_GRUPO_PRODUTOS);
  console.log('formulario, aberto >>', loading, error, data)



  const _callBackFunction = (c: Tcf) => {
    if (c.exe == 'DISMISS') {
      fecharFormulario('')
      setAbreSheetForm(false)
    }
  }
  useEffect(() => {

    if (formulario.aberto == true) {
      setAbreSheetForm(true)
    } else {
      fecharFormulario('')
    }


  }, [canalCadForms])

  const fromProduto = () => {
    const i = () => {
      switch (formulario.form) {
        case 'CAD_PRODUTO':
          return <ProdutoForm callBackFunction={(c) => _callBackFunction(c)} />
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

            {/* <TesteForm /> */}

          </div>
        </SheetContent>
      </Sheet>
    )
  }



  return (
    <div className="w-full h-[calc(100h-40px)]">
      {
        fromProduto()
      }

    </div>
  )
}
