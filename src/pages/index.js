import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Organism/Navbar";
import Hero from "@/components/Organism/Hero";
import Stats from "@/components/Organism/Stats";
import Business from "@/components/Organism/Business";

export default function Home() {
    return (
        <>
            <Head>
                <title>nineCourse</title>
                <meta
                    name="description"
                    content="HooBank Indonesia platform bank terbaik"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/icons/hoobank.svg" />
            </Head>
            <div className="w-full p-0 m-0 overflow-hidden">
                <div className="paddingX flexCenter">
                    <div className="boxWidth">
                        <Navbar />
                    </div>
                </div>
            </div>
            <div className="bg-primary flexStart">
                <div className="boxWidth">
                    <Hero />
                </div>
            </div>
            <div className="paddingX flexCenter">
                <div className="boxWidth">
                    <Stats />
                </div>
            </div>
            <div className="paddingX flexCenter">
                <div className="boxWidth">
                    <Business />
                </div>
            </div>
        </>
    );
}
