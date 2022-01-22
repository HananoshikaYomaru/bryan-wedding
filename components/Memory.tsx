import { useLocale } from "../lib/locale";
import Image from "next/image"

import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XCircleIcon } from "@heroicons/react/solid"


export type Memory = {
    thumbnail: string,
    image: string,
    title?: string,
    description?: string,
}


const Memory = ({ title, memories }: { title : string , memories: Memory[] }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [imageNumber, setImageNumber] = useState(0);
    const openImage = (image: number) => {
        setImageNumber(image)
        setIsOpen(true);
    }
    const Box = ({ i }: { i: number }) => {
        return <div className="h-auto w-auto aspect-[1/1] hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200 relative" onClick={() => openImage(i)}>
            <Image src={memories[i].thumbnail} layout="fill" objectFit="cover" />
        </div>
    }
    const { getLocale } = useLocale();
    return (
        <div id={title} className="w-5/6 h-fit flex flex-col items-center mt-20">
            <p className={`heading ${getLocale() == "en" ? "font-thankyou " : "font-wenyue"}`}>{title}</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-6 mt-10 w-full lg:w-[75%] ">
                {
                    memories.map((_, index) => {
                        // if (![7, 10, 11].includes(index)) {
                            return <Box key={index} i={index} />
                        // } else {
                        //     return <div className="invisible"></div>
                        // }
                    })
                }
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-30 overflow-y-auto"
                    onClose={() => setIsOpen(false)}
                >
                    <div className="min-h-screen px-4 text-center z-30">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-pickled-bluewood opacity-70" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"

                        >
                            <div className="inline-block w-200  p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <button onClick={() => setIsOpen(false)}><XCircleIcon className="w-6 h-6 text-gray-300"></XCircleIcon></button>
                                <div className="flex flex-col  items-center space-y-5 h-fit w-fit">
                                    <div className="w-fit h-fit" >
                                        {/* < Image src={memories[imageNumber].image} layout="fill" objectFit="cover" className="bg-gray-100" /> */}
                                        <img src={memories[imageNumber].image}  alt={memories[imageNumber].description} />
                                    </div>

                                    {
                                        memories[imageNumber].title != "" && <Dialog.Title
                                            as="h3"
                                            className="text-lg font-wenyue leading-6 text-gray-900 "
                                        >
                                            {memories[imageNumber].title}
                                        </Dialog.Title>
                                    }

                                    {
                                        memories[imageNumber].description != "" && <p className="text-sm text-gray-500">
                                            {memories[imageNumber].description}
                                        </p>
                                    }
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default Memory; 