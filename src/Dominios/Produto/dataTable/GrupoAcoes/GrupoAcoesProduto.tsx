import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { InputGroupButton } from "@/components/ui/input-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import type { TGrupoDeAcoesCB } from "@/Dominios/comuns/types/grupoDeAcoesTableTupla"
import { ProdutoEntity, ProdutoPsqAvancado } from "@/Dominios/Produto/types/ProdutoEntity"
import { EVENTO, FORMULARIO } from "@/infra/servicos/zustand/types/eventTypes"
import { zAcoesDataTable } from "@/infra/servicos/zustand/zEventosForm"
import { PlusIcon, RefreshCcw, SearchIcon } from "lucide-react"


interface Iprops {
    callBackFunction: TGrupoDeAcoesCB,
    trabalhando?: boolean
}
export function GrupoAcoesProduto(props: Iprops) {

    const { setAcoesDataTable } = zAcoesDataTable()


    const _novoProduto = () => {

        setAcoesDataTable(
            FORMULARIO.PRODUTO,
            EVENTO.CRIAR,
            typeof ProdutoEntity,
            null
        )
    }
    const _pesquisaAvancada = () => {

        setAcoesDataTable(
            FORMULARIO.PRODUTO,
            EVENTO.FILTRAR,
            typeof ProdutoPsqAvancado,
            null
        )
    }
    const _atualizarLista = () => {
        props.callBackFunction({ exe: 'RECARREGAR' })

    }
    return (
        <div className="w-full flex flex-row justify-between items-center">

            <ButtonGroup>
                <Button
                    onClick={() => _novoProduto()}
                    variant="outline" size="lg">
                    <PlusIcon className="mr-2" /> Cadastrar Produto
                </Button>
                <Button
                    onClick={() => _atualizarLista()}
                    variant="outline" size="lg">
                    <RefreshCcw className={`ml-2 ${props.trabalhando ? 'animate-spin' : 'animate-none'}`} /> Atualizar Lista
                </Button>
            </ButtonGroup>

            <ButtonGroup className="flex flex-row items-center">
                <Input placeholder="Pesquisa rápida..." className="h-10" />
                <Button variant="outline" aria-label="Search" className="h-10">
                    <SearchIcon />
                </Button>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <InputGroupButton
                            size="icon-xs"
                            data-active={true}
                            onClick={() => _pesquisaAvancada()}
                            variant="outline" aria-label="Search" className="h-10"
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
