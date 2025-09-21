import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { TcallBackFunction } from "../../types/crudFormEnum"




type TProps = {
    _submit: Function,
    _reset: Function,
    _cancela: TcallBackFunction,
    _situacao: {
        loading: boolean,
        errors: any
    },
    acao: string,
    entidade: string,
}


export function TopoForm(props: TProps) {


    return (
        <div className='min-h-[105px] flex flex-col'>

            <div className='min-h-[70px] flex flex-row justify-between'>
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

            <div className="h-[30px] w-full flex flex-row justify-between p-0">
                <div className='h-full'>
                    <Button
                        type='submit'
                        onClick={() => props._submit}
                        variant={"ghost"}
                        className="rounded-none min-w-[170px] h-[30px]">SALVAR</Button>
                </div>
                <div className="flex flex-row">
                    <Button
                        type='button'
                        onClick={() => { props._reset() }}
                        variant={"ghost"}
                        className="rounded-none min-w-[100px] h-[30px]">LIMPAR</Button>
                    <Button
                        onClick={() => {
                            props._cancela({ exe: "DISMISS", data: {} })
                        }}
                        type='button'
                        variant={"ghost"}
                        className="rounded-none min-w-[100px] h-[30px]">CANCELAR</Button>
                </div>

            </div>
            <div className={`
                            ${props._situacao.loading == true ? 'bg-yellow-800' : 'bg-inherit'}
                            ${props._situacao.errors ? 'bg-red-500' : 'bg-inherit'}
                            w-full] h-[5px]`}></div>
        </div>
    )
}