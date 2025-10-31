import z from "zod";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ENTITY_FORMS, ENTITY_FORMS_ACAO } from "@/infra/servicos/zustand/types/eventTypes";

import { zdb_RC0 } from "@/infra/servicos/zustand/zdb_rc0";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowDownAZ, MoreVertical } from "lucide-react";
import type { UsuarioEntity } from "../../formularios/usuario/types/zUsuarioEntity";

type usuarioEntity = z.infer<typeof UsuarioEntity>;

const { setFormSheet } = zdb_RC0.getState()
const _acao = (usuarioEntity: usuarioEntity) => {

    setFormSheet(
        ENTITY_FORMS.USUARIO,
        ENTITY_FORMS_ACAO.EDITAR,
        usuarioEntity
    )

    // const usuarioTableEvent = new CustomEvent(USUARIO_EVENTOS.USUARIO_EDITAR, { "detail": { dados: { usuarioEntity } } });
    // document.dispatchEvent(usuarioTableEvent);
    // console.log('USUARIO_EVENTOS.EDITAR')
};

const _ev_excluirUsuario = (usuarioEntity: usuarioEntity) => {

    setFormSheet(
        ENTITY_FORMS.USUARIO,
        ENTITY_FORMS_ACAO.EXCLUIR,
        usuarioEntity
    )


    // const usuarioTableEvent = new CustomEvent(USUARIO_EVENTOS.USUARIO_EXCLUIR, { "detail": { dados: { usuarioEntity } } });
    // document.dispatchEvent(usuarioTableEvent);
};




export const columnsUsuario: ColumnDef<usuarioEntity>[] = [
    {
        accessorKey: "_id",
        header: "ID",
    },

    {
        accessorKey: "_criado_em",
        header: "Criado Em",
        cell: ({ row }) => {
            const criado_em = new Date(row.getValue("_criado_em"))
            const d = new Intl.DateTimeFormat("pt-BR", {
                dateStyle: "short",
                timeStyle: "short",
                timeZone: "America/Recife",
            }).format(criado_em)


            return <span>{d}</span>
        },
    },

    {
        accessorKey: "pnome",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Primeiro Nome
                    <ArrowDownAZ className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },


    {
        accessorKey: "snome",
        header: "Segundo nome",
    },

    {
        accessorKey: "funcao.titulo",
        header: "Função",
    },

    {
        accessorKey: "email",
        header: "Email",
    },

    {
        id: "actions",
        cell: ({ row }) => {
            const _row = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Abrir</span>
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(_row.pnome)}
                        >
                            Copiar Nome
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => _acao(_row)}
                        >Editar</DropdownMenuItem>
                        <DropdownMenuItem
                            className="bg-red-500 text-white"
                            onClick={() => _ev_excluirUsuario(_row)}
                        >Excluir</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]