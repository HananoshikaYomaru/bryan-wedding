import { NextPage } from "next"
import banner from "../../public/images/info_banner.jpg"
import Image from "next/image"
import moment from "moment"

const Home : NextPage = () => { 

    type Event = { 
        image : JSX.Element , 
        title : string , 
        description : string , 
        time : moment.Moment,
    }

    const Events : Event[] = []
   
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
                        <p className="font-serif text-6xl  text-pickled-bluewood">Upcoming Events</p>
                    </div>
                </div>
            </div>

            {/* timeline */}
            <div className="relative h-[200rem] w-full">
                <div className="absolute w-3/4 h-[180rem] bg-red shadow-xl mt-20 left-1/2 transform -translate-x-1/2 bg-white">
                    <div className="relative left-1/2  h-[170rem] w-0.5 transform -translate-x-1/2 top-1/2 -translate-y-1/2 bg-gray-200">
                        <div className="absolute w-64 h-96 right-12 bg-red-200"></div>
                        <div className="absolute bg-gray-200  rounded-full w-2 h-2 -translate-x-[3px] top-[2.5rem]"></div>
                        <div className="absolute w-96 h-96 left-12 bg-blue-200 p-5">
                        <p className="font-wenyue">soemthing</p>
                        </div>
                        <div className="absolute w-64 h-96 top-[30rem] left-12 bg-red-200"></div>
                        <div className="absolute bg-gray-200  rounded-full w-2 h-2 -translate-x-[3px] top-[32.5rem]"></div>

                        <div className="absolute w-96 h-96 top-[30rem] right-12 bg-blue-200 p-5">
                            <p className="font-wenyue">soemthing</p>
                        </div>
                        <div className="absolute w-64 h-96 top-[60rem] right-12 bg-red-200"></div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home 