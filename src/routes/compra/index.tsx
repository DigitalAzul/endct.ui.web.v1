import { TableForm } from '@/Dominios/Compra/dataTable/TableTupla'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/compra/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (

    <div className='p-20'>
      <TableForm />
    </div>
  )
}
