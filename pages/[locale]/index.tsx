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

  const data = { 
    des1 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at sapien ac leo pellentesque volutpat in ut erat. Aliquam faucibus ultrices auctor. Curabitur convallis tempus sem, at tincidunt ex vestibulum nec. Sed nisi arcu, interdum scelerisque felis ut, tempor pellentesque erat. Etiam viverra vestibulum leo, vitae aliquet urna cursus nec. Duis lobortis diam ut lacinia bibendum. Nulla fermentum odio dui, vel tristique sapien ornare non. Morbi molestie lobortis varius. Curabitur id molestie tortor, a convallis odio. Aenean mattis nunc nunc, scelerisque tincidunt sapien condimentum eu." , 
    des2 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at sapien ac leo pellentesque volutpat in ut erat. Aliquam faucibus ultrices auctor. Curabitur convallis tempus sem, at tincidunt ex vestibulum nec. Sed nisi arcu, interdum scelerisque felis ut, tempor pellentesque erat. Etiam viverra vestibulum leo, vitae aliquet urna cursus nec. Duis lobortis diam ut lacinia bibendum. Nulla fermentum odio dui, vel tristique sapien ornare non. Morbi molestie lobortis varius. Curabitur id molestie tortor, a convallis odio. Aenean mattis nunc nunc, scelerisque tincidunt sapien condimentum eu." , 
    image1 : image1 ,
    image2 : image1 ,
    image3 : image1, 
  }
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
              <p className="text-soapstone drop-shadow font-wenyue text-xl md:text-2xl">Wedding Day</p>
              <p className="font-thankyou text-soapstone text-2xl  md:text-7xl drop-shadow whitespace-nowrap">Bryan & Fanny</p>
              <Link href={`/${getLocale()}/story`}><a className="bg-soapstone px-5 py-2 text-pickled-bluewood font-copperplate drop-shadow rounded-xl text-xl"> Our story</a></Link>
            </div>
          </div>
        </div>
      </div>

      {/* photos  */}
      <div className="w-3/4 2xl:w-1/2 mt-10 flex flex-col items-center max-w-6xl">
        <p className="heading mb-10">About Us</p>
        <div className="relative font-thankyou h-200 lg:h-300 w-full">
          <div className="absolute h-48 xs:h-56 sm:h-96 lg:h-144 w-full flex flex-row">
            <div className="bg-red-200 h-full aspect-[3/4] drop-shadow-xl">
              <Image src={image1} layout='fill' objectFit='cover'></Image>
            </div>
            <div className="px-5 py-5 md:px-10 md:py-6 lg:px-20 lg:py-10 ">
              <p className="font-wenyue text-xs sm:text-sm line-clamp-10 lg:line-clamp-15">
                {data.des1}
              </p>
              </div>
          </div>

          <div className="absolute h-48 xs:h-56 sm:h-96 lg:h-144 w-full bottom-0 flex flex-row-reverse items-end" >
            <div className="bg-red-200  drop-shadow-xl aspect-[3/4] h-full">
              <Image src={image1} layout='fill' objectFit='cover'></Image>
            </div>
            <div className="px-5 py-5 md:px-10 md:py-6 lg:px-20 lg:py-10">
              <p className="font-wenyue text-xs sm:text-sm line-clamp-10 lg:line-clamp-15 ">
                {data.des2}
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
        <p className="heading ">Date We Geting Married</p>
        <div className="flex flex-row space-x-2 xs:space-x-5 sm:space-x-10 ">
          <div className="w-16 h-20 sm:w-32 sm:h-40 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
            <p className="font-wenyue text-2xl text-pickled-bluewood">{time.asDays().toFixed()}</p>
            <p className="font-copperplate text-pickled-bluewood  text-xs sm:text-base">days</p>
          </div>
          <div className="w-16 h-20 sm:w-32 sm:h-40 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
            <p className="font-wenyue text-2xl text-pickled-bluewood">{time.hours()}</p>
            <p className="font-copperplate text-pickled-bluewood  text-xs sm:text-base">hours</p>
          </div>
          <div className="w-16 h-20 sm:w-32 sm:h-40 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
            <p className="font-wenyue text-2xl text-pickled-bluewood ">{time.minutes()}</p>
            <p className="font-copperplate text-pickled-bluewood  text-xs sm:text-base">minutes</p>
          </div>
          <div className="w-16 h-20 sm:w-32 sm:h-40 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
            <p className="font-wenyue text-2xl text-pickled-bluewood">{time.seconds()}</p>
            <p className="font-copperplate text-pickled-bluewood text-xs sm:text-base">seconds</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
