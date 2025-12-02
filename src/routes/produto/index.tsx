import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ScrollArea } from "@/components/ui/scroll-area";
import { TableFormProduto } from "@/Dominios/Produto/dataTable/TableTupla";
import { zMesaDominioProduto } from '@/infra/servicos/zustand/dominios/Produtos/zProdutos';
import type { IMesaDominio } from '@/infra/servicos/zustand/types/mesaDominio/interfaces';
import { createFileRoute } from '@tanstack/react-router';
import { Grip, Slash } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ulid } from "ulid";
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

  const { setMesas, mesas, setMesaCorrente, mesaCorrente, setTituloContexto, tituloContexto } = zMesaDominioProduto()


  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  // pode ser aproveitado
  console.log(current, count)

  // GET DAS MESAS DESTE DOMINIO
  useEffect(() => {
    setMesas(
      [
        {
          titulo: "VISÃO",
          janela: "Visão Geral",
          index: 0,

        },
        {
          titulo: "PRODUTO",
          janela: "Contexto de Produto",
          index: 1,

        },
        {
          titulo: "GRUPO",
          janela: "Contexto de Produto/Grupo",
          index: 2,

        },
        {
          titulo: "SUB GRUPO",
          janela: "Contexto de Produto/Grupo/Sub Gupo",
          index: 3,

        },
      ]
    )
  }, [])

  // INICIA A MESA AO CARREGAR
  useEffect(() => {
    setMesaCorrente(mesas[0])
    setTituloContexto({ titulo: 'Contexto de', subTitulo: 'Produtos & Afins' })
  }, [mesas])


  // DEFINE MAULMENTE A MESA
  const irPara = ((index: number) => {
    if (!api) {
      return
    }
    const a = mesas.find((m: IMesaDominio) => m.index == index)
    if (!a) return
    setMesaCorrente(a)
  })


  // OBSERVA E DESLIZA PRA MESA SELECIONADA
  useEffect(() => {
    if (!api) return
    api.scrollTo(mesaCorrente.index)
  }, [mesaCorrente])









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


  const mesaDoDominioTitulo = () => {

    return (
      <div className='flex flex-row gap-10'>
        <div className='leading-relaxed'>
          <p className='text-xl font-semibold'>{tituloContexto.titulo}</p>
          <p className='text-3xl font-semibold'>{tituloContexto.subTitulo}</p>
        </div>
        <div className='flex flex-row items-center gap-3'>
          <Slash size={18} className="text-lime-500" />
          <div className="text-lime-500"> {mesaCorrente?.titulo}</div>
        </div>
      </div>
    )
  }

  const mesaDoDominioTopoAcoes = () => {

    return (
      <div className='p-2 rounded-md hover:bg-muted w-[40px] h-[40px] flex itec justify-center'>
        <DropdownMenu dir='ltr'>
          <DropdownMenuTrigger>
            <Grip />
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'
            className='w-[260px]'>
            <DropdownMenuLabel className='text-lg'>Contexto de Produto</DropdownMenuLabel>
            <DropdownMenuSeparator />


            {mesas.length > 0 && mesas.map((m: IMesaDominio) => (
              <DropdownMenuItem
                key={ulid()}
                onClick={() => irPara(m.index)}
                className={`${mesaCorrente?.index == m.index ? 'text-lime-600' : ''} p-4 text-md tracking-widest`}>
                {m.titulo}
              </DropdownMenuItem>
            ))}

          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }




  return (

    <div className='w-[full] pl-10'>

      <div className='flex flex-row justify-between min-h-[100px] px-10'>

        {
          mesaDoDominioTitulo()
        }

        {
          mesaDoDominioTopoAcoes()
        }

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
            {mesas.length > 0 && mesas.map((m: IMesaDominio) => (
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
