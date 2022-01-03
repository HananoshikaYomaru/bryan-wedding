import Image from "next/image"
import cover from "../public/images/cover.jpg"
import flower from "../public/images/flower.png";


const Footer = () => { 
    return  <div className="h-64 w-full relative">
        <Image src={cover} layout="fill" objectFit="cover" className="absolute"></Image>
        <div className="absolute  mt-10 inset-0 left-1/2 w-fit">
            <div className="flex flex-row transform -translate-x-1/2">
                <Image src={flower} width={50} height={50}/>
                <Image src={flower} width={50} height={50}/>
                <Image src={flower} width={50} height={50}/>
            </div>
        </div>
    </div>
}

export default Footer 