import { NextPage } from "next";
import Image from "next/image";
import { Fragment, useState } from "react";
import Map from "../public/images/map.svg";
import Layout from "../components/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import userConfig from "../i18next.config";
import Venue from "../components/Venue";

const Home: NextPage = () => {
  const { t, i18n } = useTranslation(["information"]);

  return (
    <Layout>
      {/* banner */}
      <div className="w-full z-10">
        <div className="h-72 sm:h-144 relative w-full ">
          <div className="absolute h-full bg-blue-200 w-full"></div>
          <Image
            src={
              "https://res.cloudinary.com/yomaru/image/upload/v1641534831/bryan/church1_lqadfp.webp"
            }
            layout="fill"
            objectFit="cover"
            objectPosition="50% 100%"
            className="absolute h-144 w-full object-cover opacity-50"
          />
          <div className="absolute flex flex-col items-center justify-center inset-0 space-y-5">
            <div className="flex flex-row items-center drop-shadow-md">
              <a href="#map">
                <p
                  className={`text-pickled-bluewood mx-5 hover:underline text-xs sm:text-base`}
                >
                  {t("location")}
                </p>
              </a>
              <div className="w-1 h-1 rounded-full bg-pickled-bluewood"></div>
              <a href="#details">
                <p
                  className={`text-pickled-bluewood mx-5 hover:underline text-xs sm:text-base `}
                >
                  {t("details")}
                </p>
              </a>
              <div className="w-1 h-1 rounded-full bg-pickled-bluewood"></div>
              <a href="#gallery">
                <p
                  className={`text-pickled-bluewood mx-5 hover:underline text-xs sm:text-base `}
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

        <p className={`heading`}>{t("details")}</p>

        <table className="text-pickled-bluewood font-wenyue w-full">
          <tr>
            <td>{t("date")} : </td>
            <td>Saturday, 30th July, 2022</td>
          </tr>
          <tr>
            <td>{`${t("location")} : `}</td>
            <td>{t("location_data")}</td>
          </tr>
          <tr>
            <td>{t("dress_code")} ： </td>
            <td>{t("dress_code_data")}</td>
          </tr>
          <tr>
            <td>{t("live_broadcast")} ： </td>
            <td>
              <a
                href="https://hku.zoom.us/j/95403904669"
                className="text-gray-500 underline"
              >
                https://hku.zoom.us/j/95403904669
              </a>
            </td>
          </tr>
          <tr>
            <td>ZOOM ID ： </td>
            <td>954 0390 4669</td>
          </tr>
        </table>

        <p className=" whitespace-nowrap text-pickled-bluewood mt-5 heading-sm font-thankyou space-x-2">
          {t("wedding_day_plan")}
        </p>
        <div className="flex flex-col sm:flex-row justify-between w-full font-wenyue">
          <div className="rounded  shadow border p-5">
            <p className="text-normal ">1:30 - 2:30 PM</p>
            <p className="heading-sm mb-5">{t("wedding_ceremony")}</p>
            <p className="text-small">{t("wedding_ceremony_des")}</p>
          </div>
          <div className="w-10 h-10"></div>
          <div className="rounded  shadow border p-5">
            <p className="text-normal">3:00 - 5:00 PM</p>
            <p className="heading-sm mb-5">{t("cocktail_party")}</p>
            <p className="text-sm">{t("cocktail_party_des")}</p>
          </div>
        </div>

        <p className={`heading`}>{t("transportation")}</p>
        <table className="text-pickled-bluewood font-wenyue w-full">
          <tr>
            <td>{t("pick_up_location")} : </td>
            <td>{t("pick_up_location_data")}</td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className="text-base sm:text-lg whitespace-nowrap font-bold mt-5 underline "
            >
              {t("public_transportation")}
            </td>
          </tr>
          <tr>
            <td>{t("bus_info")} </td>
            <td>{t("bus_info_data")}</td>
          </tr>
          <tr>
            <td>{t("time")} : </td>
            <td>12:35 PM, 1:05 PM</td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className="text-base sm:text-lg  whitespace-nowrap font-bold mt-5 underline "
            >
              {t("shuttle_bus")}
            </td>
          </tr>
          <tr>
            <td>{t("time")} : </td>
            <td>12:45 PM</td>
          </tr>
        </table>
      </div>

      <Venue></Venue>
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["common", "information"],
        userConfig
      )),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
