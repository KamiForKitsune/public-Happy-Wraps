import Image from "next/image"
import { FC } from "react"


const WhyHappyWraps: FC = () => {

    return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
        <div className='container mx-auto px-11'>
            <p className='leading-tight max-w-5xl mx-auto text-4xl tracking-tight'>
                <strong> Regalos memorables  </strong>
                Un obsequio que trasciende lo material y se convierte en un recuerdo inolvidable.
            </p>
        </div>
        <div className='container mx-auto px-8 mt-20'>
            <p className='leading-tight max-w-5xl mx-auto text-4xl tracking-tight'>
                <strong> Para personas únicas, envolturas excepcionales </strong>
                Sorprende con algo exclusivo, presentado en un empaque original y llamativo.
            </p>
        </div>
        <div className='container mx-auto px-10 text-center mt-24 '>
            <h2> Happy Wraps</h2>
            <div className="mt-2"> &ldquo;The Flower &rdquo; </div>
            <div className="flex justify-center pt-4">
                <Image src="/assets/company-icon/icons8-box-512.png" alt='mk-1 the flower'  width={188/3}
                height={188/3}/>
            </div>
        </div>

    </section>
        )
}

export default WhyHappyWraps
