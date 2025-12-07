import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { InputGroupButton } from "@/components/ui/input-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import type { IGrupoDeAcoesProps } from "@/Dominios/_Comuns/types/grupoDeAcoesTableTupla"
import { zAcoesDataTable } from "@/Dominios/Produto/DataTable/zEventos/zEventosForm"
import { ProdutoPsqAvancado } from "@/Dominios/Produto/types/ProdutoEntity"
import { PlusIcon, RefreshCcw, SearchIcon } from "lucide-react"
import { ProdutoGrupoEntity } from "../../types/ProdutoGrupoEntity"
import { EVENTO, FORMULARIO } from "../zEventos/eventTypes"



export function GrupoAcoesProdutoGrupo(props: IGrupoDeAcoesProps) {

    const { setAcoesDataTable } = zAcoesDataTable()


    const _novo = () => {

        setAcoesDataTable(
            FORMULARIO.GRUPO,
            EVENTO.CRIAR,
            typeof ProdutoGrupoEntity,
            null
        )
    }
    const _pesquisaAvancada = () => {

        setAcoesDataTable(
            FORMULARIO.GRUPO,
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
                    onClick={() => _novo()}
                    variant="outline" size="lg">
                    <PlusIcon /> Cadastrar Grupo de Produto
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
