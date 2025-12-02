import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { InputGroupButton } from "@/components/ui/input-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ProdutoPsqAvancado } from "@/Dominios/Produto/types/ProdutoEntity"
import { EVENTO, FORMULARIO } from "@/infra/servicos/zustand/types/eventTypes"
import { zAcoesDataTable } from "@/infra/servicos/zustand/zEventosForm"
import { PlusIcon, SearchIcon } from "lucide-react"
import { ProdutoSubGrupoEntity } from "../../types/ProdutoSubGrupoEntity"

export function GrupoAcoesProdutoSubGrupo() {

    const { setAcoesDataTable } = zAcoesDataTable()


    const _novo = () => {

        setAcoesDataTable(
            FORMULARIO.SUB_GRUPO,
            EVENTO.CRIAR,
            typeof ProdutoSubGrupoEntity,
            null
        )
    }
    const _pesquisaAvancada = () => {

        setAcoesDataTable(
            FORMULARIO.SUB_GRUPO,
            EVENTO.FILTRAR,
            typeof ProdutoPsqAvancado,
            null
        )

    }
    return (
        <div className="w-full flex md:flex-row flex-col gap-4 md:justify-between nd:items-center">

            <ButtonGroup>
                <Button
                    onClick={() => _novo()}
                    variant="outline" size="lg">
                    <PlusIcon /> Cadastrar Sub Grupo
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
