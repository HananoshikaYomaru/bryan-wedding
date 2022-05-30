import { useTranslation } from "next-i18next";
import Footer from "./Footer";
import Header from "./Header";

export type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { i18n } = useTranslation();
  return (
    <div className="h-full bg-soapstone min-w-[320px] overflow-hidden">
      <div className="flex flex-col items-center">
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
