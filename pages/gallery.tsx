import { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import Whole from "../public/images/whole.svg";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import userConfig from "../i18next.config";
import { useTranslation } from "next-i18next";
import Modal from "../components/Modal";
import { Fragment, useState } from "react";
import Thumbnail from "../components/Thumbnail";
import Banner from "../components/Banner";
import { sectionTitles, sectionImages } from "../lib/gallery";

const Home: NextPage = () => {
  const { t } = useTranslation("gallery");
  const [isOpen, setIsOpen] = useState(false);
  const [target, setTarget] = useState<{
    image: string;
    title?: string;
    description?: string;
  }>();

  return (
    <Layout>
      {/* banner */}
      <Banner image="https://res.cloudinary.com/yomaru/image/upload/h_1080,c_scale/v1641543288/propose/DSCF1933_xizgvk.webp">
        <p id="title">{t("gallery")}</p>
      </Banner>

      <div id="content" className="flex flex-col my-20 w-3/4 lg:w-1/2 relative">
        {/* background  */}
        <div className="absolute w-full right-0 top-0 sm:w-[60%] sm:left-1/4 sm:top-0 opacity-50 pointer-events-none">
          <Image src={Whole} layout="responsive" className="" />
        </div>

        {/* sections  */}
        <div className="flex flex-col items-center">
          {sectionTitles.map((title, index) => {
            return (
              <Fragment key={title}>
                <p className="heading">{t(title)}</p>
                <div className="w-full grid grid-cols-3 gap-5 sm:gap-8 mb-20 mt-5">
                  {sectionImages[index].map((image, index) => (
                    <Thumbnail
                      key={image.thumbnail}
                      image={image.thumbnail}
                      onClick={() => {
                        setTarget({
                          image: image.image,
                          description: [
                            "proposal",
                            "prewedding",
                            "date",
                            "friends",
                          ].includes(title)
                            ? t(`${title}_des_${index + 1}`)
                            : undefined,
                        });
                        setIsOpen(true);
                      }}
                    ></Thumbnail>
                  ))}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        target={target}
        onClose={() => {
          setTarget(undefined);
        }}
      ></Modal>
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["common", "gallery"],
        userConfig
      )),
      // Will be passed to the page component as props
    },
  };
}
export default Home;
