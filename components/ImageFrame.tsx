type Props = {
  src: string;
  className?: string;
};

const ImageFrame = ({ src, className }: Props) => {
  return (
    <div
      className={`p-3 border border-gray-100 bg-white shadow-lg ${className}`}
    >
      <img src={src} alt="" />
    </div>
  );
};

export default ImageFrame;
