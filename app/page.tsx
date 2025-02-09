'use client'

import { lusitana } from '@/app/ui/fonts';
import {ProfileForm} from '@/app/profile';
 

import FooterSection from "@/components/footerSection";
import { FaPlane } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
// import { inter } from "@/app/fonts";

export default function Home() {
  const router = useRouter();
  return (
    <>
    <div className="justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="relative mt-5 avion">
            <FaPlane size={70} /> {/* Ícono de avión con tamaño 40 */}
            <p >SKYFLY</p>
      </div>
          <ProfileForm />     
    </div>
    </>
  );
}
