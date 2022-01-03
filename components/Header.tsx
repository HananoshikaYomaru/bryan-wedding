import { useLocale } from "../lib/locale";
import cover from "../public/images/cover.jpg"
import Image from "next/image"
import Link from "next/link";

const Header = () => {  
  const {getLocale , changeLocale}  = useLocale()
  
  return <div className="relative w-full h-20">
    <Image src={cover} layout="fill" objectFit="cover" className=""></Image>
    <div className="absolute flex flex-row space-x-16 center">
      <Link href={`/${getLocale()}`}><a className="bartext" >Home</a></Link>
      <Link href={`/${getLocale()}/info`}><a className="bartext">Wedding Day Information</a></Link>
      <Link href={`/${getLocale()}/events`}><a className="bartext">Upcoming Events</a></Link>
      <Link href={`/${getLocale()}/story`}><a className="bartext" >Our Story</a></Link>
      <Link href={`/${getLocale()}/gallery`}><a className="bartext" >Our Gallery</a></Link>
    </div>
    <button className="font-wenyue text-grain-brown absolute top-1/2 right-0  transform -translate-y-1/2 mr-12" onClick={()=>changeLocale(getLocale() == "en" ? "zh-hk" : "en")}>{getLocale() == "en" ? " 🇭🇰 中文" : " 🇬🇧 English"}</button>
  </div>
}

export default Header ; 