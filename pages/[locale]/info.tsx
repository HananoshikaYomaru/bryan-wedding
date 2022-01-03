import { NextPage } from "next";
import Image from "next/image";
import { Fragment, useState } from "react";
import { useLocale } from "../../lib/locale";
import banner from "../../public/images/info_banner.jpg";
import flower from "../../public/images/flower.png";
import { Carousel } from "react-responsive-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import image1 from "../../public/images/carousel1.jpg"

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
                <div className="h-144 relative w-full ">
                    <div className="absolute h-144 bg-blue-200 w-full"></div>
                    {/* <img src="/images/P1322774_e.jpg" className="absolute h-144 w-full object-cover opacity-50" ></img> */}
                    <Image src={banner} layout="fill" objectFit='cover' objectPosition="50% 100%" className="absolute h-144 w-full object-cover opacity-50" />
                    {/* <div className="backdrop-grayscale h-10 w-10"></div> */}
                    <div className="absolute flex flex-col items-center justify-center inset-0 space-y-5">
                        <div className="flex flex-row drop-shadow-md">
                            <a href="#map"><p className="text-pickled-bluewood font-wenyue mx-5 hover:underline">Map</p></a>
                            <div className="w-[0.1px] bg-pickled-bluewood"></div>
                            <a href="#details"><p className="text-pickled-bluewood font-wenyue mx-5 hover:underline">Details</p></a>
                            <div className="w-[0.1px] bg-pickled-bluewood"></div>
                           <a href="#gallery"> <p className="text-pickled-bluewood font-wenyue mx-5 hover:underline">Gallery</p></a>
                        </div>
                        <p className="font-serif text-6xl  text-pickled-bluewood">Wedding Day Information</p>
                    </div>
                </div>
            </div>

            {/* map */}
            <Fragment >
                <p id="map" className="heading mt-20">Map</p>
                <iframe className="w-200 h-144 rounded-3xl shadow-2xl mt-10" src="https://maps.google.com/maps?q=%20Auberge%20Discovery%20Bay%20Hotel&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}></iframe>
            </Fragment>


            {/* info */}
            <div id="details" className="relative flex flex-col items-center space-y-10  shadow-2xl p-20 mt-20 bg-white">
                <div className="absolute top-0 left-0 drop-shadow-xl transform -translate-x-1/4 -translate-y-1/4"><Image src={flower} width={200} height={200} className=""></Image></div>

                <p className="heading">Details</p>

                <table className="text-pickled-bluewood font-wenyue w-144">
                    <tr >
                        <td className="w-48 h-10">Date & Time : </td>
                        <td>5 March 2022, 13 : 30 - 16 : 30</td>
                    </tr>
                    <tr>
                        <td className="w-48 h-10">Location ： </td>
                        <td>Auberge Discovery Bay Hotel, Hong Kong</td>
                    </tr>
                    <tr>
                        <td className="w-48 h-10">Dress Code ： </td>
                        <td>Semi-formal</td>
                    </tr>
                    <tr>
                        <td className="w-48 h-10">Video Link ： </td>
                        <td><a href="https://www.youtube.com" className="text-gray-500 underline">https://linktovideo.example</a></td>
                    </tr>
                </table>

                <p className="heading">Shuttle Bus</p>
                <table className="text-pickled-bluewood font-wenyue w-144">
                    <tr >
                        <td className="w-48 h-10">Time : </td>
                        <td>12 : 30 , 12 : 45</td>
                    </tr>
                    <tr>
                        <td className="w-48 h-10">Pick up location : </td>
                        <td>Sunny Bay Station exit A</td>
                    </tr>
                </table>
            </div>

            {/* some photos of venue */}

            <div id="gallery" className="flex flex-col items-center mb-20">
                <p className="heading mt-20 mb-10">Gallery</p>
                {/* <p className="text-pickled-bluewood font-wenyue">Awesome wedding location</p> */}
                <div className=" flex flex-row w-fit justify-center space-x-5">
                    <button onClick={() => {
                        setCurrent(current - 1 == -1 ? images.length - 1 : current - 1)
                    }}><ChevronLeftIcon className="w-6 h-6 rounded-full hover:bg-wheat transition ease-in-out duration-300"></ChevronLeftIcon></button>
                   
                   <div className="aspect-[2/1] w-2/3 overflow-hidden transition-opacity ease-in-out duration-200">
                        <Image src={images[current]} layout="intrinsic" />
                   </div>
                   
                    <button onClick={() => {
                        setCurrent(current + 1 == images.length ? 0 : current + 1)
                    }}><ChevronRightIcon className="w-6 h-6 rounded-full hover:bg-wheat transition ease-in-out duration-300"></ChevronRightIcon></button>
                </div>

            </div>
        </>
    )
}

export default Home; 