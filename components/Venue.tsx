import Image from "next/image";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Church from "../public/images/church.svg";
import { useTranslation } from "next-i18next";

const Venue = () => {
  const images = [
    "https://res.cloudinary.com/yomaru/image/upload/v1641534831/bryan/church1_lqadfp.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641534831/bryan/church2_tzwvzo.webp",
  ];
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation("information");
  return (
    <div id="gallery" className="flex flex-col items-center w-full relative">
      <div className="absolute w-32 sm:w-64 opacity-50 left-[10%] -top-[10%] sm:-top-[20%] pointer-events-none">
        <Image src={Church} layout="responsive" />
      </div>
      <p className="heading mb-10">{t("gallery")}</p>
      <div className=" flex flex-row w-5/6 sm:w-2/3 justify-center space-x-5 items-center ">
        <button
          onClick={() => {
            setCurrent(current - 1 == -1 ? images.length - 1 : current - 1);
          }}
          className="h-fit"
        >
          <ChevronLeftIcon className="w-6 h-6 rounded-full hover:bg-wheat transition ease-in-out duration-300"></ChevronLeftIcon>
        </button>

        <div className="aspect-[2/1] w-full relative">
          <Image src={images[current]} layout="fill" objectFit="cover" />
        </div>

        <button
          onClick={() => {
            setCurrent(current + 1 == images.length ? 0 : current + 1);
          }}
          className="h-fit "
        >
          <ChevronRightIcon className="w-6 h-6 rounded-full hover:bg-wheat transition ease-in-out duration-300"></ChevronRightIcon>
        </button>
      </div>
    </div>
  );
};

export default Venue;
