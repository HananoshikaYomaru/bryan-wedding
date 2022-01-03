import { NextPage } from "next";
import Image from "next/image";
import { Fragment, useState } from "react";
import { useLocale } from "../../lib/locale";
import banner from "../../public/images/info_banner.jpg";
import flower from "../../public/images/flower.png";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import image1 from "../../public/images/carousel1.jpg"
import { useMediaQuery } from 'react-responsive'


const Home: NextPage = () => {
    const images = [
        image1,
        banner
    ]
    const { getLocale } = useLocale()
    const [current, setCurrent] = useState(0)
    return (
        <>
            {/* banner */}
            <div className="w-full">
                <div className="h-72 sm:h-144 relative w-full ">
                    <div className="absolute h-full bg-blue-200 w-full"></div>
                    {/* <img src="/images/P1322774_e.jpg" className="absolute h-144 w-full object-cover opacity-50" ></img> */}
                    <Image src={banner} layout="fill" objectFit='cover' objectPosition="50% 100%" className="absolute h-144 w-full object-cover opacity-50" />
                    <div className="absolute flex flex-col items-center justify-center inset-0 space-y-5">
                        <div className="flex flex-row items-center drop-shadow-md">
                            <a href="#map"><p className="text-pickled-bluewood font-wenyue mx-5 hover:underline text-xs sm:text-base">Map</p></a>
                            <div className="w-1 h-1 rounded-full bg-pickled-bluewood"></div>
                            <a href="#details"><p className="text-pickled-bluewood font-wenyue mx-5 hover:underline text-xs sm:text-base">Details</p></a>
                            <div className="w-1 h-1 rounded-full bg-pickled-bluewood"></div>
                           <a href="#gallery"> <p className="text-pickled-bluewood font-wenyue mx-5 hover:underline text-xs sm:text-base">Gallery</p></a>
                        </div>
                        <p className="font-serif text-2xl md:text-6xl  text-pickled-bluewood">Wedding Day Information</p>
                    </div>
                </div>
            </div>

            {/* map */}
            <Fragment >
                <p id="map" className={`heading mt-20 ${getLocale() == "en" ? "font-thankyou" : "font-wenyue"}`}>Map</p>
                <iframe className="w-5/6 sm:max-w-[32rem] aspect-1 rounded-3xl shadow-2xl mt-10" src="https://maps.google.com/maps?q=%20Auberge%20Discovery%20Bay%20Hotel&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}></iframe>
            </Fragment>


            {/* info */}
            <div id="details" className="relative flex flex-col items-center space-y-10  shadow-2xl p-5 xs:p-10 md:p-20 mt-20 w-5/6 sm:max-w-[40rem] bg-white">
                <div className="absolute w-24 sm:w-48 top-0 left-0 drop-shadow-xl transform -translate-x-1/4 -translate-y-1/4">
                    <Image src={flower} />
                    </div>

                <p className={`heading ${getLocale() =="en" ? "font-thankyou" : "font-wenyue"}`}>Details</p>

                <table className="text-pickled-bluewood font-wenyue">
                    <tr >
                        <td className="w-48 h-10 text-normal whitespace-nowrap">Date & Time : </td>
                        <td className="text-normal">5 March 2022, 13 : 30 - 16 : 30</td>
                    </tr>
                    <tr>
                        <td className="w-48 h-10 text-normal whitespace-nowrap">Location ： </td>
                        <td className="text-normal">Auberge Discovery Bay Hotel, Hong Kong</td>
                    </tr>
                    <tr>
                        <td className="w-48 h-10 text-normal whitespace-nowrap">Dress Code ： </td>
                        <td className="text-normal">Semi-formal</td>
                    </tr>
                    <tr>
                        <td className="w-48 h-10 text-normal whitespace-nowrap">Video Link ： </td>
                        <td className="text-normal"><a href="https://www.youtube.com" className="text-gray-500 underline">https://linktovideo.example</a></td>
                    </tr>
                </table>

                <p className={`heading ${getLocale() == "en" ? "font-thankyou" : "font-wenyue"}`}>Shuttle Bus</p>
                <table className="text-pickled-bluewood font-wenyue">
                    <tr >
                        <td className="w-48 h-10 text-normal whitespace-nowrap">Time : </td>
                        <td className="text-normal whitespace-nowrap">12 : 30 , 12 : 45</td>
                    </tr>
                    <tr>
                        <td className="w-48 h-10 text-normal whitespace-nowrap">Pick up location : </td>
                        <td className="text-normal whitespace-nowrap">Sunny Bay Station exit A</td>
                    </tr>
                </table>
            </div>

            {/* some photos of venue */}

            <div id="gallery" className="flex flex-col items-center mb-20 w-full">
                <p className={`heading mt-20 mb-10 ${getLocale() == "en" ? "font-thankyou" : "font-wenyue"}`}>Gallery</p>
                {/* <p className="text-pickled-bluewood font-wenyue">Awesome wedding location</p> */}
                <div className=" flex flex-row w-5/6 sm:w-2/3 justify-center space-x-5 items-center">
                    <button onClick={() => {
                        setCurrent(current - 1 == -1 ? images.length - 1 : current - 1)
                    }} className="h-fit"><ChevronLeftIcon className="w-6 h-6 rounded-full hover:bg-wheat transition ease-in-out duration-300"></ChevronLeftIcon></button>
                   
                   <div className="aspect-[2/1] w-full relative">
                        <Image src={images[current]} layout="fill" objectFit="cover" />
                   </div>
                   
                    <button onClick={() => {
                        setCurrent(current + 1 == images.length ? 0 : current + 1)
                    }} className="h-fit "><ChevronRightIcon className="w-6 h-6 rounded-full hover:bg-wheat transition ease-in-out duration-300"></ChevronRightIcon></button>
                </div>

            </div>
        </>
    )
}

export default Home; 