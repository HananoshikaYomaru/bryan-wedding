import moment from "moment";
import Image from "next/image";
import cover from "../public/images/cover.webp";
import flower from "../public/images/flower.webp";

const Footer = () => {
  return (
    <div className="h-32 sm:h-64 w-full relative">
      <Image
        src={cover}
        layout="fill"
        objectFit="cover"
        className="absolute pointer-events-none"
      ></Image>

      <div className="absolute   top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 flex flex-col   font-wenyue w-fit items-center text-sky-100 text-xs  sm:text-sm">
        <p>
          Copyright © {moment().year()} YomaruHananoshika. All rights reversed.
        </p>
        <a
          className="text-gray-400 underline"
          href="mailto:mlkyeung@connect.ust.hk"
        >
          mlkyeung@connect.ust.hk
        </a>
      </div>
    </div>
  );
};

export default Footer;
