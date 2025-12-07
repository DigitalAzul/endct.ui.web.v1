import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { ChartAreaInteractive } from "@/Dominios/_Comuns/components/graficos/Area";




export function TableFormProdutoVisao() {






    return (

        <div className="flex flex-col pb-10">

            <div className="flex flex-col gap-4 p-10">

                <div className="flex flex-col gap-1 items-center lg:items-start pb-4 w-full">
                    <span className="text-5xl ">Produtos</span>
                    <span className="text-sm text-slate-500">Estatísticas gerais</span>
                </div>


                <div className="flex flex-wrap gap-10 justify-center lg:justify-start">

                    <div className="md:w-[240px] w-full">
                        <Card className="md:w-[240px] w-full">
                            <CardHeader>
                                <p className="text-5xl">1.234</p>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-2">
                                    <CardTitle>CADASTRADOS</CardTitle>
                                    <CardDescription>Produtos para revenda</CardDescription>
                                </div>
                            </CardContent>

                        </Card>
                    </div>
                    <div className="md:w-[240px] w-full">
                        <Card className="md:w-[240px] w-full">
                            <CardHeader>
                                <p className="text-5xl">123</p>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-2">
                                    <CardTitle>COM ESTOQUE BAIXO</CardTitle>
                                    <CardDescription>Produtos para revenda</CardDescription>
                                </div>
                            </CardContent>

                        </Card>
                    </div>
                    <div className="md:w-[240px] w-full">
                        <Card className="md:w-[240px] w-full">
                            <CardHeader>
                                <p className="text-5xl">10</p>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-2">
                                    <CardTitle>TOP 10 DO DIA</CardTitle>
                                    <CardDescription>Produtos para revenda</CardDescription>
                                </div>
                            </CardContent>

                        </Card>
                    </div>
                    <div className="md:w-[240px] w-full">
                        <Card className="md:w-[240px] w-full">
                            <CardHeader>
                                <p className="text-5xl">10</p>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-2">
                                    <CardTitle>TOP 10 DA SEMANA</CardTitle>
                                    <CardDescription>Produtos para revenda</CardDescription>
                                </div>
                            </CardContent>

                        </Card>
                    </div>
                    <div className="md:w-[240px] w-full">
                        <Card className="md:w-[240px] w-full">
                            <CardHeader>
                                <p className="text-5xl">10</p>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-2">
                                    <CardTitle>TOP 10 DO MÊS</CardTitle>
                                    <CardDescription>Produtos para revenda</CardDescription>
                                </div>
                            </CardContent>

                        </Card>
                    </div>
                </div>
                <div className="mt-5">
                    <ChartAreaInteractive />
                </div>
            </div>

        </div>

    )


}

