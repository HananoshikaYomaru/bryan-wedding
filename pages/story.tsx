import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout";
import userConfig from "../i18next.config";
import { useTranslation } from "next-i18next";
import Banner from "../components/Banner";

const Home: NextPage = () => {
  const { t } = useTranslation("story");
  return (
    <Layout>
      {/* banner */}
      <Banner image="https://res.cloudinary.com/yomaru/image/upload/v1641532719/propose/DSCF1931_pgrtir.webp">
        <p id="title" data-aos="fade">
          {t("our_story")}
        </p>
      </Banner>

      <div
        id="content"
        className="flex flex-col space-y-10 items-center w-3/4 lg:w-1/2 my-20"
      >
        {/* day we first met  */}
        <div className="w-full h-fit ">
          <div className="flex flex-row items-center space-x-5 lg:space-x-10">
            <div
              className="p-1 lg:p-3 border border-gray-100 bg-white shadow-lg  min-w-[50%]"
              data-aos="fade-up"
            >
              <img src="https://res.cloudinary.com/yomaru/image/upload/v1654056403/story/IMG-20161219-WA0018_B_F_A_dmtvnw.webp"></img>
            </div>
            <div
              id="memory"
              className="min-w-[50%] max-w-[50%]"
              data-aos="fade-up"
            >
              <p id="date">2013-08-15</p>
              <p id="title">{t("title_1")}</p>
              <p id="description">{t("des_1")}</p>
            </div>
          </div>
        </div>

        {/* first confession */}
        <div className="w-full h-fit ">
          <div className="flex flex-row items-center space-x-5 lg:space-x-10">
            <div
              className="p-1 lg:p-3 border border-gray-100 bg-white shadow-lg  min-w-[50%] "
              data-aos="fade-up"
            >
              <img src="https://res.cloudinary.com/yomaru/image/upload/h_1000,c_scale/v1654056402/story/IMG_1270_B_F_A_bmohzr.webp"></img>
            </div>
            <div
              id="memory"
              className="min-w-[50%] max-w-[50%]"
              data-aos="fade-up"
            >
              <p id="date">2016-11-26</p>
              <p id="title">{t("title_2")}</p>
              <p id="description">{t("des_2")}</p>
            </div>
          </div>
        </div>

        {/* 1st anniversary */}
        <div className="w-full h-fit ">
          <div className="flex flex-row items-center  space-x-5 lg:space-x-10">
            <div
              className="p-1 lg:p-3 border border-gray-100 bg-white shadow-lg min-w-[50%]"
              data-aos="fade-up"
            >
              <img
                src="https://res.cloudinary.com/yomaru/image/upload/v1654056403/story/IMG_0807_pliznm.webp"
                data-aos="fade-up"
              ></img>
            </div>
            <div
              id="memory"
              className=" min-w-[50%] max-w-[50%]"
              data-aos="fade-up"
            >
              <p id="title">{t("title_3")}</p>
              <p id="description">{t("des_3")}</p>
            </div>
          </div>
        </div>

        {/* 2nd anniversary */}

        <div className="w-full h-fit ">
          <div className="flex flex-row items-center  space-x-5 lg:space-x-10">
            <div
              className="p-1 lg:p-3 border border-gray-100 bg-white shadow-lg min-w-[50%] "
              data-aos="fade-up"
            >
              <img src="https://res.cloudinary.com/yomaru/image/upload/v1654056403/story/IMG_1500_dsm8gg.webp"></img>
            </div>
            <div
              id="memory"
              className="min-w-[50%] max-w-[50%]"
              data-aos="fade-up"
            >
              <p id="title">{t("title_4")}</p>
              <p id="description">{t("des_4")}</p>
            </div>
          </div>
        </div>

        {/* 3rd anniversary */}

        <div className="w-full h-fit ">
          <div className="flex flex-row items-center  space-x-5 lg:space-x-10">
            <div
              className="p-1 lg:p-3 border border-gray-100 bg-white shadow-lg  min-w-[50%] "
              data-aos="fade-up"
            >
              <img src="https://res.cloudinary.com/yomaru/image/upload/v1654056404/story/IMG_7688_ifo5ti.webp"></img>
            </div>
            <div
              id="memory"
              className=" min-w-[50%] max-w-[50%]"
              data-aos="fade-up"
            >
              <p id="title">{t("title_5")}</p>
              <p id="description">{t("des_5")}</p>
            </div>
          </div>
        </div>

        {/* 4th anniversary */}
        <div className="w-full h-fit ">
          <div className="flex flex-row items-center  space-x-5 lg:space-x-10">
            <div
              className="p-1 lg:p-3 border border-gray-100 bg-white shadow-lg  min-w-[50%] "
              data-aos="fade-up"
            >
              <img src="https://res.cloudinary.com/yomaru/image/upload/v1654056403/story/IMG_1567_rswifo.webp"></img>
            </div>
            <div
              id="memory"
              className="min-w-[50%] max-w-[50%]"
              data-aos="fade-up"
            >
              <p id="title">{t("title_6")}</p>
              <p id="description">{t("des_6")}</p>
            </div>
          </div>
        </div>

        {/* the first picture */}
        <div className=" w-full h-fit  ">
          <div className="grid grid-cols-1 gap-5">
            <div id="memory" className="overflow-visible " data-aos="fade-up">
              <p
                id="title"
                className="text-center scale-[1.5] sm:scale-[2] mb-3"
              >
                {t("title_8")}
              </p>
              <p id="description" className="text-center ">
                {t("des_8")}
              </p>
              <p id="scripture" className="text-center">
                {t("scripture")}
              </p>
            </div>
            <div
              className="p-1 lg:p-3 border border-gray-100 bg-white shadow-lg min-w-[50vw]"
              data-aos="fade-up"
            >
              <img src="https://res.cloudinary.com/yomaru/image/upload/h_1000,c_scale/v1654056403/story/Copy_of_DSCF2296_cby3sx.webp"></img>
            </div>
            <div id="memory" data-aos="fade-up">
              <p id="date">2021-09-26</p>
              <p id="title">{t("title_7")}</p>
              <p id="description">{t("des_7")}</p>
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
