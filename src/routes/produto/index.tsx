
import { TableFormProduto } from '@/Dominios/Produto/dataTable/TableTupla';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/produto/')({
    component: RouteComponent,
})

function RouteComponent() {




    return (

        <div className='p-20'>

            <TableFormProduto />
        </div>
    )
}
