import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"
import { ScrollArea } from "@/components/ui/scroll-area"
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/produto/nav')({
  component: RouteComponent,
})

interface IMesas {
  titulo: string,
  subTitulo: string,
  index: number,
  form: string
}
function RouteComponent() {

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const mesas = useRef<IMesas[]>([])

  mesas.current = ([
    {
      titulo: "PRODUTO",
      subTitulo: "Contexto de Produto",
      index: 0,
      form: "<TableFormProduto />"
    },
    {
      titulo: "GRUPO",
      subTitulo: "Contexto de Produto/Grupo",
      index: 1,
      form: "<TableFormProduto />"
    },
    {
      titulo: "SUB GRUPO",
      subTitulo: "Contexto de Produto/Grupo/Sub Gupo",
      index: 3,
      form: "<TableFormProduto />"
    },
  ])

  setTimeout(() => {
    if (!api) {
      return
    }
    api.scrollTo(2)
  }, 2000)


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
    <div className="w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",

        }}
        onMouseEnter={() => console.log('mouse entrou na area ')}
        onMouseLeave={() => console.log('mouse deixou a area ')}
        className="w-full px-10"
      >
        <CarouselContent
          className='w-full'
        >
          {mesas.current.map((m: IMesas) => (
            <CarouselItem
              key={m.index}
              className=" w-full"
            >
              <ScrollArea className="w-full h-[calc(100vh-140px)] border border-lime-600">



                ( return m.form)


              </ScrollArea>
            </CarouselItem>
          ))}
        </CarouselContent>

      </Carousel>
    </div>
  )
}
