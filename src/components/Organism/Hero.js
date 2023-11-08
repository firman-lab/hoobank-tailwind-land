import Image from "next/image";
import React from "react";

export default function Hero() {
    return (
        <section id="home" className="flex md:flex-row flex-col paddingY">
            <div className="flex-1 flexStart flex-col xl:px-0 sm:px-16 px-6">
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-md">
                    <Image
                        src={"/icons/discount.svg"}
                        alt={"Discount"}
                        width={24}
                        height={24}
                    />
                    <p className="paragraph">
                        <span className="text-white">20%</span> discount for{" "}
                        <span className="text-white">1 Month</span> Account
                    </p>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        The Next <br className="sm:block hidden" />{" "}
                        <span className="text-gradient">Generation</span>
                    </h1>
                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <a href={'/dashboard'} className="flexCenter w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:shadow-2xl hover:shadow-white">
                            <div className="flexCenter flex-col bg-primary w-full h-full rounded-full">
                                <div className="flexStart flex-row gap-2">
                                    <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                                        <span className="text-gradient">Get</span>
                                    </p>
                                    <Image
                                        src="/icons/arrow-up.svg"
                                        width={24}
                                        height={24}
                                        alt="arrow up"
                                    />
                                </div>
                                <p className="font-poppins font-medium text-gradient text-[18px] leading-[23.4px]">
                                    Started
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <h1 className="font-poppins font-semibold ss:text-[68px] text-xl text-white ss:leading-[100.8px] leading-[75px] w-full">
                    Assesment Course.
                </h1>
                <p className="paragraph max-w-[470px] mt-5">
                    Our team of experts uses a methodology to identify the credit cards
                    most likely to fit your needs. We examine annual percentage rates,
                    annual fees.
                </p>
            </div>
            <div className="flex-1 flex flexCenter md:my-0 my-10 relative">
                <Image
                    src={"/images/robot.png"}
                    alt={"Soal PNS Terpadu"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="z-[5]"
                />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                <div />
            </div>
        </section>
    );
}
