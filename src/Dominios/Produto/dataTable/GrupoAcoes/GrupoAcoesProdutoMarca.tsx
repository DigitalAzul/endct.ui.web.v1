import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { InputGroupButton } from "@/components/ui/input-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import type { IGrupoDeAcoesProps } from "@/Dominios/comuns/types/grupoDeAcoesTableTupla"
import { EVENTO, FORMULARIO } from "@/infra/servicos/zustand/types/eventTypes"
import { zAcoesDataTable } from "@/infra/servicos/zustand/zEventosForm"
import { PlusIcon, RefreshCcw, SearchIcon } from "lucide-react"
import { ProdutoMarcasEntity } from "../../types/ProdutoMarcasEntity"



export function GrupoAcoesProdutoMarca(props: IGrupoDeAcoesProps) {

    const { setAcoesDataTable } = zAcoesDataTable()


    const _novo = () => {

        setAcoesDataTable(
            FORMULARIO.MARCAS,
            EVENTO.CRIAR,
            typeof ProdutoMarcasEntity,
            null
        )
    }
    const _pesquisaAvancada = () => {

        setAcoesDataTable(
            FORMULARIO.SUB_GRUPO,
            EVENTO.FILTRAR,
            typeof ProdutoMarcasEntity,
            null
        )
    }
    const _atualizarLista = () => {
        props.callBackFunction({ exe: 'RECARREGAR' })

    }
    return (
        <div className="w-full flex md:flex-row flex-col gap-4 md:justify-between nd:items-center">

            <ButtonGroup>
                <Button
                    onClick={() => _novo()}
                    variant="outline" size="lg">
                    <PlusIcon /> Cadastrar Marca
                </Button>
                <Button
                    onClick={() => _atualizarLista()}
                    variant="outline" size="lg">
                    <RefreshCcw className={`ml-2 ${props.trabalhando ? 'animate-spin' : 'animate-none'}`} /> Atualizar Lista
                </Button>
            </ButtonGroup>

            <ButtonGroup className="flex flex-row items-center w-full md:w-fit">
                <Input placeholder="Pesquisa rápida..." className="h-20 md:h-10 pl-10 md:pl-4" />
                <Button variant="outline" aria-label="Search" className="h-20 md:h-10">
                    <SearchIcon />
                </Button>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <InputGroupButton
                            size="icon-xs"
                            data-active={true}
                            onClick={() => _pesquisaAvancada()}
                            variant="outline" aria-label="Search" className="h-20 md:h-10"
                        >
                            <PlusIcon />
                        </InputGroupButton>
                    </TooltipTrigger>
                    <TooltipContent align="end">Pesquisa avançada</TooltipContent>
                </Tooltip>
            </ButtonGroup>

        </div>
    )
}
