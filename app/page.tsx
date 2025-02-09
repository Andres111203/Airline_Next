import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import {ProfileForm} from '@/app/profile';
 

import FooterSection from "@/components/footerSection";
import { FaPlane } from 'react-icons/fa';
// import { inter } from "@/app/fonts";

export default function Home() {
  return (
    <>
    <div className="justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="relative mt-5 avion">
            <FaPlane size={70} /> {/* Ícono de avión con tamaño 40 */}
            <p >SKYFLY</p>
      </div>
          <ProfileForm />
      <div className="fixed bottom-0 left-16 right-0">
        
      </div>
    </div>
    </>
  );
}
