'use client'

import { useState } from "react"
import Image from "next/image"
export default function Navbar(){

    const [logo, setLogo] = useState()
    return(
        <>
            <nav className="bg-indigo-800">
                <div className="max-w-7xl mx-auto- px-4 sm:px- lg:px-8">
                    <div className="flex items-center justify-between h-17">
                        <div className="Flex items-center">
                            <div className="flex-shrink-0 px-3 sm:px-3 lg:px-3">
                                <Image
                                    src='/images/aer-1.jpg'
                                    width={100}
                                    height={100}
                                    alt="Logo"
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}