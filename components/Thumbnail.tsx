import Image from "next/image";

type Props = { image: string; onClick: () => void };

const Thumbnail = ({ image, onClick }: Props) => {
  return (
    <div
      className="h-auto w-auto aspect-[1/1] hover:scale-[1.1] transition-transform ease-in-out duration-600  relative"
      onClick={onClick}
    >
      <Image src={image} layout="fill" objectFit="cover" />
    </div>
  );
};

export default Thumbnail;
