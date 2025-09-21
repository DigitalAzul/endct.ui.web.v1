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




export const Route = createFileRoute('/')({
  component: App,
})

function App() {

  const { formulario, fecharFormulario, canalCadForms } = zdb_SheetCadForm()


  const [abreSheetForm, setAbreSheetForm] = useState(false)

  useEffect(() => {

    console.log('formulario, aberto >>', formulario)

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
          return <ProdutoForm callBackFunction={function ({ }: Tcf) {
            throw new Error('Function not implemented.')
          }} />
          break;
        case 'CAD_PROD_GRUPO':
          return <ProdutoGrupoForm callBackFunction={function ({ }: Tcf) {
            throw new Error('Function not implemented.')
          }} />
          break;
        case 'CAD_PROD_SUB_GRUPO':
          return <ProdutoGrupoForm callBackFunction={function ({ }: Tcf) {
            throw new Error('Function not implemented.')
          }} />
          break;
        case 'CAD_PROD_MARCA':
          return <ProdutoMarcaForm callBackFunction={function ({ }: Tcf) {
            throw new Error('Function not implemented.')
          }} />
          break;
        case 'CAD_PROD_UNI_MED':
          return <ProdutoUniMedidaForm callBackFunction={function ({ }: Tcf) {
            throw new Error('Function not implemented.')
          }} />
          break;
        case 'CAD_PROD_UNI_MED_SIGLA':
          return <ProdutoUniMedSiglaForm callBackFunction={function ({ }: Tcf) {
            throw new Error('Function not implemented.')
          }} />
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
