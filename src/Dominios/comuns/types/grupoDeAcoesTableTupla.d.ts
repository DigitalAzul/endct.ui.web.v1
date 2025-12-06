export type acoes = "CRIAR" | "EDITAR" | "DELETE" | "DISMISS" | "RECARREGAR";

interface TGrupoDeAcoesCBProps {
    exe: acoes;
    data?: any;
};

export type TGrupoDeAcoesCB = ({ exe, data }: Tcf) => any;



export interface IGrupoDeAcoesProps {
    callBackFunction: TGrupoDeAcoesCB,
    trabalhando?: boolean
}