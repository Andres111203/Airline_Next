import React from "react";
import Image from "next/image";

const Sidenav = () => {
    return (
        <>
  
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4 bg-red-500">
                    <a href="#" title="home">
                        <Image
                            src="/images/aer-1.jpg"
                            width={100}
                            height={100}
                            className="rounded-full"
                            alt="image"
                        />
                    </a>
                </div>
                <ul className="space-y-2 tracking-wide mt-8">
                    <li>
                        <a href="#" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-red-500 to-red-300">
                            <svg className="h-6 w-6 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                            <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                            <span className="-mr-1 font-medium">Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                            <svg className="h-6 w-6 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                            <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="16 3 20 7 16 11" />  
                            <line x1="10" y1="7" x2="20" y2="7" />  <polyline points="8 13 4 17 8 21" />  <line x1="4" y1="17" x2="13" y2="17" /></svg>
                            <span className="group-hover:text-gray-700">Vuelos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                            <svg className="h-6 w-6 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                            <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="7" r="4" />  
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                            <span className="group-hover:text-gray-700">Transacciones</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                    <svg className="h-6 w-6 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                    <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  
                    <path d="M20 12h-13l3 -3m0 6l-3 -3" /></svg>
                    <span className="group-hover:text-gray-700">Cerrar sesión</span>
                </button>
            </div>
        </aside>
        </>
    )
}

export default Sidenav;

