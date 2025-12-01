import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem
} from "@/components/ui/sidebar"
import type { IGrupoRota, TZLink } from "@/Dominios/comuns/types/Formularios"
import { Link } from "@tanstack/react-router"
import { BadgeCheck, ChevronDown, ChevronRight, ChevronsUpDown, LogOut, SunMoon } from "lucide-react"
import { useEffect, useRef } from "react"
import { zdb_RC0 } from "../servicos/zustand/zdb_rc0"
import { useTheme } from "../tema/theme-provider"




export function AppSidebar() {

    const { setTheme, theme } = useTheme()
    const { getRotas, rotas } = zdb_RC0()

    const isMobile = useRef(false)
    const usuarioCorrente = useRef({
        avatar: 'pnome',
        pnome: 'pnome',
        email: 'Email@email.com',

    })

    useEffect(() => {
        const i = async () => {
            await getRotas()
        }
        i()

    }, [])


    const _avatarFallBack = (nome: string) => {
        const _split = nome.split(" ");
        if (_split.length > 1) {

            return _split[0].toString().slice(0, 1).toUpperCase() + _split[1].toString().slice(0, 1).toUpperCase()
        } else {
            return _split[0].toString().slice(0, 2).toUpperCase()
        }
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



                <SidebarGroup>
                    <SidebarGroupLabel className="text-xl mb-2">Cadastros Gerais</SidebarGroupLabel>
                    <SidebarMenu>
                        {rotas.grupos.map((r: IGrupoRota) => (
                            <Collapsible
                                key={r.titulo}
                                asChild
                                className="group/collapsible"
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={r.titulo}>
                                            <span>{r.titulo}</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {r.links.map((i: TZLink) => (
                                                <SidebarMenuSubItem key={i.titulo}>
                                                    <SidebarMenuSubButton asChild>
                                                        <Link
                                                            to={i.url}
                                                        >
                                                            {i.titulo}
                                                        </Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>


                {/* {rotas.grupos.map((r: IGrupoRota) => (
                    <SidebarGroup
                        key={r.id}
                    >
                        <SidebarGroupLabel className="text-lg uppercase">{r.titulo}</SidebarGroupLabel>
                        <SidebarGroupContent className=" border-t pt-2 mt-3">
                            <SidebarMenu>
                                {r.links.map((i: TZLink) => (
                                    <SidebarMenuItem key={i.id}>
                                        <SidebarMenuButton asChild

                                        >
                                            <Link
                                                to={i.url}
                                            >
                                                {i.titulo}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))} */}


                <SidebarGroup />
            </SidebarContent>


            <SidebarFooter>



                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                >
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage src={usuarioCorrente.current?.avatar} alt={usuarioCorrente.current?.pnome} />
                                        <AvatarFallback className="rounded-lg">{_avatarFallBack(usuarioCorrente.current?.pnome ? usuarioCorrente.current.pnome : '')}</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-medium">{usuarioCorrente.current?.pnome}</span>
                                        <span className="truncate text-xs">{usuarioCorrente.current?.email}</span>
                                    </div>
                                    <ChevronsUpDown className="ml-auto size-4" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                                side={isMobile ? "bottom" : "top"}
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <Avatar className="h-8 w-8 rounded-lg">
                                            <AvatarImage src={usuarioCorrente.current?.avatar} alt={usuarioCorrente.current?.pnome} />
                                            <AvatarFallback className="rounded-lg">{_avatarFallBack(usuarioCorrente.current?.pnome ? usuarioCorrente.current.pnome : '')}</AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-medium">{usuarioCorrente.current?.pnome}</span>
                                            <span className="truncate text-xs">{usuarioCorrente.current?.email}</span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <SunMoon />
                                        Tema: <Badge variant={"secondary"}
                                            className={`${theme == 'dark' ? 'bg-slate-700' : 'bg-inherit'}`}
                                            onClick={() => setTheme('dark')}
                                        >Escuro</Badge>
                                        <Badge variant={"secondary"}
                                            className={`${theme == 'light' ? 'bg-slate-300' : 'bg-inherit'}`}
                                            onClick={() => setTheme('light')}
                                        >Claro</Badge>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <BadgeCheck />
                                        OPÇÃO 1
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <BadgeCheck />
                                        OPÇÃO 2
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <BadgeCheck />
                                        OPÇÃO 3
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => console.log()}
                                >
                                    <LogOut />
                                    Sair da Aplicação
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>


        </Sidebar>
    )
}