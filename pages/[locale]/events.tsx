import { NextPage } from "next"
import banner from "../../public/images/info_banner.jpg"
import Image from "next/image"
import moment from "moment"
import { useLocale } from "../../lib/locale"
import image1 from "../../public/images/P1322586_e.jpg"
import { useMediaQuery } from "../../lib/mediaQuery"
import { ChevronDownIcon } from "@heroicons/react/solid"

const Home: NextPage = () => {
    const { getLocale, L } = useLocale();
    const isTabletOrMobile = useMediaQuery('(max-width: 747px)')
    return (
        <>
            {/* banner */}
            <div className="w-full">
                <div className="h-72 sm:h-144 relative w-full ">
                    <div className="absolute h-full bg-blue-200 w-full"></div>
                    {/* <img src="/images/P1322774_e.jpg" className="absolute h-144 w-full object-cover opacity-50" ></img> */}
                    <Image src={banner} layout="fill" objectFit='cover' objectPosition="50% 100%" className="absolute h-144 w-full object-cover opacity-50" />
                    <p className=" absolute whitespace-nowrap top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 space-y-5 font-serif text-2xl sm:text-6xl  text-pickled-bluewood">{L().events.title}</p>
                </div>
            </div>

            {/* timeline */}
            {
                !isTabletOrMobile && <div className="h-fit w-full flex justify-center items-center my-20" >
                    <div className="w-5/6 sm:w-3/4 max-w-[50rem] h-fit  shadow-xl bg-wheat relative">
                        <div className="container bg-white mx-auto w-full h-full p-10">
                            <div className="relative wrap  h-full">
                                <div className="border-2-2 absolute  border-gray-700 h-full border left-1/2" ></div>

                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                                    </div>
                                    <div className="order-1 bg-soapstone rounded-lg shadow-xl w-5/12 px-6 py-4">
                                        <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                                        <Image src={image1}></Image>
                                        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>


                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                                    </div>
                                    <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                        <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                                        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>


                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                                    </div>
                                    <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                        <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                                        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>


                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                                    </div>
                                    <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                        <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                                        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
            {
                isTabletOrMobile &&
                <div className="flex flex-col w-full items-center my-20 space-y-5">
                    {/* card */}
                    <div className="w-5/6 aspect-[5/3] rounded-lg shadow-lg bg-white flex flex-row overflow-hidden">
                        <div className="h-full aspect-[3/4]  bg-red-200 relative">
                            <Image src={image1} layout="fill" objectFit="cover" className=""></Image>
                        </div>
                        <div className="p-3 xs:p-8 sm:p-10 flex flex-col justify-between">
                            <p className="heading font-wenyue underline ">this is a sample title</p>
                            <p className="font-wenyue text-normal line-clamp-6 xs:line-clamp-10 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at sapien ac leo pellentesque volutpat in ut erat. Aliquam faucibus ultrices auctor. Curabitur convallis tempus sem, at tincidunt ex vestibulum nec. Sed nisi arcu, interdum scelerisque felis ut, tempor pellentesque erat. Etiam viverra vestibulum leo, vitae aliquet urna cursus nec. Duis lobortis diam ut lacinia bibendum. Nulla fermentum odio dui, vel tristique sapien ornare non. Morbi molestie lobortis varius. Curabitur id molestie tortor, a convallis odio. Aenean mattis nunc nunc, scelerisque tincidunt sapien condimentum eu.</p>
                            <p className="font-wenyue text-normal ">Date: 2022-2-11</p>
                        </div>
                    </div>

                    <ChevronDownIcon className="w-6 h-10 md:w-10 md:h-10 text-sage"></ChevronDownIcon>

                    <div className="w-5/6 aspect-[5/3] rounded-lg shadow-lg bg-white flex flex-row overflow-hidden">
                        <div className="h-full aspect-[3/4]  bg-red-200 relative">
                            <Image src={image1} layout="fill" objectFit="cover" className=""></Image>
                        </div>
                        <div className="p-3 xs:p-8 sm:p-10 flex flex-col justify-between">
                            <p className="heading font-wenyue underline ">this is a sample title</p>
                            <p className="font-wenyue text-normal line-clamp-6 xs:line-clamp-10 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at sapien ac leo pellentesque volutpat in ut erat. Aliquam faucibus ultrices auctor. Curabitur convallis tempus sem, at tincidunt ex vestibulum nec. Sed nisi arcu, interdum scelerisque felis ut, tempor pellentesque erat. Etiam viverra vestibulum leo, vitae aliquet urna cursus nec. Duis lobortis diam ut lacinia bibendum. Nulla fermentum odio dui, vel tristique sapien ornare non. Morbi molestie lobortis varius. Curabitur id molestie tortor, a convallis odio. Aenean mattis nunc nunc, scelerisque tincidunt sapien condimentum eu.</p>
                            <p className="font-wenyue text-normal ">Date: 2022-2-11</p>
                        </div>
                    </div>

                    <ChevronDownIcon className="w-6 h-10 md:w-10 md:h-10 text-sage"></ChevronDownIcon>

                    <div className="w-5/6 aspect-[5/3] rounded-lg shadow-lg bg-white flex flex-row overflow-hidden">
                        <div className="h-full aspect-[3/4]  bg-red-200 relative">
                            <Image src={image1} layout="fill" objectFit="cover" className=""></Image>
                        </div>
                        <div className="p-3 xs:p-8 sm:p-10 flex flex-col justify-between">
                            <p className="heading font-wenyue underline ">this is a sample title</p>
                            <p className="font-wenyue text-normal line-clamp-6 xs:line-clamp-10 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at sapien ac leo pellentesque volutpat in ut erat. Aliquam faucibus ultrices auctor. Curabitur convallis tempus sem, at tincidunt ex vestibulum nec. Sed nisi arcu, interdum scelerisque felis ut, tempor pellentesque erat. Etiam viverra vestibulum leo, vitae aliquet urna cursus nec. Duis lobortis diam ut lacinia bibendum. Nulla fermentum odio dui, vel tristique sapien ornare non. Morbi molestie lobortis varius. Curabitur id molestie tortor, a convallis odio. Aenean mattis nunc nunc, scelerisque tincidunt sapien condimentum eu.</p>
                            <p className="font-wenyue text-normal ">Date: 2022-2-11</p>
                        </div>
                    </div>
                </div>
            }


        </>
    )
}
export default Home 