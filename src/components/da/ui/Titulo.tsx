

type Tprop = {
    titulo: string,
    sub: string
}
export default function Titulo(props: Tprop) {

    return (
        <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{props.titulo}</span>
            <span className="truncate text-xs">{props.sub}</span>
        </div>
    )

}

