import { NextPage } from "next";
import Layout from "../components/Layout";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import userConfig from "../i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
    "https://res.cloudinary.com/yomaru/image/upload/v1654059410/friends/Bridemaid_Zoe_nkzbmp.webp",
  ];

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
            {t("our_friends")}
          </p>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col space-y-10 my-20 w-3/4 lg:w-1/2 items-center">
        {/* sharon */}
        <div className="w-full flex flex-row ">
          <img
            src="https://res.cloudinary.com/yomaru/image/upload/v1654059411/friends/Maid_of_Honours_Sharon_jfumo6.webp"
            alt=""
            className="w-1/2"
          />
          <div>
            <p>{t("sharon_liu")}</p>
            <p>{t("maid_of_honours")}</p>
            <p>{t("sharon_des")}</p>
          </div>
        </div>

        {/* alex */}
        <div className="w-full flex flex-row">
          <div>
            <p>{t("alex_fung")}</p>
            <p>{t("best_man")}</p>
            <p>{t("alex_des")}</p>
          </div>
          <img
            src="https://res.cloudinary.com/yomaru/image/upload/v1654059409/friends/Best_Man_Alex_hphckm.webp"
            alt=""
            className="w-1/2"
          />
        </div>

        <div className="grid lg:grid-cols-3 grid-col-2 gap-5 w-full">
          {images.map((image, index) => {
            return (
              <div key={image}>
                <div className="h-[400px] relative">
                  <Image src={image} alt="" layout="fill" objectFit="cover" />
                </div>
                <p>{t(`name_${index + 1}`)}</p>
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
