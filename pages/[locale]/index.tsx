import type { NextPage } from 'next'
import Image from "next/image"
import banner from "../../public/images/P1322774_e.jpg"
import image1 from "../../public/images/P1322586_e.jpg"
import { useLocale } from '../../lib/locale'
import Link from 'next/link'
import moment from 'moment'
import { useEffect, useState } from 'react'
import Timer from '../../components/Timer'




const Home: NextPage = () => {
  const { getLocale, L } = useLocale()

  const data = {
    image1: image1,
    image2: image1,
    image3: image1,
  }

  return (
    <>

      {/* the banner  */}
      <div className="w-full">
        <div className="h-144 relative w-full ">
          <div className="absolute h-144 bg-blue-200 w-full"></div>
          {/* <img src="/images/P1322774_e.jpg" className="absolute h-144 w-full object-cover opacity-50" ></img> */}
          <Image src={banner} layout="fill" objectFit='cover' objectPosition="50% 35%" className="absolute h-144 w-full object-cover opacity-50" />
          {/* <div className="backdrop-grayscale h-10 w-10"></div> */}
          <div className="absolute flex items-center justify-center inset-0">
            <div className="flex flex-col items-center space-y-10 mt-32">
              <p className="text-soapstone drop-shadow font-wenyue text-base md:text-2xl">{L().home.wedding_day}</p>
              <p className="font-thankyou text-soapstone text-3xl  md:text-7xl drop-shadow whitespace-nowrap">Bryan & Fanny</p>
              <Link href={`/${getLocale()}/info`}><a className="bg-soapstone px-5 py-2 text-pickled-bluewood font-copperplate drop-shadow rounded-xl text:text-sm md:text-xl ">{L().home.info}</a></Link>
            </div>
          </div>
        </div>
      </div>

      {/* photos  */}
      <div className="w-3/4 2xl:w-1/2 mt-10 flex flex-col items-center max-w-6xl">
        <p className={`mb-10 heading ${getLocale() == "en" ? "font-thankyou" : "font-wenyue"} `}>{L().home.about_us}</p>
        <div className="relative h-200 lg:h-300 w-full">

          <div className="absolute h-48 xs:h-56 sm:h-96 lg:h-144 w-full flex flex-row">
            <div className="relative h-full  aspect-[3/4]  ">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-xl h-full aspect-[3/4] ">
             <Image src={image1} layout='fill' objectFit='cover'></Image>
             </div>
            </div>
            <div className="pl-5 py-5 md:pl-10 md:py-6 lg:pl-20 lg:py-10 ">
              <p className="font-wenyue text-xs sm:text-sm line-clamp-10 lg:line-clamp-15">
                {L().home.des1}
              </p>
            </div>
          </div>

          <div className="absolute  h-48 xs:h-56 sm:h-96 lg:h-144  bottom-0  flex flex-row-reverse items-end" >
            <div className="relative h-full aspect-[3/4]  ">
            <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-xl h-full aspect-[3/4] ">
            <Image src={image1} layout='fill' objectFit='cover'></Image>
            </div>
            </div>
            <div className="pr-5 py-5 md:pr-10 md:py-6 lg:pr-20 lg:py-10">
              <p className="font-wenyue text-xs sm:text-sm line-clamp-10 lg:line-clamp-15 ">
                {L().home.des2}
              </p>
              </div>
          </div>
          {/* <div className="absolute  bottom-0 right-0 w-full h-fit" >
            <div className="relative">
              <div className="absolute bg-red-200 bottom-0 right-0  h-48 xs:h-56 sm:h-96 lg:h-144 aspect-[3/4] ">
                <div className="relative w-full h-full">
                  <Image src={image1} layout='fill' objectFit='cover'></Image>
                  <div className="absolute bottom-0 -left-32 w-32 sm:w-64 sm:-left-64 lg:w-96 lg:-left-96 inset-0 pr-5 py-5 md:pr-10 md:py-6 lg:pr-20 lg:py-10" >
                    <div className="relative w-full h-full ">
                      <p className="absolute bottom-0 font-wenyue text-xs sm:text-sm line-clamp-10 lg:line-clamp-15 ">
                        {L().home.des2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="absolute inset-0 top-1/2 left-1/2  h-64 w-48 lg:h-96 lg:w-72  transform -translate-x-1/2 -translate-y-1/2 drop-shadow-xl">
            <Image src={image1} layout='fill' objectFit='cover'></Image>
          </div>

        </div>
      </div>
      {/* count down */}
      <div className="mt-20 w-full h-fit flex flex-col items-center p-10 space-y-10">
        <p className={`heading ${getLocale() == "en" ? "font-thankyou" : "font-wenyue"}`}>{L().home.day_until}</p>
        <Timer />
      </div>
    </>
  )
}

export default Home
