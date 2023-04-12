import { FC } from "react";
import Link from 'next/link';
import Image from "next/image";

const Footer: FC = () => {


    return  (
        <footer className='flex gap-8 items-center justify-center bg-quaternaryHW text-white p-20'>
            <Link href='' > Instagram (Pronto)</Link>
            <Link href='' > Entregas y envios (Pronto)</Link>
            <Link href='' > Whatsapp (Pronto) </Link>
        </footer>
    )
}

export default Footer;