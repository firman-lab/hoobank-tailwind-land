import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <>
            <Head>
                <title>Hoobank</title>
                <meta
                    name="description"
                    content="HooBank Indonesia platform bank terbaik"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/icons/hoobank.svg" />
            </Head>
            <div className="w-full p-0 m-0 overflow-hidden">
                <div className="py-4 px-8 sm:px-10 md:px-16 xl:px-32">
                    <Navbar />
                    {/* <navbar className='flex flex-row justify-between'>
                        <div className='flex flex-row justify-start items-center gap-3 text-md font-semibold'>
                            <Image width={35} height={35} src={"/icons/hoobank.svg"} alt={"HooBank Logo"} />
                            <h3 className='text-white'>Hoo<span className='text-[#00F6FF]'>Bank</span></h3>
                        </div>
                        <ul className='flex flex-row gap-4 items-center text-white'>
                            <li className='font-semibold px-3'>Home</li>
                            <li className='font-semibold px-3'>About Us</li>
                            <li className='font-semibold px-3'>Features</li>
                            <li className='font-semibold px-3'>Solutions</li>
                        </ul>
                    </navbar>
                    <div className='flex flex-row justify-between sm:flex-col-reverse'>
                        <div className='py-2'>
                            <div className='bg-gradient-to-t from-[#11101D] to-[#272727] rounded-md py-2'>
                                <Image width={32} height={32} alt="discount" src={'/icons/discount.svg'} />
                                <span className='text-white px-4'> 20% Discount for everyone who</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
