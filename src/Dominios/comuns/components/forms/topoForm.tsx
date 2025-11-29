
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import type { TcallBackFunction } from "../../types/crudFormEnum"



export type TTopoFormErros = {
    erro: boolean,
    msg: string
}

type TProps = {
    _submit: Function,
    _reset: Function,
    _cancela: TcallBackFunction,
    _situacao: {
        loading: boolean,
        errors: TTopoFormErros
    },
    acao: string,
    entidade: string,
    botao_submit?: string,
}


export function TopoForm(props: TProps) {


    return (
        <div className='min-h-[105px] flex flex-col'>

            <div className='min-h-[70px] flex flex-row justify-between p-2'>
                <div>
                    <div className='translate-2 text-sm uppercase'>{props.acao}</div>
                    <div className='translate-x-2 translate-y-1 text-3xl uppercase font-bold'>{props.entidade}</div>
                </div>

                <div>
                    <Badge
                        variant={'outline'} asChild
                        className='mr-2 mt-2 '
                    >
                        <span className="opacity-45">F12</span>
                    </Badge>
                </div>
            </div>

            <div className="h-[30px] w-full flex flex-row justify-between p-0 mt-3">
                <div className='h-full'>
                    <Button
                        type='submit'
                        onClick={() => props._submit}
                        variant={"ghost"}
                        className="rounded-none    h-[30px]">{props.botao_submit ? props.botao_submit : 'SALVAR'}</Button>
                </div>
                <div className="flex flex-row">
                    <Button
                        type='button'
                        onClick={() => { props._reset() }}
                        variant={"ghost"}
                        className="rounded-none h-[30px]">LIMPAR</Button>
                    <Button
                        onClick={() => {
                            props._cancela({ exe: "DISMISS", data: {} })
                        }}
                        type='button'
                        variant={"ghost"}
                        className="rounded-none h-[30px]">CANCELAR</Button>
                </div>

            </div>
            <div className={
                `${props._situacao.loading == true ? 'bg-yellow-800' : 'bg-inherit'} ${props._situacao.errors.erro ? 'bg-red-500  h-14' : 'bg-lime-300 h-[3px]'} w-full] `}>
                {props._situacao.errors.erro &&
                    <div className=" w-full text-white text-sm uppercase p-3 px-5 flex flex-row justify-start items-center gap-3">
                        <Info className="" size={32} />
                        <p>{props._situacao.errors.msg}</p>
                    </div>
                }
            </div>
        </div>
    )
}