import React from 'react'
import CardFeatures from '../Molekul/CardFeatures'
import { features } from '@/constant'

export default function Business() {
    return (
        <section id='features' className='flex flex-col sm:flex-row justify-evenly items-center'>
            <div className='p-0 m-0 w-1/2'>
                <h1
                    className='text-white ss:text-5xl font-bold ss:leading-normal leading-[75px] font-poppins'>
                    You do the business, <br /> we&#39;ll handle the money.
                </h1>
                <p className='lg:pt-6 text-lg text-white opacity-70 font-poppins leading-[30.6px]'>
                    With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
                </p>
                <button className='mt-8 py-[18px] px-[33px] bg-blue-gradient rounded-md text-[#00040E] font-semibold text-lg lg:text-xl  hover:scale-105 duration-200 transition-all'>Get Started</button>
            </div>
            <div className='lg:pl-16 m-0 w-1/2'>
                {features.map((data) => (
                    <CardFeatures key={data.id} title={data.title} text={data.content} />
                ))}
            </div>
        </section>
    )
}
