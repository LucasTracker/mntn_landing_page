import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
    const isMaxXL = useMediaQuery({ query: "(max-width: 1279px)" });
    return (
        <div className="flex flex-col mx-80  max-xl:flex-col max-xl:mx-auto max-sm:max-w-sm max-2xl:max-w-2xl max-w-full max-xl:-mt-60 max-2xl:mt-198 max-lg:max-w-lg max-md:-mt-120 max-lg:-mt-100 max-lg:py-30 h-full relative">
            <div className="max-xl:mb-2 mb-50 max-xl:-mt-10 mt-50">
                <div className="relative max-sm:p-5 flex max-xl:flex-col flex-col text-white max-xl:gap-7 gap-12 max-xl:mb-15">

                    <h2 className="text-white font-gilroy font-extrabold max-2xl:text-7xl text-9xl opacity-25">01</h2>
                    <div className="flex flex-row gap-4 absolute max-sm:mt-5 max-2xl:mt-4 mt-10 ml-12 items-center align-middle max-sm:ml-7">
                        <div  className="line-left max-sm:-mt-2 max-lg:-mt-1 max-2xl:ml-3 -mt-1.5"/>
                        <h2 className="uppercase tracking-widest font-gilroy font-extrabold text-amber-200 max-2xl:text-2xl text-3xl">get started</h2>
                    </div>

                    <h2 className="font-chronicle-black font-semibold max-xl:text-6xl max-xl:max-w-full text-9xl max-w-[600px]">What level of  hiker are you?</h2>
                    <p className="font-gilroy block leading-8 max-2xl:text-[18px] max-xl:max-w-full max-w-[400px]">Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
                    <div className="flex flex-row gap-2 align-middle">
                        <p className="text-[var(--color-text)]">read more</p>
                        <svg className="w-6 h-6 text-gray-800 dark:text-[var(--color-text)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                        </svg>
                    </div>
                    {isMaxXL ? (
                        <img src="/images/01.png"  alt="01" />
                    ) : (
                        <div className="flex relative flex-row ml-180 -mt-220 w-[600px] h-[800px] mb-5">
                            <img src="/images/01.png" alt="01" />
                        </div>
                    )}

                </div>
           </div>
            <div className="max-xl:mb-2 mb-40">
                <div className="relative max-sm:p-5 flex max-xl:flex-col flex-row text-white max-xl:gap-7 gap-12 max-xl:mb-15">
                    {isMaxXL ? (
                        <>
                            <h2 className="text-white font-gilroy font-extrabold max-2xl:text-7xl opacity-25">
                                02
                            </h2>

                            <div className="flex flex-row absolute max-sm:mt-5 max-2xl:mt-4 items-center align-middle max-sm:ml-7">
                                <div className="line-left max-sm:-mt-2 max-lg:-mt-1 max-2xl:ml-3" />
                                <h2 className="uppercase tracking-widest font-gilroy font-extrabold text-amber-200 max-2xl:text-2xl">
                                    Hiking Essentials
                                </h2>
                            </div>

                            <h2 className="font-chronicle-black font-semibold max-xl:text-6xl max-xl:max-w-full text-5xl max-w-[400px]">
                                Picking the right Hiking Gear!
                            </h2>

                            <p className="font-gilroy block leading-8 max-2xl:text-[18px] max-xl:max-w-full max-w-[400px]">
                                The nice thing about beginning hiking is that you don’t really need any special gear,
                                you can probably get away with things you already have.
                                Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans
                                and regular clothes, which will get heavy and chafe if they get sweaty or wet.
                            </p>

                            <div className="flex flex-row gap-2 align-middle">
                                <p className="text-[var(--color-text)]">read more</p>
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-[var(--color-text)]"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 12H5m14 0-4 4m4-4-4-4"
                                    />
                                </svg>
                            </div>

                            <img src="/images/02.png" alt="02" />
                        </>
                    ) : (
                        <>
                            <div className="flex absolute flex-row w-[600px] -ml-5 -mt-0  mb-5">
                                <img src="/images/02.png" alt="02" />
                            </div>

                            <div className="ml-160 max-w-full mt-5 flex flex-col gap-9  relative mb-80">
                                <h2 className="text-white font-gilroy font-extrabold max-2xl:text-7xl text-9xl opacity-25">
                                    02
                                </h2>

                                <div className="flex flex-row absolute gap-2 max-sm:mt-5 max-2xl:mt-4 items-center w-200 mt-10 ml-18 align-middle max-sm:ml-7">
                                    <div className="line-left max-sm:-mt-2 max-lg:-mt-1 max-2xl:ml-3 -mt-1.5" />
                                    <h2 className="uppercase tracking-widest font-gilroy font-extrabold text-amber-200 max-2xl:text-2xl text-4xl">
                                        Hiking Essentials
                                    </h2>
                                </div>

                                <h2 className="font-chronicle-black font-semibold max-xl:text-6xl max-xl:max-w-full w-[800px] text-9xl ">
                                    Picking the right Hiking Gear!
                                </h2>

                                <p className="font-gilroy block leading-8 max-2xl:text-[18px] max-xl:max-w-full max-w-[800px]">
                                    The nice thing about beginning hiking is that you don’t really need any special gear,
                                    you can probably get away with things you already have.
                                    Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans
                                    and regular clothes, which will get heavy and chafe if they get sweaty or wet.
                                </p>

                                <div className="flex flex-row gap-2 align-middle">
                                    <p className="text-[var(--color-text)]">read more</p>
                                    <svg
                                        className="w-6 h-6 text-gray-800 dark:text-[var(--color-text)]"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 12H5m14 0-4 4m4-4-4-4"
                                        />
                                    </svg>
                                </div>
                            </div>

                        </>
                    )}

                </div>
            </div>
            <div className="max-xl:mb-2 mb-0">
                <div className="relative max-sm:p-5 flex max-xl:flex-col flex-col text-white max-xl:gap-7 gap-12 max-xl:mb-15 max-xl:-mt-2 -mt-50">

                    <h2 className="text-white font-gilroy font-extrabold max-2xl:text-7xl text-9xl opacity-25">03</h2>
                    <div className="flex flex-row gap-4 absolute max-sm:mt-0 max-2xl:mt-4  max-xl:-mt-0  mt-10 ml-12 items-center align-middle max-sm:ml-7">
                        <div  className="line-left max-sm:-mt-2 max-lg:-mt-1 max-2xl:ml-3 -mt-1.5 ml-6"/>
                        <h2 className="uppercase tracking-widest font-gilroy font-extrabold text-amber-200 max-2xl:text-2xl text-3xl">where you go is the key</h2>
                    </div>

                    <h2 className="font-chronicle-black font-semibold max-xl:text-6xl max-xl:max-w-full  max-w-[800px] text-9xl">Understand Your Map & Timing</h2>
                    <p className="font-gilroy block leading-8 max-2xl:text-[18px] max-xl:max-w-full max-w-[800px]">To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</p>
                    <div className="flex flex-row gap-2 align-middle">
                        <p className="text-[var(--color-text)]">read more</p>
                        <svg className="w-6 h-6 text-gray-800 dark:text-[var(--color-text)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                        </svg>
                    </div>
                    {isMaxXL ? (
                        <img src="/images/03.png" alt="03" />
                    ) : (
                        <div className="flex relative flex-row ml-210 -mt-230 w-[600px] h-[800px] mb-5">
                            <img src="/images/03.png" alt="03" />
                        </div>
                    )}

                </div>
            </div>

        </div>

    )
}
export default Hero
