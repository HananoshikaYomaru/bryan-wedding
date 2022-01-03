import { NextPage } from "next"
import banner from "../../public/images/info_banner.jpg"
import Image from "next/image"

const Home : NextPage = () => { 
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
                        <p className="font-serif text-6xl  text-pickled-bluewood">Our Story</p>
                    </div>
                </div>
            </div>


            {/* timeline */}
            <div className="relative h-[200rem] w-full">
                
            </div>

        </>
    )
}
export default Home 