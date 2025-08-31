import React from 'react'

const Header = () => {
    return (
        <div className="relative max-xl:mb-16 max-2xl:mb-30">
            <div className="absolute w-full">
                <img src="/images/HG.png" alt="hg" className="relative max-md:-mt-5 w-full max-2xl:py-0 h-full object-cover"/>
                <img src="/images/MG.png"  alt="MG" className="relative -mt-150 max-sm:-mt-20 max-md:-mt-40 max-lg:-mt-35 max-2xl:-mt-50 w-full h-full object-cover"/>
                <img src="/images/VG.png" alt="vg" className="relative -mt-300 max-sm:-mt-62 max-md:-mt-90 max-lg:-mt-105 max-2xl:-mt-210 w-full object-cover "/>
                <div className="absolute  inset-0 bg-gradient-to-br from-[#0B1D26]/80 to-[#000000]/80 opacity-40" />
                <div className="absolute max-sm:-mt-15 max-lg:-mt-15 max-xl:-mt-12 max-2xl:-mt-25 w-full h-[680px] -mt-80 bg-gradient-to-b from-black  via-black opacity-90 blur-md to-[#0B1D26] "/>
            </div>

            <div
                className="container relative px-20 py-16 max-md:px-8 flex justify-between h-6 max-w-full items-center">
                <a className="cursor-pointer z-2">
                    <img width={108} height={24} src="/images/Logo.png" alt="logo"/>
                </a>

                <div className="max-md:hidden">
                    <ul className="flex gap-10 text-blue-50 font-bold font-gilroy text-[18px] cursor-pointer">
                    <li>Equipment</li>
                        <li>About us</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className="text-blue-50 text-[18px] flex items-center font-gilroy gap-2 font-bold cursor-pointer">
                    <img src="/images/Account.png" alt="account" width={20} height={20}/>
                    <p >Account</p>
                </div>

            </div>
        </div>
    )
}
export default Header
