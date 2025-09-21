import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import type { IGrupoRota, TZLink } from "@/Dominios/comuns/types/Formularios"
import { ChevronDown, Circle } from "lucide-react"
import { useEffect } from "react"
import { zdb_RC0 } from "../servicos/zustand/zdb_rc0"
import { zdb_SheetCadForm } from "../servicos/zustand/zdb_SheetCadForm"

const items = [
    {
        formulario: "CAD_PRODUTO",
        titulo: "Produtos",
        url: "#",
        icon: Circle,
    },
    {
        formulario: "CAD_PRODUTO",
        titulo: "Inbox",
        url: "#",
        icon: Circle,
    },
    {
        formulario: "CAD_PRODUTO",
        titulo: "Calendar",
        url: "#",
        icon: Circle,
    },
    {
        formulario: "CAD_PRODUTO",
        titulo: "Search",
        url: "#",
        icon: Circle,
    },
    {
        formulario: "CAD_PRODUTO",
        titulo: "Settings",
        url: "#",
        icon: Circle,
    },
]



export function AppSidebar() {


    const { getRotas, rotas } = zdb_RC0()

    const { abrirFormulario, pingCanalCadForms } = zdb_SheetCadForm()

    useEffect(() => {
        const i = async () => {
            await getRotas()
        }
        i()

    }, [])
    function _AbrirFormulario(form: string) {

        rotas.grupos.map((r: IGrupoRota) => {
            const _r = r.links.find((i: TZLink) => i.form == form)
            pingCanalCadForms()
            if (_r) abrirFormulario(_r)
        })
        // const f = rotas.find((i: IRotas) => i.grupo.links.form == form)
        // pingCanalCadForms()
        // if (f) abrirFormulario(f)
    }



    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    Empresa
                                    <ChevronDown className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                                <DropdownMenuItem className="w-[--radix-popper-anchor-width]">
                                    <span>Empresa A</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Empresa B</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>

                {rotas.grupos.map((r: IGrupoRota) => (
                    <SidebarGroup
                        key={r.id}
                    >
                        <SidebarGroupLabel className="text-lg uppercase">{r.titulo}</SidebarGroupLabel>
                        <SidebarGroupContent className=" border-t pt-2 mt-3">
                            <SidebarMenu>
                                {r.links.map((i: TZLink) => (
                                    <SidebarMenuItem key={i.id}>
                                        <SidebarMenuButton asChild
                                            onClick={() => _AbrirFormulario(i.form)}
                                        >
                                            <p>
                                                <span>{i.titulo}</span>
                                            </p>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}


                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}