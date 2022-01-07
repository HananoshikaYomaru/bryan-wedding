import { NextPage } from "next";
import Image from "next/image";
import { Fragment, useState } from "react";
import { useLocale } from "../../lib/locale";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Map from "../../public/images/map.svg"
import Church from "../../public/images/church.svg"


const Home: NextPage = () => {
    const images = [
        "https://res.cloudinary.com/yomaru/image/upload/v1641534831/bryan/church1_lqadfp.webp",
        "https://res.cloudinary.com/yomaru/image/upload/v1641534831/bryan/church2_tzwvzo.webp"
    ]
    const { getLocale , L } = useLocale()
    const [current, setCurrent] = useState(0)
    const styles = { 
        info : `w-48 h-10 text-normal whitespace-nowrap ${getLocale() == "en" ? "font-wenyue" : "font-chawan" }`, 
    }

    return (
        <>
            {/* banner */}
            <div className="w-full z-10">
                <div className="h-72 sm:h-144 relative w-full ">
                    <div className="absolute h-full bg-blue-200 w-full"></div>
                    <Image src={images[0]} layout="fill" objectFit='cover' objectPosition="50% 100%" className="absolute h-144 w-full object-cover opacity-50" />
                    <div className="absolute flex flex-col items-center justify-center inset-0 space-y-5">
                        <div className="flex flex-row items-center drop-shadow-md">
                            <a href="#map"><p className={`text-pickled-bluewood mx-5 hover:underline text-xs sm:text-base ${getLocale() == "en" ? "font-serif"  : "font-chawan"}`}>{L().info.location}</p></a>
                            <div className="w-1 h-1 rounded-full bg-pickled-bluewood"></div>
                            <a href="#details"><p className={`text-pickled-bluewood mx-5 hover:underline text-xs sm:text-base ${getLocale() == "en" ? "font-serif"  : "font-chawan"}`}>{L().info.details}</p></a>
                            <div className="w-1 h-1 rounded-full bg-pickled-bluewood"></div>
                           <a href="#gallery"> <p className={`text-pickled-bluewood mx-5 hover:underline text-xs sm:text-base ${getLocale() == "en" ? "font-serif"  : "font-chawan"}`}>{L().info.gallery}</p></a>
                        </div>
                        <p className="font-serif font-bold text-2xl md:text-6xl  text-pickled-bluewood">{L().info.title}</p>
                    </div>
                </div>
            </div>

            {/* map */}
            <Fragment >
                <div className="w-5/6 sm:max-w-[32rem] flex flex-col items-center relative">
                    <div className="absolute z-[0] w-full sm:scale-[200%] sm:top-1/2 sm:left-[75%] pointer-events-none"  >
                    <Image src={Map} layout="responsive"/>
                    </div>
                <p id="map" className={`z-10 heading mt-20 ${getLocale() == "en" ? "font-thankyou" : "font-wenyue"}`}>{L().info.location}</p>
                <iframe className="z-20 w-full  aspect-1 rounded-3xl shadow-2xl mt-10" src="https://maps.google.com/maps?q=%20Auberge%20Discovery%20Bay%20Hotel&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}></iframe>
                </div>
            </Fragment>


            {/* info */}
            <div id="details" className="z-10 relative flex flex-col items-center space-y-10  shadow-2xl p-5 xs:p-10 md:p-20 mt-20 w-5/6 sm:max-w-[40rem] bg-white">
                <div className="absolute w-24 h-24 sm:w-48 sm:h-48 top-0 left-0  transform -translate-x-1/4 -translate-y-1/4">
                    <Image src="https://res.cloudinary.com/yomaru/image/upload/e_shadow:90,x_20,y_20,co_rgb:6CA6B3/v1641534831/bryan/flower_bzofas.webp" layout="fill" className=""/>
                    </div>

                <p className={`heading ${getLocale() =="en" ? "font-thankyou" : "font-wenyue"}`}>{L().info.details}</p>

                <table className="text-pickled-bluewood font-wenyue">
                    <tr >
                        <td className={styles.info}>{`${ L().info.date_time} :`}</td>
                        <td className="text-normal">{L().info.date_time_data}</td>
                    </tr>
                    <tr>
                        <td className={styles.info}>{`${L().info.location} : `}</td>
                        <td className="text-normal">{L().info.location_data}</td>
                    </tr>
                    <tr>
                        <td className={styles.info}>{L().info.dress_code} ： </td>
                        <td className="text-normal">Semi-formal</td>
                    </tr>
                    <tr>
                        <td className={styles.info}>{L().info.video_link} ： </td>
                        <td className="text-normal"><a href="https://www.youtube.com" className="text-gray-500 underline">https://linktovideo.example</a></td>
                    </tr>
                </table>

                <p className={`heading ${getLocale() == "en" ? "font-thankyou" : "font-wenyue"}`}>{L().info.shuttle_bus}</p>
                <table className="text-pickled-bluewood font-wenyue">
                    <tr >
                        <td className={styles.info}>{L().info.time} : </td>
                        <td className="text-normal whitespace-nowrap">12 : 30 , 12 : 45</td>
                    </tr>
                    <tr>
                        <td className={styles.info}>{L().info.pick_up_location} : </td>
                        <td className="text-normal whitespace-nowrap">{L().info.pick_up_location_data}</td>
                    </tr>
                </table>
            </div>

            {/* some photos of venue */}

            <div id="gallery" className="flex flex-col items-center mb-20 w-full relative">
                <div className="absolute w-32 sm:w-64 opacity-50 left-[10%] -top-[10%] sm:-top-[20%] pointer-events-none">
                <Image src={Church} layout="responsive" className="" />

                </div>
                <p className={`heading mt-20 mb-10 ${getLocale() == "en" ? "font-thankyou" : "font-wenyue"}`}>{L().info.gallery}</p>
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