

import { TableFormProduto } from '@/Dominios/Produto/dataTable/TableTupla';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/produto/produto')({
    component: RouteComponent,
})

function RouteComponent() {
    // const [abreSheetForm, setAbreSheetForm] = useState(true);


    return (

        <div className='px-10'>
            {/* <div className='flex flex-row justify-between '>
                <div className='leading-relaxed mb-10'>
                    <p className='text-xl font-semibold'>Contexto de</p>
                    <p className='text-3xl font-semibold'>Produtos & Afins</p>
                </div>
                <div className='p-2 rounded-md hover:bg-muted w-[40px] h-[40px] flex itec justify-center'>
                    <Grip onClick={() => setAbreSheetForm(!abreSheetForm)} />
                </div>
            </div> */}

            <TableFormProduto />



            {/* <Sheet open={abreSheetForm} onOpenChange={setAbreSheetForm}>

                <SheetContent className='md:w-[496px]'>
                    <SheetHeader className='h-0'>
                        <SheetTitle className='h-0'></SheetTitle>
                        <SheetDescription className='h-0'></SheetDescription>
                    </SheetHeader>
                    <div className="h-screen">
                        <div className='p-4 py-10 font-semibold'>
                            <p className='text-xl'>Contexto para </p>
                            <p className='text-3xl'>Produtos & Afins</p>
                        </div>
                        <Separator className='mt-3 mb-10' />
                        <div className='flex flex-col gap-4 p-4'>

                            <Link className='px-6 py-4 hover:bg-muted border rounded-md'
                                to={'/produto'}
                            >
                                <p className='text-2xl'>Grupos</p>
                                <p className='text-md pt-2'>Eventos para cadastros, edições e excluxão.</p>
                            </Link>
                            <div className='px-6 py-4 hover:bg-muted border rounded-md'>
                                <p className='text-2xl'>Grupos</p>
                                <p className='text-md pt-2'>Eventos para cadastros, edições e excluxão.</p>
                            </div>
                            <div className='px-6 py-4 hover:bg-muted border rounded-md'>
                                <p className='text-2xl'>Sub Grupos</p>
                                <p className='text-md pt-2'>Eventos para cadastros, edições e excluxão.</p>
                            </div>


                        </div>
                    </div>
                </SheetContent>
            </Sheet> */}
        </div>
    )
}
