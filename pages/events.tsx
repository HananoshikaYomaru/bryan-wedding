import { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import userConfig from "../i18next.config";
import { useTranslation } from "next-i18next";

import Banner from "../components/Banner";

const Home: NextPage = () => {
  const { t } = useTranslation("events");
  const images = [
    "https://res.cloudinary.com/yomaru/image/upload/w_1000,c_scale/v1641532719/propose/DSCF1931_pgrtir.webp",
    "https://res.cloudinary.com/yomaru/image/upload/w_1000,c_scale/v1642849783/bryan/betrothal/F17641A9-51B2-424B-929D-DBE385D6A552_ydnnrg.webp",
    "https://res.cloudinary.com/yomaru/image/upload/w_1000,c_scale/v1653913235/marriage-registration-in-thailand_1_wzx6gc.jpg",
    "https://res.cloudinary.com/yomaru/image/upload/w_1000,c_scale/v1653913236/from-the-heart-events-bridal-shower_1_qpflfx.gif",
    "https://res.cloudinary.com/yomaru/image/upload/w_1000,c_scale/v1653913358/Chapel-Hill-Rehearsal-Dinner-Venue-Carolina-Club-KPO-1024x682_e2thut.jpg",
    "https://res.cloudinary.com/yomaru/image/upload/w_1000,c_scale/v1654129797/WM_IMG_7046_x250_2x_nyfvew.webp",
    "https://res.cloudinary.com/yomaru/image/upload/w_1000,c_scale/v1653913235/bachelor-party-in-nashville-guide-header-1140x630_1_ppcpy5.jpg",
    "https://res.cloudinary.com/yomaru/image/upload/w_1000,c_scale/v1641534831/bryan/church1_lqadfp.webp",
  ];
  const descriptions = [
    "proposal",
    "betrothal",
    "registration",
    "wedding_shower",
    "rehearsal_dinner",
    "bridal_party",
    "bachelor_party",
    "wedding",
  ];
  const dates = [
    "2021-09-26",
    "2022-01-01",
    "2022-02-26",
    "2022-07-03",
    "2022-07-25",
    "2022-07-28",
    "2022-07-29",
    "2022-07-30",
  ];

  return (
    <Layout>
      {/* banner */}
      <Banner image="https://res.cloudinary.com/yomaru/image/upload/v1641532719/propose/DSCF1931_pgrtir.webp">
        <p id="title">{t("events")}</p>
      </Banner>

      {/* timeline */}

      <div
        id="content"
        className="flex flex-col space-y-10 w-3/4 md:w-1/2  my-20"
      >
        {images.map((image, index) => {
          return (
            <div key={image} id="event" className="flex flex-col items-center">
              <img src={image} className="" />
              <p id="title">{t(descriptions[index])}</p>
              <p id="time">Date: {dates[index]}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["common", "events"],
        userConfig
      )),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
