

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    type ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const description = "An interactive area chart"

const chartData = [
    { date: "2024-04-01", curva_a: 222, curva_b: 150, curva_c: 123 },
    { date: "2024-04-02", curva_a: 97, curva_b: 180, curva_c: 123 },
    { date: "2024-04-03", curva_a: 167, curva_b: 120, curva_c: 123 },
    { date: "2024-04-04", curva_a: 242, curva_b: 260, curva_c: 123 },
    { date: "2024-04-05", curva_a: 373, curva_b: 290, curva_c: 123 },
    { date: "2024-04-06", curva_a: 301, curva_b: 340, curva_c: 123 },
    { date: "2024-04-07", curva_a: 245, curva_b: 180, curva_c: 123 },
    { date: "2024-04-08", curva_a: 409, curva_b: 320, curva_c: 123 },
    { date: "2024-04-09", curva_a: 59, curva_b: 110, curva_c: 123 },
    { date: "2024-04-10", curva_a: 261, curva_b: 190, curva_c: 123 },
    { date: "2024-04-11", curva_a: 327, curva_b: 350, curva_c: 123 },
    { date: "2024-04-12", curva_a: 292, curva_b: 210, curva_c: 123 },
    { date: "2024-04-13", curva_a: 342, curva_b: 380, curva_c: 123 },
    { date: "2024-04-14", curva_a: 137, curva_b: 220, curva_c: 123 },
    { date: "2024-04-15", curva_a: 120, curva_b: 170, curva_c: 123 },
    { date: "2024-04-16", curva_a: 138, curva_b: 190, curva_c: 123 },
    { date: "2024-04-17", curva_a: 446, curva_b: 360, curva_c: 123 },
    { date: "2024-04-18", curva_a: 364, curva_b: 410, curva_c: 123 },
    { date: "2024-04-19", curva_a: 243, curva_b: 180, curva_c: 123 },
    { date: "2024-04-20", curva_a: 89, curva_b: 150, curva_c: 123 },
    { date: "2024-04-21", curva_a: 137, curva_b: 200, curva_c: 123 },
    { date: "2024-04-22", curva_a: 224, curva_b: 170, curva_c: 123 },
    { date: "2024-04-23", curva_a: 138, curva_b: 230, curva_c: 123 },
    { date: "2024-04-24", curva_a: 387, curva_b: 290, curva_c: 123 },
    { date: "2024-04-25", curva_a: 215, curva_b: 250, curva_c: 123 },
    { date: "2024-04-26", curva_a: 75, curva_b: 130, curva_c: 123 },
    { date: "2024-04-27", curva_a: 383, curva_b: 420, curva_c: 123 },
    { date: "2024-04-28", curva_a: 122, curva_b: 180, curva_c: 123 },
    { date: "2024-04-29", curva_a: 315, curva_b: 240, curva_c: 123 },
    { date: "2024-04-30", curva_a: 454, curva_b: 380, curva_c: 123 },
    { date: "2024-05-01", curva_a: 165, curva_b: 220, curva_c: 123 },
    { date: "2024-05-02", curva_a: 293, curva_b: 310, curva_c: 123 },
    { date: "2024-05-03", curva_a: 247, curva_b: 190, curva_c: 123 },
    { date: "2024-05-04", curva_a: 385, curva_b: 420, curva_c: 123 },
    { date: "2024-05-05", curva_a: 481, curva_b: 390, curva_c: 123 },
    { date: "2024-05-06", curva_a: 498, curva_b: 520, curva_c: 123 },
    { date: "2024-05-07", curva_a: 388, curva_b: 300, curva_c: 123 },
    { date: "2024-05-08", curva_a: 149, curva_b: 210, curva_c: 123 },
    { date: "2024-05-09", curva_a: 227, curva_b: 180, curva_c: 123 },
    { date: "2024-05-10", curva_a: 293, curva_b: 330, curva_c: 123 },
    { date: "2024-05-11", curva_a: 335, curva_b: 270, curva_c: 123 },
    { date: "2024-05-12", curva_a: 197, curva_b: 240, curva_c: 123 },
    { date: "2024-05-13", curva_a: 197, curva_b: 160, curva_c: 123 },
    { date: "2024-05-14", curva_a: 448, curva_b: 490, curva_c: 123 },
    { date: "2024-05-15", curva_a: 473, curva_b: 380, curva_c: 123 },
    { date: "2024-05-16", curva_a: 338, curva_b: 400, curva_c: 123 },
    { date: "2024-05-17", curva_a: 499, curva_b: 420, curva_c: 123 },
    { date: "2024-05-18", curva_a: 315, curva_b: 350, curva_c: 123 },
    { date: "2024-05-19", curva_a: 235, curva_b: 180, curva_c: 123 },
    { date: "2024-05-20", curva_a: 177, curva_b: 230, curva_c: 123 },
    { date: "2024-05-21", curva_a: 82, curva_b: 140, curva_c: 123 },
    { date: "2024-05-22", curva_a: 81, curva_b: 120, curva_c: 123 },
    { date: "2024-05-23", curva_a: 252, curva_b: 290, curva_c: 123 },
    { date: "2024-05-24", curva_a: 294, curva_b: 220, curva_c: 123 },
    { date: "2024-05-25", curva_a: 201, curva_b: 250, curva_c: 123 },
    { date: "2024-05-26", curva_a: 213, curva_b: 170, curva_c: 123 },
    { date: "2024-05-27", curva_a: 420, curva_b: 460, curva_c: 123 },
    { date: "2024-05-28", curva_a: 233, curva_b: 190, curva_c: 123 },
    { date: "2024-05-29", curva_a: 78, curva_b: 130, curva_c: 123 },
    { date: "2024-05-30", curva_a: 340, curva_b: 280, curva_c: 123 },
    { date: "2024-05-31", curva_a: 178, curva_b: 230, curva_c: 123 },
    { date: "2024-06-01", curva_a: 178, curva_b: 200, curva_c: 123 },
    { date: "2024-06-02", curva_a: 470, curva_b: 410, curva_c: 123 },
    { date: "2024-06-03", curva_a: 103, curva_b: 160, curva_c: 123 },
    { date: "2024-06-04", curva_a: 439, curva_b: 380, curva_c: 123 },
    { date: "2024-06-05", curva_a: 88, curva_b: 140, curva_c: 123 },
    { date: "2024-06-06", curva_a: 294, curva_b: 250, curva_c: 123 },
    { date: "2024-06-07", curva_a: 323, curva_b: 370, curva_c: 123 },
    { date: "2024-06-08", curva_a: 385, curva_b: 320, curva_c: 123 },
    { date: "2024-06-09", curva_a: 438, curva_b: 480, curva_c: 123 },
    { date: "2024-06-10", curva_a: 155, curva_b: 200, curva_c: 123 },
    { date: "2024-06-11", curva_a: 92, curva_b: 150, curva_c: 123 },
    { date: "2024-06-12", curva_a: 492, curva_b: 420, curva_c: 123 },
    { date: "2024-06-13", curva_a: 81, curva_b: 130, curva_c: 123 },
    { date: "2024-06-14", curva_a: 426, curva_b: 380, curva_c: 123 },
    { date: "2024-06-15", curva_a: 307, curva_b: 350, curva_c: 123 },
    { date: "2024-06-16", curva_a: 371, curva_b: 310, curva_c: 123 },
    { date: "2024-06-17", curva_a: 475, curva_b: 520, curva_c: 123 },
    { date: "2024-06-18", curva_a: 107, curva_b: 170, curva_c: 123 },
    { date: "2024-06-19", curva_a: 341, curva_b: 290, curva_c: 123 },
    { date: "2024-06-20", curva_a: 408, curva_b: 450, curva_c: 123 },
    { date: "2024-06-21", curva_a: 169, curva_b: 210, curva_c: 123 },
    { date: "2024-06-22", curva_a: 317, curva_b: 270, curva_c: 123 },
    { date: "2024-06-23", curva_a: 480, curva_b: 530, curva_c: 123 },
    { date: "2024-06-24", curva_a: 132, curva_b: 180, curva_c: 123 },
    { date: "2024-06-25", curva_a: 141, curva_b: 190, curva_c: 123 },
    { date: "2024-06-26", curva_a: 434, curva_b: 380, curva_c: 123 },
    { date: "2024-06-27", curva_a: 448, curva_b: 490, curva_c: 123 },
    { date: "2024-06-28", curva_a: 149, curva_b: 200, curva_c: 123 },
    { date: "2024-06-29", curva_a: 103, curva_b: 160, curva_c: 123 },
    { date: "2024-06-30", curva_a: 446, curva_b: 400, curva_c: 123 },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    curva_a: {
        label: "Curva A",
        color: "var(--chart-1)",
    },
    curva_b: {
        label: "Curva B",
        color: "var(--chart-2)",
    },
    curva_c: {
        label: "Curva C",
        color: "var(--chart-3)",
    },
} satisfies ChartConfig

export function GraficoAreaPessoas() {
    const [timeRange, setTimeRange] = React.useState("90d")

    const filteredData = chartData.filter((item) => {
        const date = new Date(item.date)
        const referenceDate = new Date("2024-06-30")
        let daysToSubtract = 90
        if (timeRange === "30d") {
            daysToSubtract = 30
        } else if (timeRange === "7d") {
            daysToSubtract = 7
        }
        const startDate = new Date(referenceDate)
        startDate.setDate(startDate.getDate() - daysToSubtract)
        return date >= startDate
    })

    return (
        <Card className="pt-0">
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-1">
                    <CardTitle className="text-3xl font-light">CLEINTES DA CURVA ABC</CardTitle>
                    <CardDescription>
                        Mostranto a desempenho de clientes da Curva ABC
                    </CardDescription>
                </div>
                <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger
                        className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
                        aria-label="Select a value"
                    >
                        <SelectValue placeholder="Ultimos 3 mesês" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectItem value="90d" className="rounded-lg">
                            Ultimos 3 mêses
                        </SelectItem>
                        <SelectItem value="30d" className="rounded-lg">
                            Ultimos 30 dias
                        </SelectItem>
                        <SelectItem value="7d" className="rounded-lg">
                            Ultimos 7 dias
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <AreaChart data={filteredData}>
                        <defs>
                            <linearGradient id="curvaA" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-curva_a)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-curva_a)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient id="CurvaB" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-curva_b)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-curva_b)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient id="curvaC" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="15%"
                                    stopColor="var(--color-curva_c)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="55%"
                                    stopColor="var(--color-curva_c)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                })
                            }}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                        })
                                    }}
                                    indicator="dot"
                                />
                            }
                        />

                        <Area
                            dataKey="curva_a"
                            type="natural"
                            fill="url(#curvaA)"
                            stroke="var(--color-curva_a)"
                            stackId="a"
                        />
                        <Area
                            dataKey="curva_b"
                            type="natural"
                            fill="url(#curvaB)"
                            stroke="var(--color-curva_b)"
                            stackId="a"
                        />
                        <Area
                            dataKey="curva_c"
                            type="natural"
                            fill="url(#curvaC)"
                            stroke="var(--color-curva_c)"
                            stackId="a"
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
