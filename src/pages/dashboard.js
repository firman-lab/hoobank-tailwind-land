import React from 'react'
import Head from 'next/head'
import Sidebars from '@/components/Sidebars'

export default function dashboard() {
    return (
        <>
            <Head>
                <title>Dashboard nineCourse</title>
                <meta
                    name="description"
                    content="HooBank Indonesia platform bank terbaik" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/icons/hoobank.svg" />
            </Head>
            <div className='w-full p-0 m-0 overflow-hidden'>
                <Sidebars />
            </div>
            <div className='ml-60'>
                <div className='text-white font-poppins text-xl'>Dashboard</div>
            </div>
        </>
    )
}
