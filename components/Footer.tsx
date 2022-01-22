import Image from "next/image"
import cover from "../public/images/cover.webp"
import flower from "../public/images/flower.webp"


const Footer = () => {
    return <div className="h-64 w-full relative">
        <Image src={cover} layout="fill" objectFit="cover" className="absolute pointer-events-none"></Image>
        <div className="absolute  mt-10 inset-0 left-1/2 w-fit flex flex-col items-center   transform -translate-x-1/2">
            {/* <div className="flex flex-row">
                <Image src={flower} width={50} height={50} />
                <Image src={flower} width={50} height={50} />
                <Image src={flower} width={50} height={50} />
            </div> */}
        <div className="flex flex-col   font-wenyue w-fit items-center text-sky-100 text-xs mt-10 sm:text-sm">
            <p>Copyright © 2022 YomaruHananoshika. All rights reversed.</p>
            <a className="text-gray-400 underline" href="mailto:mlkyeung@connect.ust.hk">mlkyeung@connect.ust.hk</a>
        </div>
        </div>
    </div>
}

export default Footer 