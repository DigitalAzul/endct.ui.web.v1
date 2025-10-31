import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function GrupoAcoesGeriasDominioProduto() {
    return (
        <div className="flex flex-col items-start gap-8">

            <ButtonGroup>
                <Button variant="outline" size="lg">
                    Produto
                </Button>
                <Button variant="outline" size="lg">
                    Grupo
                </Button>
                <Button variant="outline" size="lg">
                    Sub Grupo
                </Button>
                <Button variant="outline" size="lg">
                    Marca
                </Button>
                <Button variant="outline" size="lg">
                    Undades de Medidas
                </Button>
                <Button variant="outline" size="lg">
                    Siglas Undades de Medidas
                </Button>
                <Button variant="outline" size="icon-lg">
                    <PlusIcon />
                </Button>
            </ButtonGroup>
        </div>
    )
}
