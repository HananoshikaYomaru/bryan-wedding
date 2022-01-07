import { Event } from "./Timeline"
import Image from "next/image"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { useLocale } from "../lib/locale"
import Link from "next/link"

const MobileTimeline = ({ events }: { events: Event[] }) => {
    const { L } = useLocale()
    return (
        <div className="flex flex-col w-full items-center my-20 space-y-5">
            {/* card */}
            {
                events.map((e, index) => {
                    return (
                        <>
                            <Link href="gallery" >
                                <a className="w-5/6 aspect-[5/3] rounded-lg shadow-lg bg-white flex flex-row overflow-hidden">

                                    <div className="w-2/5 bg-red-200 relative">
                                        <Image src={e.image} layout="fill" objectFit="cover" className=""></Image>
                                    </div>
                                    <div className="w-3/5 p-3 xs:p-8 sm:p-10 flex flex-col justify-between">
                                        <div>
                                            <p className="heading font-wenyue underline mb-3">{e.title}</p>
                                            <p className="font-wenyue line-clamp-6 xs:line-clamp-10 text-normal">{e.description}</p>
                                        </div>
                                        <p className="font-wenyue text-normal text-indigo-600">{L().events.date}: {e.date}</p>
                                    </div>

                                </a>
                            </Link>
                            {index != events.length - 1 && <ChevronDownIcon className="w-6 h-10 md:w-10 md:h-10 text-sage"></ChevronDownIcon>}
                        </>
                    )
                })
            }


        </div>
    )
}

export default MobileTimeline