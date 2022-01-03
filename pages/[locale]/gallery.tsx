import { NextPage } from "next"
import banner from "../../public/images/info_banner.jpg"
import Image from "next/image"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import image1 from "../../public/images/P1333108_e.jpg"


const Home: NextPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [imageNumber, setImageNumber] = useState(0);
    const openImage = (image: number) => {
        setImageNumber(image)
        setIsOpen(true);
    }

    const memories = [
        {
            image: image1,
            title: "this is a sample title",
            description: "this is a sample description",
        },
        {
            image: image1,
            title: "this is a sample title",
            description: "this is a sample description",
        },
        {
            image: image1,
            title: "this is a sample title",
            description: "this is a sample description",
        }
    ]

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
                        <p className="font-serif text-6xl  text-pickled-bluewood">Gallery</p>
                    </div>
                </div>
            </div>


            {/* timeline */}
            <div className="flex flex-col w-full items-center">
                <div className="w-5/6 h-fit flex flex-col items-center mt-20">
                    <p className="heading">Proposal</p>
                    <div className="grid grid-cols-4 gap-6 mt-10">
                        <div className="relative h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200" onClick={() => openImage(0)}>
                            <Image src={image1} layout="fill" objectFit="cover" className="absolute" />
                        </div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200" onClick={() => openImage(1)}></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200" onClick={() => openImage(2)}></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200" onClick={() => openImage(3)}></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200" onClick={() => openImage(4)}></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200" onClick={() => openImage(5)}></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200" onClick={() => openImage(6)}></div>
                        <div className="invisible"></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200" onClick={() => openImage(7)}></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200" onClick={() => openImage(8)}></div>
                    </div>
                </div>

                <div className="w-5/6 h-fit flex flex-col items-center mt-20">
                    <p className="heading">Proposal</p>
                    <div className="grid grid-cols-4 gap-6 mt-10">
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200 overflow-hidden">
                        </div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                        <div className="invisible"></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                    </div>
                </div>

                <div className="w-5/6 h-fit flex flex-col items-center mt-20 ">
                    <p className="heading">Proposal</p>
                    <div className="grid grid-cols-4 gap-6 mt-10">
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                        <div className="invisible"></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                        <div className="h-32 w-32 hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200"></div>
                    </div>
                </div>
            </div>

            <div className="h-32"></div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={() => setIsOpen(false)}
                >
                    <div className="min-h-screen px-4 text-center">
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
                            <div className="inline-block w-fit p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">

                                <div className="flex flex-col items-center space-y-5">
                                    <div className="relative w-200 aspect-video">
                                        <Image src={memories[imageNumber].image} layout="fill" objectFit="cover" className="absolute" />
                                    </div>

                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-wenyue leading-6 text-gray-900 "
                                    >
                                        {memories[imageNumber].title}
                                    </Dialog.Title>

                                    <p className="text-sm text-gray-500">
                                        {memories[imageNumber].description}
                                    </p>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default Home 