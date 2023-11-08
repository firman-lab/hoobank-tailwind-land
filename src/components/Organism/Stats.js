import React from 'react'
import { stats } from '@/constant'

export default function Stats() {
    return (
        <section className='flexCenter flex-row flex-wrap'>
            {stats.map((stats) => (
                <div key={stats.id} className='flex flex-1 justify-center sm:justify-start items-center flex-row m-3'>
                    <h4 className='font-poppins font-semibold xs:text-[40.80px] xs:leading-[53.16px] leading-[43.16px] text-white'>
                        {stats.value}
                    </h4>
                    <p className='text-gradient font-poppins font-normal xs:text-[20.45px] xs:leading-[21.58px] uppercase ml-2'>{stats.title}</p>
                </div>
            ))}
        </section>
    )
}
