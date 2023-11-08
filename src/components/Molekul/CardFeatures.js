import React from 'react'
import Image from 'next/image'

export default function CardFeatures(props) {
    return (
        <div className='flex flex-row justify-start items-center'>
            <div className='p-2 bg-dimBlue rounded-full'>
                <Image src='../icons/Star.svg' width={32} height={32} alt={props.icon} />
            </div>
            <div className='py-8 px-4 font-poppins'>
                <h2 className='text-white font-bold text-lg'>{props.title}</h2>
                <p className='text-white text-base opacity-70'>{props.text}</p>
            </div>
        </div>
    )
}
