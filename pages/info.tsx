import { NextPage } from "next";
import Image from "next/image";
import { Fragment, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Map from "../public/images/map.svg";
import Church from "../public/images/church.svg";
import Layout from "../components/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import userConfig from "../i18next.config";

const Home: NextPage = () => {
  const images = [
    "https://res.cloudinary.com/yomaru/image/upload/v1641534831/bryan/church1_lqadfp.webp",
    "https://res.cloudinary.com/yomaru/image/upload/v1641534831/bryan/church2_tzwvzo.webp",
  ];
  const [current, setCurrent] = useState(0);
  const { t, i18n } = useTranslation(["common", "information"]);
  const styles = {
    info: `w-48 h-10 text-normal whitespace-nowrap ${
      i18n.language == "en" ? "font-wenyue" : "font-chawan"
    }`,
  };

  return (
    <Layout>
      {/* banner */}
      <div className="w-full z-10">
        <div className="h-72 sm:h-144 relative w-full ">
          <div className="absolute h-full bg-blue-200 w-full"></div>
          <Image
            src={images[0]}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 100%"
            className="absolute h-144 w-full object-cover opacity-50"
          />
          <div className="absolute flex flex-col items-center justify-center inset-0 space-y-5">
            <div className="flex flex-row items-center drop-shadow-md">
              <a href="#map">
                <p
                  className={`text-pickled-bluewood mx-5 hover:underline text-xs sm:text-base ${
                    i18n.language == "en" ? "font-serif" : "font-chawan"
                  }`}
                >
                  {t("location")}
                </p>
              </a>
              <div className="w-1 h-1 rounded-full bg-pickled-bluewood"></div>
              <a href="#details">
                <p
                  className={`text-pickled-bluewood mx-5 hover:underline text-xs sm:text-base ${
                    i18n.language == "en" ? "font-serif" : "font-chawan"
                  }`}
                >
                  {t("details")}
                </p>
              </a>
              <div className="w-1 h-1 rounded-full bg-pickled-bluewood"></div>
              <a href="#gallery">
                <p
                  className={`text-pickled-bluewood mx-5 hover:underline text-xs sm:text-base ${
                    i18n.language == "en" ? "font-serif" : "font-chawan"
                  }`}
                >
                  {t("gallery")}
                </p>
              </a>
            </div>
            <p className="font-serif font-bold text-2xl md:text-6xl  text-pickled-bluewood">
              {t("title")}
            </p>
          </div>
        </div>
      </div>

      {/* map */}
      <Fragment>
        <div className="w-5/6 sm:max-w-[32rem] flex flex-col items-center relative">
          <div className="absolute z-[0] w-full sm:scale-[200%] sm:top-1/2 sm:left-[75%] pointer-events-none">
            <Image src={Map} layout="responsive" />
          </div>
          <p
            id="map"
            className={`z-10 heading mt-20 ${
              i18n.language == "en" ? "font-thankyou" : "font-wenyue"
            }`}
          >
            {t("location")}
          </p>
          <iframe
            className="z-20 w-full  aspect-1 rounded-3xl shadow-2xl mt-10"
            src="https://maps.google.com/maps?q=%20Auberge%20Discovery%20Bay%20Hotel&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          ></iframe>
        </div>
      </Fragment>

      {/* info */}
      <div
        id="details"
        className="z-10 relative flex flex-col items-center space-y-10  shadow-2xl p-5 xs:p-10 md:p-20 mt-20 w-5/6 sm:max-w-[40rem] bg-white"
      >
        {/* <div className="absolute w-24 h-24 sm:w-48 sm:h-48 top-0 left-0  transform -translate-x-1/4 -translate-y-1/4">
                    <Image src="https://res.cloudinary.com/yomaru/image/upload/e_shadow:90,x_20,y_20,co_rgb:6CA6B3/v1641534831/bryan/flower_bzofas.webp" layout="fill" className=""/>
                    </div> */}

        <p
          className={`heading ${
            i18n.language == "en" ? "font-thankyou" : "font-wenyue"
          }`}
        >
          {t("details")}
        </p>

        <table className="text-pickled-bluewood font-wenyue w-full">
          <tr>
            <td className={styles.info}>{`Date :`}</td>
            <td className="text-normal">Saturday, 30th July, 2022</td>
          </tr>
          <tr>
            <td className={styles.info}>{`${t("location")} : `}</td>
            <td className="text-normal">{t("location_data")}</td>
          </tr>
          <tr>
            <td className={styles.info}>{t("dress-code")} ： </td>
            <td className="text-normal">Semi-formal</td>
          </tr>
          <tr>
            <td className={styles.info}>{t("video-link")} ： </td>
            <td className="text-normal">
              <a
                href="https://hku.zoom.us/j/95403904669"
                className="text-gray-500 underline"
              >
                https://hku.zoom.us/j/95403904669
              </a>
            </td>
          </tr>
          <tr>
            <td className={styles.info}>ZOOM ID ： </td>
            <td className="text-normal">954 0390 4669</td>
          </tr>
        </table>

        <p className=" whitespace-nowrap text-pickled-bluewood mt-5 heading-sm font-thankyou space-x-2">
          Wedding Day Plan
        </p>
        <div className="flex flex-col sm:flex-row justify-between w-full font-wenyue">
          <div className="rounded  shadow border p-5">
            <p className="text-normal ">1:30 - 2:30 PM</p>
            <p className="heading-sm mb-5">Wedding Ceremony</p>
            <p className="text-small">
              A formal Christian wedding ceremony in the White Chapel
            </p>
          </div>
          <div className="w-10 h-10"></div>
          <div className="rounded  shadow border p-5">
            <p className="text-normal">2:30 - 4:30 PM</p>
            <p className="heading-sm mb-5">Cocktail Party</p>
            <p className="text-sm">
              A fun gathering with drinks, light refreshments and games
            </p>
          </div>
        </div>

        <p
          className={`heading ${
            i18n.language == "en" ? "font-thankyou" : "font-wenyue"
          }`}
        >
          {t("shuttle_bus")}
        </p>
        <table className="text-pickled-bluewood font-wenyue w-full">
          {/* <tr >
                        <td className={styles.info}>{L().info.time} : </td>
                        <td className="text-normal whitespace-nowrap">12 : 30 , 12 : 45</td>
                    </tr> */}
          <tr>
            <td className={styles.info}>{t("pick_up_location")} : </td>
            <td className="text-normal ">{t("pick_up_location_data")}</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p className="text-base sm:text-lg whitespace-nowrap font-bold mt-5 underline ">
                Public transportation
              </p>
            </td>
          </tr>
          <tr>
            <td className={styles.info}>Bus information : </td>
            <td className="text-normal whitespace-nowrap">
              Discovery Bay Bus DP03P
            </td>
          </tr>
          <tr>
            <td className={styles.info}>{t("time")} : </td>
            <td className="text-normal ">12:35 PM, 1:05 PM</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p className="text-base sm:text-lg  whitespace-nowrap font-bold mt-5 underline ">
                Complimentary shuttle bus
              </p>
            </td>
          </tr>
          <tr>
            <td className={styles.info}>{t("time")} : </td>
            <td className="text-normal whitespace-nowrap">12:45 PM</td>
          </tr>
        </table>
      </div>

      {/* some photos of venue */}

      <div
        id="gallery"
        className="flex flex-col items-center mb-20 w-full relative"
      >
        <div className="absolute w-32 sm:w-64 opacity-50 left-[10%] -top-[10%] sm:-top-[20%] pointer-events-none">
          <Image src={Church} layout="responsive" className="" />
        </div>
        <p
          className={`heading mt-20 mb-10 ${
            i18n.language == "en" ? "font-thankyou" : "font-wenyue"
          }`}
        >
          {t("gallery")}
        </p>
        <div className=" flex flex-row w-5/6 sm:w-2/3 justify-center space-x-5 items-center">
          <button
            onClick={() => {
              setCurrent(current - 1 == -1 ? images.length - 1 : current - 1);
            }}
            className="h-fit"
          >
            <ChevronLeftIcon className="w-6 h-6 rounded-full hover:bg-wheat transition ease-in-out duration-300"></ChevronLeftIcon>
          </button>

          <div className="aspect-[2/1] w-full relative">
            <Image src={images[current]} layout="fill" objectFit="cover" />
          </div>

          <button
            onClick={() => {
              setCurrent(current + 1 == images.length ? 0 : current + 1);
            }}
            className="h-fit "
          >
            <ChevronRightIcon className="w-6 h-6 rounded-full hover:bg-wheat transition ease-in-out duration-300"></ChevronRightIcon>
          </button>
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
        ["common", "index"],
        userConfig
      )),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
