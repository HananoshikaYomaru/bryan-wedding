import { NextPage } from "next";
import Layout from "../components/Layout";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import userConfig from "../i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Banner from "../components/Banner";

const Home: NextPage = () => {
  const { t } = useTranslation("friends");

  const images = [
    "https://res.cloudinary.com/yomaru/image/upload/v1654059411/friends/Groomsman_Richard_fqhsot.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1654059410/friends/Groomsman_Eric_mqatyt.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1654059410/friends/Groomsman_Eleos_c8f7ks.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1654059410/friends/Groomsman_Ken_su1nzr.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1654059410/friends/Groomsman_Anson_dj9jyl.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1654059410/friends/Groomsman_Jim_zilwsl.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1654059409/friends/Bridemaid_Lorraine_rn2x0n.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1654059409/friends/Bridemaid_Esther_easgej.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1654059409/friends/Bridemaid_Wing_d4imne.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1654059409/friends/Bridemaid_Jenny_mf1z1a.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1654059410/friends/Bridemaid_Mandy_irdng1.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1654760232/friends/Zoe_mpkaaz.jpg",
    "https://res.cloudinary.com/yomaru/image/upload/v1654760231/friends/Yumi_hyzy1p.jpg",
  ];

  return (
    <Layout>
      {/* banner */}
      <Banner image="https://res.cloudinary.com/yomaru/image/upload/v1641532719/propose/DSCF1931_pgrtir.webp">
        <p id="title" data-aos="fade">
          {t("our_friends")}
        </p>
      </Banner>

      {/*  */}
      <div
        id="content"
        className="flex flex-col space-y-10 my-20 w-3/4 lg:w-3/5 items-center"
      >
        {/* sharon */}
        <div className="w-full flex flex-row space-x-3 sm:space-x-10 items-center">
          <img
            src="https://res.cloudinary.com/yomaru/image/upload/v1654059411/friends/Maid_of_Honours_Sharon_jfumo6.webp"
            alt=""
            className="w-1/2"
            data-aos="fade-left"
          />
          <div data-aos="fade-left">
            <p id="name">{t("sharon_liu")}</p>
            <p className="font-bold mb-3">{t("maid_of_honours")}</p>
            <p>{t("sharon_des")}</p>
          </div>
        </div>

        {/* alex */}
        <div
          className="w-full flex flex-row space-x-3 sm:space-x-10 items-center"
          id="people"
        >
          <div data-aos="fade-right">
            <p id="name">{t("alex_fung")}</p>
            <p className="font-bold mb-3">{t("best_man")}</p>
            <p>{t("alex_des")}</p>
          </div>
          <img
            src="https://res.cloudinary.com/yomaru/image/upload/v1654059409/friends/Best_Man_Alex_hphckm.webp"
            alt=""
            className="w-1/2"
            data-aos="fade-right"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 w-1/2 sm:w-full">
          {images.map((image, index) => {
            return (
              <div
                key={image}
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={`${100 * (index % 3)}`}
              >
                <div className=" w-full  relative aspect-[3/4]">
                  <Image src={image} alt="" layout="fill" objectFit="cover" />
                </div>
                <p className="font-bold">{t(`name_${index + 1}`)}</p>
                <p>{index + 1 > 6 ? t("bridesmaid") : t("groomsman")}</p>
              </div>
            );
          })}
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
        ["common", "friends"],
        userConfig
      )),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
