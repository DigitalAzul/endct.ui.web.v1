import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { GripVertical } from "lucide-react"


// interface ITuplaMenuDireitoProps {
//     icon?: ElementType
// }

export function TuplaMenuDireito() {

    return (
        <div className="relative w-[40px] h-[180px] rounded-r-[10px] flex flex-row justify-between">
            <div className="flex flex-col justify-around items-center z-translate-x-[6px] w-[40px]">

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <GripVertical className="hover:text-muted" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end">
                        <DropdownMenuLabel className="py-3">AÇÕES</DropdownMenuLabel>
                        <Separator />
                        <DropdownMenuGroup className="p-2">
                            <DropdownMenuItem className="py-3">
                                EDITAR
                            </DropdownMenuItem>
                            <DropdownMenuItem className="py-3">
                                RETORNAR
                            </DropdownMenuItem>
                            <DropdownMenuItem className="py-3">
                                EXCLUIR
                            </DropdownMenuItem>

                        </DropdownMenuGroup>

                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    )
}