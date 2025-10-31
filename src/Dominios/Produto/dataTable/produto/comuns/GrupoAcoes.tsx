import { PlusIcon, SearchIcon } from "lucide-react"
import { ulid } from "ulid"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { InputGroupButton } from "@/components/ui/input-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { PRODUTO_FORMULARIOS } from "@/Dominios/comuns/types/Formularios"
import { zProdutos } from "@/infra/servicos/zustand/dominios/Produtos/zProdutos"

export function GrupoAcoesProduto() {


    const { setFormulario } = zProdutos()

    const _novoProduto = () => {
        setFormulario(
            {
                id: ulid(),
                form: PRODUTO_FORMULARIOS.CAD_PRODUTO,
                tituloJanela: 'Cadastro de Produto',
                titulo: 'Produto',
                subTitulo: '',
                aberto: true,
            }
        )
    }
    const _pesquisaAvancada = () => {
        setFormulario(
            {
                id: ulid(),
                form: PRODUTO_FORMULARIOS.PSQ_PRODUTO,
                tituloJanela: 'Cadastro de Produto',
                titulo: 'Produto',
                subTitulo: '',
                aberto: true,
            }
        )
    }
    return (
        <div className="w-full flex flex-row justify-between items-center">

            <ButtonGroup>
                <Button
                    onClick={() => _novoProduto()}
                    variant="outline" size="lg">
                    <PlusIcon /> Cadastrar Produto
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
