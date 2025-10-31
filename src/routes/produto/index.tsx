import { TableForm } from '@/Dominios/Produto/dataTable/produto/TableForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/produto/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (

        <div className='p-20'>
            <TableForm />
        </div>
    )
}
