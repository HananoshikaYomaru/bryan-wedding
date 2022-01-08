import { NextPage } from "next"
import banner from "../../public/images/cover.webp"
import Image from "next/image"
import moment from "moment"
import { useLocale } from "../../lib/locale"
import { useMediaQuery } from "../../lib/mediaQuery"
import { ChevronDownIcon } from "@heroicons/react/solid"
import TimeLine , {Event}from "../../components/Timeline"
import MobileTimeline from "../../components/MobileTimeline"
import Layout from "../../components/Layout"

const Home: NextPage = () => {
    const { getLocale, L } = useLocale();
    const isTabletOrMobile = useMediaQuery('(max-width: 747px)')
    const e = L().events.events
    const events : Event[] = [
        {
            image : "https://res.cloudinary.com/yomaru/image/upload/w_1000,c_scale/v1641532719/propose/DSCF1931_pgrtir.webp" , 
            ...e[0], 
        }, 
        {
            image : "https://res.cloudinary.com/yomaru/image/upload/w_1000,c_scale/v1641532719/propose/DSCF1931_pgrtir.webp", 
            ...e[1] , 
        },
        {
            image : "https://res.cloudinary.com/yomaru/image/upload/w_1000,c_scale/v1641532719/propose/DSCF1931_pgrtir.webp", 
            ...e[2] , 
        },
        {
            image : "https://res.cloudinary.com/yomaru/image/upload/w_1000,c_scale/v1641532719/propose/DSCF1931_pgrtir.webp", 
            ...e[3] , 
        }
    ]


    return (
        <Layout>
            {/* banner */}
            <div className="w-full">
                <div className="h-72 sm:h-144 relative w-full ">
                    <div className="absolute h-full bg-blue-200 w-full"></div>
                    {/* <img src="/images/P1322774_e.jpg" className="absolute h-144 w-full object-cover opacity-50" ></img> */}
                    <Image src="https://res.cloudinary.com/yomaru/image/upload/v1641532719/propose/DSCF1931_pgrtir.webp" layout="fill" objectFit='cover' objectPosition="50% 60%" className="absolute h-144 w-full object-cover opacity-50" />
                    <p className=" absolute whitespace-nowrap top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 space-y-5 font-serif font-bold text-2xl sm:text-6xl  text-pickled-bluewood">{L().events.title}</p>
                </div>
            </div>

            {/* timeline */}
            {
                !isTabletOrMobile ? <TimeLine events={events}/> : <MobileTimeline events={events}/>
            }
        </Layout>
    )
}
export default Home 