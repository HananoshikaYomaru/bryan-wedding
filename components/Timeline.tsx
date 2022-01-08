import Image from "next/image"
import Link from "next/link"
import { useLocale } from "../lib/locale"


export type Event = {
    image: string,
    title: string,
    description: string,
    date: string,
}

const TimeLine = ({ events }: { events: Event[] }) => {
    const { getLocale, L } = useLocale()
    console.log(events)
    return (
        <div className="h-fit w-full flex justify-center items-center my-20" >
            <div className="w-5/6 sm:w-3/4 max-w-[70rem] h-fit  shadow-xl bg-wheat relative">
                <div className="container bg-white mx-auto w-full h-full p-10 ">
                    <div className="relative wrap  h-full ">
                        <div className="border-2-2 absolute  border-gray-500 h-full border left-[1rem] xl:left-1/2" ></div>
                        {
                            events.map((event, index) => {
                                return <div key={index} className={`mb-8 flex xl:justify-between items-center w-full right-timeline ${index % 2 == 0 && "xl:flex-row-reverse"}`}>
                                    <div className="xl:order-1 xl:w-5/12 hidden xl:inline-block"></div>
                                    <div className="order-1 w-[32px] h-[32px] rounded-full bg-gray-600 z-20 flex items-center">
                                        <h1 className="mx-auto font-semibold text-base xl:text-lg text-white">{index + 1}</h1>
                                    </div>
                                    <Link href={`gallery`}>
                                        <a className="order-1 bg-soapstone rounded-lg shadow-xl w-full xl:w-5/12 ml-10 xl:mx-0 px-6 py-4 flex flex-col">
                                        <h3 className={`text-center text-lg underline mb-3 font-wenyue`}>{event.title}</h3>
                                        <div className="bg-red-200 w-full aspect-[7/3] xl:aspect-[5/3]  relative mb-3">
                                            <Image src={event.image} layout="fill" objectFit="cover" />
                                        </div>
                                        <p className="text-sm leading-snug tracking-wide text-gray-700 font-wenyue">{event.description}</p>
                                        <p className="text-xs sm:text-sm leading-snug tracking-wide text-indigo-600 font-wenyue">{L().events.date}: {event.date}</p>
                                        </a>
                                    </Link>
                                </div>

                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeLine