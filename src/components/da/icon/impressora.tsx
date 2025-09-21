
import impressoraBranca from '@/assets/impressora_branco.svg';
import impressoraPreta from '@/assets/impressora_preto.svg';
import { useEffect, useState } from 'react';

import { zUserSessionProfile } from '@/zStats/zSessiom';
import Titulo from '../ui/Titulo';



export default function ImpressoraIcon() {



    const { zTheme } = zUserSessionProfile();


    const [eHdark, seteHdark] = useState(false)

    useEffect(() => {

        const _eHdark = zTheme == 'dark' ? true : false
        seteHdark(_eHdark)
        console.log('useEffect', _eHdark)

    }, [zTheme])
    return (
        <div className='w-[320px] min-h-[240px] border rounded-2xl p-4 flex flex-col gap-4'>
            <div className='flex flex-row items-center gap-3'>
                <div>
                    {eHdark ?
                        <img src={impressoraBranca} alt='Impressora p' width={70} />
                        :
                        <img src={impressoraPreta} alt='Impressora b' width={70} />
                    }
                </div>
                <div className='flex flex-col w-full gap-3 pl-3'>
                    <div>
                        <Titulo titulo="BROTHER LX 300" sub="Modelo" />
                    </div>

                    <div>
                        <Titulo titulo="PRONTO" sub="Status Painel" />
                    </div>

                </div>
            </div>

            <div className='flex flex-row gap-4 pt-3'>
                <div>
                    <Titulo titulo="1.632" sub="Páginas impressas" />
                </div>
                <div>
                    <Titulo titulo="1.632" sub="Páginas restantes" />
                </div>
            </div>
            <div className='flex flex-row justify-between gap-4 pt-3'>
                <div>
                    <Titulo titulo="192.168.0.1" sub="IPv4" />
                </div>
                <div className='grid justify-end flex-1 text-left text-sm leading-tight'>
                    <div className='rounded-full w-[40px] h-[12px] bg-amber-200 '></div>
                    <div className='truncate text-xs p-0.5'>Online</div>
                </div>
            </div>

        </div>
    )

}


