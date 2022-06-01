import { useLocale } from "../lib/locale";
import Image from "next/image";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/solid";

export type Memory = {
  thumbnail: string;
  image: string;
  title?: string;
  description?: string;
};

const Memory = ({ title, memories }: { title: string; memories: Memory[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageNumber, setImageNumber] = useState(0);
  const openImage = (image: number) => {
    setImageNumber(image);
    setIsOpen(true);
  };
  const Box = ({ i }: { i: number }) => {
    return (
      <div
        className="h-auto w-auto aspect-[1/1] hover:scale-[1.1] transition-transform ease-in-out duration-600 bg-red-200 relative"
        onClick={() => openImage(i)}
      >
        <Image src={memories[i].thumbnail} layout="fill" objectFit="cover" />
      </div>
    );
  };
  const { getLocale } = useLocale();
  return (
    <div id={title} className="w-5/6 h-fit flex flex-col items-center mt-20">
      <p
        className={`heading ${
          getLocale() == "en" ? "font-thankyou " : "font-wenyue"
        }`}
      >
        {title}
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-6 mt-10 w-full lg:w-[75%] ">
        {memories.map((_, index) => {
          // if (![7, 10, 11].includes(index)) {
          return <Box key={index} i={index} />;
          // } else {
          //     return <div className="invisible"></div>
          // }
        })}
      </div>
    </div>
  );
};

export default Memory;
