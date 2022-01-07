import type { NextPage } from 'next'
import Image from "next/image"
import { useLocale } from '../../lib/locale'
import Link from 'next/link'
import Timer from '../../components/Timer'
import Ring from "../../public/images/ring.svg"
import Wine from "../../public/images/wine.svg"
import Shoe from "../../public/images/shoe.svg"



const Home: NextPage = () => {
  const { getLocale, L } = useLocale()

  const data = {
    banner: "https://res.cloudinary.com/yomaru/image/upload/w_3840,c_scale/v1641533993/pre-wedding/Copy_of_P1322774_e_pl6t6s.webp",
    image1: "https://res.cloudinary.com/yomaru/image/upload/h_1080,c_scale/v1641532713/pre-wedding/Copy_of_P1333043_e_nahexf.webp",
    image2: "https://res.cloudinary.com/yomaru/image/upload/h_1080,c_scale/v1641532710/pre-wedding/Copy_of_P1333422_e_uxmbtm.webp",
    image3: "https://res.cloudinary.com/yomaru/image/upload/h_1080,c_scale/v1641532715/pre-wedding/Copy_of_P1322586_e_fybczl.webp",
  }

  return (
    <>

      {/* the banner  */}
      <div className="w-full z-10">
        <div className="h-144 relative w-full ">
          <div className="absolute h-144 bg-blue-200 w-full"></div>
          {/* <img src="/images/P1322774_e.jpg" className="absolute h-144 w-full object-cover opacity-50" ></img> */}
          <Image src={data.banner} layout="fill" objectFit='cover' objectPosition="50% 35%" className="absolute opacity-50" />
          {/* <div className="backdrop-grayscale h-10 w-10"></div> */}
          <div className="absolute flex items-center justify-center inset-0">
            <div className="flex flex-col items-center space-y-10 mt-32">
              <p className="text-soapstone drop-shadow font-wenyue text-base md:text-2xl">{L().home.wedding_day}</p>
              <p className="font-thankyou text-soapstone text-3xl  md:text-7xl drop-shadow whitespace-nowrap">Bryan & Fanny</p>
              <Link href={`/${getLocale()}/info`}><a className={`bg-soapstone px-5 py-2 text-pickled-bluewood drop-shadow rounded-xl text:text-sm md:text-xl ${getLocale() == "en" ? "font-copperplate" : "font-wenyue"}`}>{L().home.info}</a></Link>
            </div>
          </div>
        </div>
      </div>

      {/* photos  */}
      <div className="w-3/4 2xl:w-1/2 mt-10 flex flex-col items-center max-w-6xl relative">
        {/* background images */}
        <div className="absolute w-32 lg:w-64 top-[25%] sm:top-1/2 -left-[20%]  sm:left-[10%] rotate-[-30deg] opacity-50">
          <Image src={Shoe} layout="responsive" className="" />
        </div>

        <div className="absolute w-32 lg:w-64 top-[68%] sm:top-[20%] right-[20%] opacity-50">
          <Image src={Ring} layout="responsive" className="" />
        </div>
        <div className="absolute w-32 lg:w-64 top-[100%] sm:top-[110%] right-4/5 sm:right-0 opacity-50">
          <Image src={Wine} layout="responsive" className="" />
        </div>
        <p className={`mb-10 heading ${getLocale() == "en" ? "font-thankyou" : "font-wenyue"} `}>{L().home.about_us}</p>
        <div className="relative h-200 lg:h-300 w-full">

          <div className="absolute h-48 xs:h-56 sm:h-96 lg:h-144 w-full flex flex-row">
            <div className="relative h-full  aspect-[3/4]  ">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-xl h-full aspect-[3/4] ">
                <Image src={data.image1} layout='fill' objectFit='cover'></Image>
              </div>
            </div>
            <div className="pl-5 py-5 md:pl-10 md:py-6 lg:pl-20 lg:py-10 ">
              <p className="font-wenyue text-xs sm:text-sm line-clamp-10 lg:line-clamp-15">
                {L().home.des1}
              </p>
            </div>
          </div>

          <div className="absolute  h-48 xs:h-56 sm:h-96 lg:h-144  bottom-0  flex flex-row-reverse items-end" >
            <div className="relative h-full aspect-[3/4]  ">
              <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-xl h-full aspect-[3/4] ">
                <Image src={data.image2} layout='fill' objectFit='cover'></Image>
              </div>
            </div>
            <div className="pr-5 py-5 md:pr-10 md:py-6 lg:pr-20 lg:py-10">
              <p className="font-wenyue text-xs sm:text-sm line-clamp-10 lg:line-clamp-15 ">
                {L().home.des2}
              </p>
            </div>
          </div>

          <div className="absolute inset-0 top-1/2 left-1/2  h-64 w-48 lg:h-96 lg:w-72  transform -translate-x-1/2 -translate-y-1/2 drop-shadow-xl">
            <Image src={data.image3} layout='fill' objectFit='cover'></Image>
          </div>

        </div>
      </div>
      {/* count down */}
      <div className="mt-20 w-full h-fit flex flex-col items-center p-10 space-y-10 z-10">
        <p className={`heading ${getLocale() == "en" ? "font-thankyou" : "font-wenyue"}`}>{L().home.day_until}</p>
        <Timer />
      </div>
    </>
  )
}

export default Home
