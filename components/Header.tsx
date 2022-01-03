import { useLocale } from "../lib/locale";
import cover from "../public/images/cover.jpg"
import Image from "next/image"
import Link from "next/link";
// import { useMediaQuery } from "react-responsive";
import { MenuAlt2Icon } from "@heroicons/react/solid";
import { Popover } from "@headlessui/react";
import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

const Header = () => {
  const { getLocale, changeLocale } = useLocale()
  const isTabletOrMobile = useMediaQuery('(max-width: 1224px)')



  return <div className="relative w-full h-20">
    <Image src={cover} layout="fill" objectFit="cover" className=""></Image>
    {
      !isTabletOrMobile &&
      <div>
        <div className="absolute flex flex-row space-x-16 center">
          <Link href={`/${getLocale()}`}><a className="bartext" >Home</a></Link>
          <Link href={`/${getLocale()}/info`}><a className="bartext">Wedding Day Information</a></Link>
          <Link href={`/${getLocale()}/events`}><a className="bartext">Upcoming Events</a></Link>
          <Link href={`/${getLocale()}/story`}><a className="bartext" >Our Story</a></Link>
          <Link href={`/${getLocale()}/gallery`}><a className="bartext" >Our Gallery</a></Link>
        </div>
      </div>

    }
    {
      isTabletOrMobile && <div>
        <Popover className="relative mt-6  ml-5">
          <Popover.Button><MenuAlt2Icon className="absolute w-8 h-8 text-grain-brown top-0 left-0"></MenuAlt2Icon></Popover.Button>
          <Popover.Panel className="absolute z-10 bg-stone-300 p-10 rounded-xl shadow mt-5">
            {
              ({ close }) => {
                return (
                  <div className="flex flex-col space-y-5">
                    <Link href={`/${getLocale()}`}><a className="font-copperplate text-pickled-bluewood hover:bg-slate-200 whitespace-nowrap" onClick={()=>close()}>Home</a></Link>
                    <Link href={`/${getLocale()}/info`}><a className="font-copperplate text-pickled-bluewood hover:bg-slate-200  whitespace-nowrap" onClick={()=>close()}>Wedding Day Information</a></Link>
                    <Link href={`/${getLocale()}/events`}><a className="font-copperplate text-pickled-bluewood hover:bg-slate-200 whitespace-nowrap" onClick={()=>close()}>Upcoming Events</a></Link>
                    <Link href={`/${getLocale()}/story`}><a className="font-copperplate text-pickled-bluewood hover:bg-slate-200 whitespace-nowrap"  onClick={()=>close()}>Our Story</a></Link>
                    <Link href={`/${getLocale()}/gallery`}><a className="font-copperplate text-pickled-bluewood hover:bg-slate-200 whitespace-nowrap"  onClick={()=>close()}>Our Gallery</a></Link>
                  </div>
                )
              }
            }
          </Popover.Panel>
        </Popover>
      </div>
    }
    <button className="font-wenyue text-grain-brown absolute top-1/2 right-0  transform -translate-y-1/2 mr-5 sm:mr-12" onClick={() => changeLocale(getLocale() == "en" ? "zh-hk" : "en")}>{getLocale() == "en" ? " 🇭🇰 中文" : " 🇬🇧 English"}</button>
  </div>
}

export default Header; 