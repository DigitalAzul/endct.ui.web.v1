import { TableFormProduto } from '@/Dominios/Produto/dataTable/TableTupla'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/produto/grupo')({
  component: RouteComponent,
})

function RouteComponent() {
  return (

    <div className='p-20'>
      <p>grupo</p>
      <TableFormProduto />
    </div>
  )
}
