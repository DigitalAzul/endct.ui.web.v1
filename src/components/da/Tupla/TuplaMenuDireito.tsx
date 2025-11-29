import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { GripVertical } from "lucide-react"
import type { ElementType } from "react"

export interface IcallbackAcoes {
    titulo: string, descricao: string, acao: string
}
interface ITuplaMenuDireitoProps {
    icon?: ElementType
    acoes?: IcallbackAcoes[]
    callBack: (a: string) => void
}

export function TuplaMenuDireito({ acoes, callBack }: ITuplaMenuDireitoProps) {

    return (
        <div className="relative w-[40px] zh-[180px] rounded-r-[10px] flex flex-row justify-between">
            <div className="flex flex-col justify-around items-center z-translate-x-[6px] w-[40px]">

                <DropdownMenu>
                    <div className="flex flex-row justify-between items-center h-full w-[40px]">
                        <Separator orientation="vertical" />
                        <DropdownMenuTrigger asChild>
                            <GripVertical className="hover:text-muted -translate-x-1.5" />
                        </DropdownMenuTrigger>
                    </div>
                    <DropdownMenuContent className="w-56" align="end">
                        <DropdownMenuLabel className="py-3">AÇÕES</DropdownMenuLabel>
                        <Separator />
                        <DropdownMenuGroup className="p-2">
                            {acoes?.map((a: IcallbackAcoes) => (
                                <DropdownMenuItem
                                    key={a.titulo}
                                    onClick={() => callBack(a.acao)}
                                    className="py-3">
                                    <span className="uppercase">{a.titulo}</span>
                                </DropdownMenuItem>
                            )
                            )}
                            {/* <DropdownMenuItem className="py-3">
                                EDITAR
                            </DropdownMenuItem>
                            <DropdownMenuItem className="py-3">
                                RETORNAR
                            </DropdownMenuItem>
                            <DropdownMenuItem className="py-3">
                                EXCLUIR
                            </DropdownMenuItem> */}

                        </DropdownMenuGroup>

                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    )
}