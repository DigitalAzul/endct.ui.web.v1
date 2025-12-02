import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { createFileRoute } from '@tanstack/react-router';
import { Grip, Slash } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TableFormProduto } from "@/Dominios/Produto/dataTable/TableTupla";
export const Route = createFileRoute('/produto/')({
  component: RouteComponent,
})


interface IMesas {
  titulo: string,
  subTitulo: string,
  index: number,
  form: string
}
function RouteComponent() {


  const [abreSheetForm, setAbreSheetForm] = useState(false)

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const mesas = useRef<IMesas[]>([])


  const irPara = ((index: number) => {
    if (!api) {
      return
    }
    api.scrollTo(index)
  })


  mesas.current = ([
    {
      titulo: "VISÃO",
      subTitulo: "Visão Geral",
      index: 0,
      form: "<TableFormProduto />"
    },
    {
      titulo: "PRODUTO",
      subTitulo: "Contexto de Produto",
      index: 1,
      form: "<TableFormProduto />"
    },
    {
      titulo: "GRUPO",
      subTitulo: "Contexto de Produto/Grupo",
      index: 2,
      form: "<TableFormProduto />"
    },
    {
      titulo: "SUB GRUPO",
      subTitulo: "Contexto de Produto/Grupo/Sub Gupo",
      index: 3,
      form: "<TableFormProduto />"
    },
  ])



  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])







  return (

    <div className='w-[full] pl-10'>

      <div className='flex flex-row justify-between min-h-[100px] px-10'>
        <div className='flex flex-row gap-10'>
          <div className='leading-relaxed'>
            <p className='text-xl font-semibold'>Contexto de</p>
            <p className='text-3xl font-semibold'>Produtos & Afins</p>
          </div>
          <div className='flex flex-row items-center gap-3'>
            <Slash size={18} className="text-lime-500" />
            <div className="text-lime-500"> Produto</div>
          </div>
        </div>

        <div className='p-2 rounded-md hover:bg-muted w-[40px] h-[40px] flex itec justify-center'>
          <DropdownMenu dir='ltr'>
            <DropdownMenuTrigger>
              <Grip />
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'
              className='w-[260px]'>
              <DropdownMenuLabel className='text-lg'>Contexto de Produto</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => irPara(0)}
                className='p-4 text-md tracking-widest'>Visão Geral</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => irPara(1)}
                className='p-4 text-md tracking-widest'>Produto</DropdownMenuItem>
              <DropdownMenuItem onClick={() => irPara(2)} className='p-4 text-md tracking-widest'>Grupo</DropdownMenuItem>
              <DropdownMenuItem onClick={() => irPara(3)} className='p-4 text-md tracking-widest'>Sub Grupo</DropdownMenuItem>
              <DropdownMenuItem onClick={() => irPara(4)} className='p-4 text-md tracking-widest'>Unidade de Medida</DropdownMenuItem>
              <DropdownMenuItem onClick={() => irPara(5)} className='p-4 text-md tracking-widest'>Marcas</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>


      <div className="w-full">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",

          }}
          onMouseEnter={() => console.log('mouse entrou na area ')}
          onMouseLeave={() => console.log('mouse deixou a area ')}
          className="w-full"
        >
          <CarouselContent
            className='w-full'
          >
            {mesas.current.map((m: IMesas) => (
              <CarouselItem
                key={m.index}
                className=" w-full"
              >
                <ScrollArea className="w-full h-[calc(100vh-160px)] border  rounded-2xl">



                  <TableFormProduto />


                </ScrollArea>
              </CarouselItem>
            ))}
          </CarouselContent>

        </Carousel>
      </div>



    </div>
  )

}
