import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi
} from "@/components/ui/carousel";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ScrollArea } from "@/components/ui/scroll-area";
import { TableFormPessoa } from "@/Dominios/Pessoa/DataTable/TableTuplaPessoas";
import { TableFormPessoaVisao } from "@/Dominios/Pessoa/DataTable/TableTuplaPessoaVisao";
import { zMesaDominioPessoa } from "@/Dominios/Pessoa/DataTable/zEventos/zMesa";
import { PESSOA_SUB_DOMINIO, type IMesaPessoa } from "@/infra/types/mesaDominio/pessoa/interfaces";
import { createFileRoute } from '@tanstack/react-router';
import { Grip, Slash } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ulid } from "ulid";
export const Route = createFileRoute('/pessoa/')({
    component: RouteComponent,
})



function RouteComponent() {

    const { setMesas, mesas, setMesaCorrente, mesaCorrente, setTituloContexto, tituloContexto } = zMesaDominioPessoa()


    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    // pode ser aproveitado
    if (1 + 2 == 1) console.log(current, count)


    // INICIA O CARROUSSEL
    useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
            setMesaCorrente(mesas[api.selectedScrollSnap()])
        })
    }, [api])



    // GET DAS MESAS DESTE DOMINIO
    useEffect(() => {
        setMesas(
            [
                {
                    titulo: "VISÃO",
                    janela: "Visão Geral",
                    index: 0,
                    subDominio: PESSOA_SUB_DOMINIO.VISAO,
                },
                {
                    titulo: "PESSOAS",
                    janela: "Contexto de Pessoas Físicas e jurídicas",
                    index: 1,
                    subDominio: PESSOA_SUB_DOMINIO.PESSOAS,
                },
                {
                    titulo: "ENDEREÇOS",
                    janela: "Contexto de Produto/Endereços",
                    index: 2,
                    subDominio: PESSOA_SUB_DOMINIO.ENDERECOS,
                },
                {
                    titulo: "CONTATOS",
                    janela: "Contexto de Produto/Grupo/Contatos",
                    index: 3,
                    subDominio: PESSOA_SUB_DOMINIO.CONTATOS,
                },
            ]
        )
    }, [])

    // INICIA A MESA AO CARREGAR
    useEffect(() => {
        setMesaCorrente(mesas[0])
        setTituloContexto({ titulo: 'Contexto de', subTitulo: 'Pessoas Física/PJ & Afins' })
    }, [mesas])


    // DEFINE MAULMENTE A MESA
    const irPara = ((index: number) => {
        if (!api) {
            return
        }
        const a = mesas.find((m: IMesaPessoa) => m.index == index)
        if (!a) return
        setMesaCorrente(a)
    })


    // OBSERVA E DESLIZA PRA MESA SELECIONADA
    useEffect(() => {
        if (!api) return
        api.scrollTo(mesaCorrente.index)
    }, [mesaCorrente])







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


                        {mesas.length > 0 && mesas.map((m: IMesaPessoa) => (
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


    const fabricaTadaTable = (mesa: IMesaPessoa) => {


        switch (mesa.subDominio) {

            case 'VISAO':
                return <TableFormPessoaVisao />
                break;
            case 'PESSOAS':
                return <TableFormPessoa />
                break;
            case 'ENDERECOS':
                return <div>Endereço</div>
                break;
            case 'CONTATOS':
                return <div>Contatos</div>
                break;

            default:
                break;
        }

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
                    // onMouseEnter={() => console.log('mouse entrou na area ')}
                    // onMouseLeave={() => console.log('mouse deixou a area ')}
                    className="w-full"
                >
                    <CarouselContent
                        className='w-full'
                    >
                        {mesas.length > 0 && mesas.map((m: IMesaPessoa) => (
                            <CarouselItem
                                key={m.index}
                                className=" w-full"
                            >
                                <ScrollArea className="w-full h-[calc(100vh-160px)] border  rounded-2xl">



                                    {fabricaTadaTable(m)}


                                </ScrollArea>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                </Carousel>
            </div>



        </div>
    )

}
