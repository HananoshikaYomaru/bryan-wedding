import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";
import { ChevronUpIcon } from "@heroicons/react/solid";

export type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  return (
    <div
      className="h-full bg-soapstone min-w-[320px] overflow-hidden flex flex-col items-center"
      data-page={router.pathname}
    >
      <div
        className="bg-sage rounded-full w-16 h-16 fixed right-5 bottom-5 flex items-center justify-center cursor-pointer hover:shadow-lg transition ease-in-out duration-300 z-[15]"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <ChevronUpIcon className="w-8 h-8 text-white"></ChevronUpIcon>
      </div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
