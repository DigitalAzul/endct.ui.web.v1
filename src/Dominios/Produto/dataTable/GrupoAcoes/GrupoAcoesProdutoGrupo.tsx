import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { InputGroupButton } from "@/components/ui/input-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ProdutoPsqAvancado } from "@/Dominios/Produto/types/ProdutoEntity"
import { EVENTO, FORMULARIO } from "@/infra/servicos/zustand/types/eventTypes"
import { zAcoesDataTable } from "@/infra/servicos/zustand/zEventosForm"
import { PlusIcon, SearchIcon } from "lucide-react"
import { ProdutoGrupoEntity } from "../../types/ProdutoGrupoEntity"

export function GrupoAcoesProdutoGrupo() {

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
    return (
        <div className="w-full flex flex-row justify-between items-center">

            <ButtonGroup>
                <Button
                    onClick={() => _novo()}
                    variant="outline" size="lg">
                    <PlusIcon /> Cadastrar Grupo de Produto
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
