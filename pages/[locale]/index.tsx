import type { NextPage } from 'next'
import Image from "next/image"
import banner from  "../../public/images/P1322774_e.jpg"
import image1 from "../../public/images/P1322586_e.jpg"
import { useLocale } from '../../lib/locale'
import Link from 'next/link'
import moment from 'moment'
import { useEffect, useState } from 'react'


const Home: NextPage = () => {
  const {getLocale} =   useLocale()
  const [time , setTime] = useState(moment.duration(moment("2022-03-05T13:30:00" , "YYYY-MM-DDTHH:mm:ss").diff(moment())))
  useEffect(() => {
    let interval = setInterval(()=> {
      // console.log("hello")
      // console.log(moment("2022-03-05T13:30:00" , "YYYY-MM-DDTHH:mm:ss").day())
      setTime(moment.duration(moment("2022-03-05T13:30:00" , "YYYY-MM-DDTHH:mm:ss").diff(moment())))
      
    }, 1000) 
    return () => {clearInterval(interval)}
  }, [])
  return (
    <>
    {/* the banner  */}
      <div className="w-full">
        <div className="h-144 relative w-full ">
          <div className="absolute h-144 bg-blue-200 w-full"></div>
          {/* <img src="/images/P1322774_e.jpg" className="absolute h-144 w-full object-cover opacity-50" ></img> */}
          <Image src={banner} layout="fill" objectFit='cover' objectPosition="50% 35%" className="absolute h-144 w-full object-cover opacity-50"/>
          {/* <div className="backdrop-grayscale h-10 w-10"></div> */}
          <div className="absolute flex items-center justify-center inset-0">
            <div className="flex flex-col items-center space-y-10 mt-32">
              <p className="text-soapstone drop-shadow font-wenyue text-2xl">Wedding Day</p>
              <p className="font-thankyou text-soapstone text-7xl drop-shadow">Bryan & Fanny</p>
              <Link href={`/${getLocale()}/story`}><a className="bg-soapstone px-5 py-2 text-pickled-bluewood font-copperplate drop-shadow rounded-xl text-xl"> Our story</a></Link>
            </div>
          </div>
        </div>
      </div>

      {/* photos  */}
      <div className="w-3/4 2xl:w-1/2 mt-10 flex flex-col items-center">
        <p className="text-pickled-bluewood font-thankyou text-3xl m-10 drop-shadow">About Us</p>
        <div className="relative font-thankyou h-300 w-full">
          <div className="absolute bg-blue-200 h-144 w-full flex flex-row">
            <div className="bg-red-200 h-144 w-96 drop-shadow-xl">
              <Image src={image1} layout='fill' objectFit='cover'></Image>
            </div>
            <div className="px-20 py-10">something</div>
          </div>

          <div className="absolute bg-blue-200 h-144 w-full bottom-0">
            <div className="relative w-full h-full ">
              <div className="absolute bg-red-200 h-144 w-96 right-0 drop-shadow-xl">
              </div>
            </div>
          </div>

          <div className="absolute inset-0 top-1/2 left-1/2 bg-red-200 h-96 w-72  transform -translate-x-1/2 -translate-y-1/2 drop-shadow-xl">

          </div>

        </div>
      </div>
    {/* count down */}
      <div className="mt-20 w-full h-96 flex flex-col items-center p-10 space-y-10">
        <p className="font-thankyou font-bold text-pickled-bluewood text-3xl drop-shadow">Date We Geting Married</p>
        <div className="flex flex-row space-x-10 ">
          <div className="w-32 h-40 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
            <p className="font-wenyue text-2xl text-pickled-bluewood">{time.asDays().toFixed()}</p>
            <p className="font-copperplate text-pickled-bluewood">days</p>
          </div>
          <div className="w-32 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
            <p className="font-wenyue text-2xl text-pickled-bluewood">{time.hours()}</p>
            <p className="font-copperplate text-pickled-bluewood">hours</p>
          </div>
          <div className="w-32 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
            <p className="font-wenyue text-2xl text-pickled-bluewood">{time.minutes()}</p>
            <p className="font-copperplate text-pickled-bluewood">minutes</p>
          </div>
          <div className="w-32 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
            <p className="font-wenyue text-2xl text-pickled-bluewood">{time.seconds()}</p>
            <p className="font-copperplate text-pickled-bluewood">seconds</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
