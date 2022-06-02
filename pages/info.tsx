import { NextPage } from "next";
import Image from "next/image";
import { Fragment, useState } from "react";
import Map from "../public/images/map.svg";
import Layout from "../components/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import userConfig from "../i18next.config";
import Venue from "../components/Venue";
import Banner from "../components/Banner";

const Home: NextPage = () => {
  const { t, i18n } = useTranslation(["information"]);

  return (
    <Layout>
      {/* banner */}
      <Banner image="https://res.cloudinary.com/yomaru/image/upload/v1641534831/bryan/church1_lqadfp.webp">
        <div className="absolute flex flex-col items-center justify-center inset-0 space-y-5">
          <div className="flex flex-row items-center drop-shadow-md">
            <a href="#map">{t("location")}</a>
            <div className="w-1 h-1 rounded-full bg-pickled-bluewood"></div>
            <a href="#details">{t("details")}</a>
            <div className="w-1 h-1 rounded-full bg-pickled-bluewood"></div>
            <a href="#gallery">{t("gallery")}</a>
          </div>
          <p id="title">{t("title")}</p>
        </div>
      </Banner>

      <div
        className="flex flex-col space-y-10 my-10 items-center w-3/4 lg:w-1/2"
        id="content"
      >
        {/* map */}
        <div
          id="map"
          className="w-full sm:max-w-[32rem] flex flex-col items-center relative"
        >
          <div className="absolute  w-full sm:scale-[200%] sm:top-1/2 sm:left-[75%] pointer-events-none">
            <Image src={Map} layout="responsive" />
          </div>
          <p id="map" className="heading mt-20">
            {t("location")}
          </p>
          <iframe
            className="z-[5] w-full  aspect-1 rounded-3xl shadow-2xl mt-10"
            src="https://maps.google.com/maps?q=%20Auberge%20Discovery%20Bay%20Hotel&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          ></iframe>
        </div>
        {/* info */}
        <div
          id="details"
          className="z-10 relative flex flex-col items-center space-y-10  shadow-2xl p-5 xs:p-10 md:p-20 mt-20 w-[90vw] sm:max-w-[40rem] bg-white"
        >
          <p className="heading">{t("details")}</p>

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
              <td>
                {t("dress_code_data")}
                <span className="inline-block ml-2">
                  <div className="rounded h-4 bg-gradient-to-r from-teal-500 to-blue-500 w-16"></div>
                </span>
              </td>
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

          <p id="sub-heading">{t("wedding_day_plan")}</p>
          <div className="flex flex-col sm:flex-row justify-between w-full font-wenyue">
            <div id="event" className="rounded  shadow border p-5">
              <p id="time">1:30 - 2:30 PM</p>
              <p id="title">{t("wedding_ceremony")}</p>
              <p id="description">{t("wedding_ceremony_des")}</p>
            </div>
            <div className="w-10 h-10"></div>
            <div id="event" className="rounded  shadow border p-5">
              <p id="time">3:00 - 5:00 PM</p>
              <p id="title">{t("cocktail_party")}</p>
              <p id="description">{t("cocktail_party_des")}</p>
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
              <td>{t("bus_info")} : </td>
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
      </div>
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
