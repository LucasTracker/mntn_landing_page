import React from 'react'

const Content = () => {
    return (
        <div className="text-white relative flex  mb-130  mt-14 px-4">
            <div className="relative pt-24 mr-32 ml-20 max-md:hidden max-lg:mx-10 max-xl:mx-8 flex flex-col gap-7">
                <h3 className="[writing-mode:vertical-lr] text-2xl font-bold font-chronicle-black">Follow us</h3>
                <img src="/images/instagram.png" alt="instagram" width={20} height={20}/>
                <img src="/images/twitter.png" alt="twitter" width={20} height={20}/>
            </div>

            <div className="max-w-[1000px] mx-auto max-md:mx-6 max-lg:ml-4 max-xl:max-w-[680px]">
                <div className="flex flex-row items-start gap-8 ">
                    <div className="line-left"></div>
                    <h2 className="h2">A hiking guide</h2>
                </div>

                <div className="relative max-w-full mt-8 mb-8">
                    <h1 className="h1 ">Be Prepared For The Mountains And Beyond!</h1>
                </div>

                <div className="flex items-center gap-4">
                    <p className="font-chronicle font-extrabold">scroll down</p>
                    <img src="/images/ArrowDown.png" alt="arrow down" width={16} height={24}/>
                </div>
            </div>

            <div className="flex flex-col max-lg:hidden gap-10 text-[18px] -mt-32 max-xl:-mt-60 -mr-20 items-center justify-center font-bold ">
                <h3>Start</h3>
                <p>01</p>
                <p>02</p>
            </div>
            <div className="slider top-28 -mr-14 max-2xl:hidden max-xl:top-32 "  />
        </div>
    )
}

export default Content

