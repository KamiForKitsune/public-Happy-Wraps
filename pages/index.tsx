import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Masthead from 'components/masthead'
import WhyHappyWraps from 'components/whyHappyWraps'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Happy-Wraps</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className='font-bold text-9xl'> AHHHHHH</div> */}
      <Masthead />
      <WhyHappyWraps />
      <Contact />
      <Footer />
    </div>
  )
}
