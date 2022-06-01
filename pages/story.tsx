import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout";
import userConfig from "../i18next.config";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import ImageFrame from "../components/ImageFrame";

const Home: NextPage = () => {
  const { t } = useTranslation("story");
  return (
    <Layout>
      {/* banner */}
      <div className="w-full">
        <div className="h-72 sm:h-144 relative w-full ">
          <div className="absolute h-full bg-blue-200 w-full"></div>

          <Image
            src="https://res.cloudinary.com/yomaru/image/upload/v1641532719/propose/DSCF1931_pgrtir.webp"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 60%"
            className="absolute h-144 w-full object-cover opacity-50"
          />
          <p className=" absolute whitespace-nowrap top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 space-y-5 font-serif font-bold text-2xl sm:text-6xl  text-pickled-bluewood">
            {t("our_story")}
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-10 items-center w-3/4 lg:w-1/2 my-20">
        {/* the first picture */}
        <div className=" w-full h-fit  ">
          <div className="flex flex-col lg:flex-row items-center space-y-5 lg:space-x-10">
            <div>
              <p>{t("title_8")}</p>
              <p>{t("des_8")}</p>
              <p>{t("scripture")}</p>
            </div>
            <div className="p-1 lg:p-3 border border-gray-100 bg-white shadow-lg">
              <img
                src="https://res.cloudinary.com/yomaru/image/upload/h_1000,c_scale/v1654056403/story/Copy_of_DSCF2296_cby3sx.webp"
                className=""
              ></img>
            </div>
            <div>
              <p>2021-09-26</p>
              <p>{t("title_7")}</p>
              <p>{t("des_7")}</p>
            </div>
          </div>
        </div>

        {/* first confession */}
        <div className="w-full h-fit ">
          <div className="flex flex-row items-center space-x-5 lg:space-x-10">
            <div className="p-1 lg:p-3 border border-gray-100 bg-white shadow-lg  max-w-[50%] ">
              <img
                src="https://res.cloudinary.com/yomaru/image/upload/h_1000,c_scale/v1654056402/story/IMG_1270_B_F_A_bmohzr.webp"
                className=""
              ></img>
            </div>
            <div>
              <p>2016-11-26</p>
              <p>{t("title_1")}</p>
              <p>{t("des_1")}</p>
            </div>
          </div>
        </div>

        {/* day we first met */}
        <div className="w-full h-fit ">
          <div className="flex flex-row items-center space-x-5 lg:space-x-10">
            <div className="p-1 lg:p-3 border border-gray-100 bg-white shadow-lg  max-w-[50%] ">
              <img
                src="https://res.cloudinary.com/yomaru/image/upload/v1654056403/story/IMG-20161219-WA0018_B_F_A_dmtvnw.webp"
                className=" "
              ></img>
            </div>
            <div>
              <p>2013-08-15</p>
              <p>{t("title_2")}</p>
              <p>{t("des_2")}</p>
            </div>
          </div>
        </div>

        {/* 1st anniversary */}
        <div className="w-full h-fit ">
          <div className="flex flex-row items-center  space-x-5 lg:space-x-10">
            <div className="p-1 lg:p-3 border border-gray-100 bg-white shadow-lg  max-w-[50%] ">
              <img
                src="https://res.cloudinary.com/yomaru/image/upload/v1654056403/story/IMG_0807_pliznm.webp"
                className=""
              ></img>
            </div>
            <div>
              <p>{t("title_3")}</p>
              <p>{t("des_3")}</p>
            </div>
          </div>
        </div>

        {/* 2nd anniversary */}

        <div className="w-full h-fit ">
          <div className="flex flex-row items-center  space-x-5 lg:space-x-10">
            <div className="p-1 lg:p-3 border border-gray-100 bg-white shadow-lg  max-w-[50%] ">
              <img
                src="https://res.cloudinary.com/yomaru/image/upload/v1654056403/story/IMG_1500_dsm8gg.webp"
                className=""
              ></img>
            </div>
            <div>
              <p>{t("title_4")}</p>
              <p>{t("des_4")}</p>
            </div>
          </div>
        </div>

        {/* 3rd anniversary */}

        <div className="w-full h-fit ">
          <div className="flex flex-row items-center  space-x-5 lg:space-x-10">
            <div className="p-1 lg:p-3 border border-gray-100 bg-white shadow-lg  max-w-[50%] ">
              <img
                src="https://res.cloudinary.com/yomaru/image/upload/v1654056404/story/IMG_7688_ifo5ti.webp"
                className=""
              ></img>
            </div>
            <div>
              <p>{t("title_5")}</p>
              <p>{t("des_5")}</p>
            </div>
          </div>
        </div>

        {/* 4th anniversary */}
        <div className="w-full h-fit ">
          <div className="flex flex-row items-center  space-x-5 lg:space-x-10">
            <div className="p-1 lg:p-3 border border-gray-100 bg-white shadow-lg  max-w-[50%] ">
              <img
                src="https://res.cloudinary.com/yomaru/image/upload/v1654056403/story/IMG_1567_rswifo.webp"
                className=""
              ></img>
            </div>
            <div>
              <p>{t("title_6")}</p>
              <p>{t("des_6")}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["common", "story"],
        userConfig
      )),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
