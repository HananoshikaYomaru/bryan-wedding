import Image from "next/image";

type Props = {
  image: string;
  children: JSX.Element;
};

/**
 * @remark The `children` will be center in this div
 */
const Banner = ({ image, children }: Props) => {
  return (
    <div className="w-full h-72 sm:h-144 relative " id="banner">
      {/* the color layer */}
      <div className="absolute h-full bg-blue-200 w-full"></div>

      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        objectPosition="50% 60%"
        className="absolute h-144 w-full object-cover opacity-50"
      />
      {children}
    </div>
  );
};

export default Banner;
