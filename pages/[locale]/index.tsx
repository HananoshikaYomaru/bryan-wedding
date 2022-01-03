import type { NextPage } from 'next'
import Image from "next/image"
import banner from  "../../public/images/P1322774_e.jpg"
import image1 from "../../public/images/P1322586_e.jpg"
import { useLocale } from '../../lib/locale'
import Link from 'next/link'
import moment from 'moment'
import { useEffect, useState } from 'react'
import Timer from '../../components/Timer'




const Home: NextPage = () => {
  const {getLocale, L} =   useLocale()

  const data = { 
    image1 : image1 ,
    image2 : image1 ,
    image3 : image1, 
  }
 
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
              <p className="text-soapstone drop-shadow font-wenyue text-base md:text-2xl">{L().home.wedding_day}</p>
              <p className="font-thankyou text-soapstone text-3xl  md:text-7xl drop-shadow whitespace-nowrap">Bryan & Fanny</p>
              <Link href={`/${getLocale()}/story`}><a className="bg-soapstone px-5 py-2 text-pickled-bluewood font-copperplate drop-shadow rounded-xl text:text-sm md:text-xl">{L().home.story}</a></Link>
            </div>
          </div>
        </div>
      </div>

      {/* photos  */}
      <div className="w-3/4 2xl:w-1/2 mt-10 flex flex-col items-center max-w-6xl">
        <p className={`mb-10 heading ${getLocale() == "en" ? "font-thankyou" : "font-wenyue"} ` }>{L().home.about_us}</p>
        <div className="relative font-thankyou h-200 lg:h-300 w-full">

          <div className="absolute h-48 xs:h-56 sm:h-96 lg:h-144 w-full flex flex-row">
            <div className="bg-red-200 h-full aspect-[3] drop-shadow-xl  overflow-hidden ">
              <Image src={image1} layout='fill' objectFit='cover'></Image>
            </div>
            <div className="pl-5 py-5 md:pl-10 md:py-6 lg:pl-20 lg:py-10 ">
              <p className="font-wenyue text-xs sm:text-sm line-clamp-10 lg:line-clamp-15">
                {L().home.des1}
              </p>
              </div>
          </div>

          <div className="absolute  h-48 xs:h-56 sm:h-96 lg:h-144 w-full bottom-0 flex flex-row-reverse items-end" >
            <div className=" bg-red-200  drop-shadow-xl h-full aspect-[3] overflow-hidden ">
              <Image src={image1} layout='fill' objectFit='cover'></Image>
            </div>
            <div className="pr-5 py-5 md:pr-10 md:py-6 lg:pr-20 lg:py-10">
              <p className="font-wenyue text-xs sm:text-sm line-clamp-10 lg:line-clamp-15 ">
                {L().home.des2}
              </p>
              </div>
          </div>

          <div className="absolute inset-0 top-1/2 left-1/2 bg-red-200 h-64 w-48 lg:h-96 lg:w-72  transform -translate-x-1/2 -translate-y-1/2 drop-shadow-xl">
            <Image src={image1} layout='fill' objectFit='cover'></Image>
          </div>

        </div>
      </div>
    {/* count down */}
      <div className="mt-20 w-full h-fit flex flex-col items-center p-10 space-y-10">
        <p className={`heading ${getLocale() == "en"? "font-thankyou" : "font-wenyue"}` }>{L().home.day_until}</p>
        <Timer/>
      </div>
    </>
  )
}

export default Home
