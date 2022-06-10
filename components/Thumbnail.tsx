import Image from "next/image";

type Props = { image: string; onClick: () => void };

const Thumbnail = ({ image, onClick }: Props) => {
  const delay = Math.ceil(Math.random() * 5) * 100;
  return (
    <div
      className="h-auto w-auto hover:scale-[1.1] aspect-[1/1] transition ease-in-out duration-[600ms]  relative cursor-pointer hover:shadow-lg "
      onClick={onClick}
    >
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        data-aos="fade-up"
        data-aos-delay={`${delay}`}
      />
    </div>
  );
};

export default Thumbnail;
