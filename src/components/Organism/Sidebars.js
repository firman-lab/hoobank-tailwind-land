import { dashLink } from '@/constant';
import Image from 'next/image'
import React, { useState } from 'react'

export default function Sidebars() {

    const [active, setActive] = useState("dashboard");
    const [toggle, setToggle] = useState(false);

    return (
        <aside className='h-screen fixed top-0 left-0 w-60 bg-slate-900'>
            <div className='flex flex-col justify-end overflow-y-auto'>
                <div className='flex flex-shrink justify-center pt-8'>
                    <Image src={'/icons/logo.svg'} width={100} height={100} alt={'logo hoo'} />
                </div>
                <div className='pt-14'>
                    <ul className='w-full space-y-2 px-10'>
                        {dashLink.map((link) => (
                            <li key={link.id} onClick={() => { setActive(link.id) }} className={'py-4'}>
                                <a href={`/${link.id}`} className={`flex flex-row justify-start gap-4 items-center text-white font-poppins font-semibold text-sm cursor-pointer ${active == link.id ? 'text-[#2da5b8] rounded-lg' : ' hover:text-[#2da5b8] hover:rounded-xl'}`}>
                                    <span>
                                        <Image src={'/icons/dashboard.svg'} alt='icon dashboard' width={24} height={24} className={``} />
                                    </span>
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside >
    )
}
