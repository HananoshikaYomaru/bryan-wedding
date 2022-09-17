import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Timer from "../components/Timer";
import Ring from "../public/images/ring.svg";
import Wine from "../public/images/wine.svg";
import Shoe from "../public/images/shoe.svg";
import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import userConfig from "../i18next.config.js";
import { useTranslation } from "next-i18next";
import useTimer from "../hooks/useTimer";
import { useMain } from "../contexts/main";

const Text = () => {
  const { t } = useTranslation("index");
  const { reach } = useTimer();
  const text = reach ? t("married") : t("getting_married");
  return (
    <p className="text-soapstone drop-shadow font-wenyue text-base md:text-2xl">
      {text}
    </p>
  );
};

const CountDownSection = () => {
  const { t } = useTranslation("index");
  const { reach } = useTimer();
  const { routes } = useMain();
  return (
    <div className="mt-20 w-full h-fit flex flex-col items-center  space-y-10 z-10 mb-10">
      <p className="heading" data-aos="fade-up">
        {reach ? t("married") : t("days_until")}
      </p>
      {reach ? (
        <div className="flex flex-col items-center space-y-3">
          <p className="font-wenyue">{t("married_text_1")}</p>
          <div className="flex flex-row space-x-8 flex-wrap  justify-center">
            {routes
              .filter((r) => r.path != "/")
              .map((r) => (
                <Link href={r.path} key={r.path}>
                  <a id="route">{r.text}</a>
                </Link>
              ))}
          </div>
        </div>
      ) : (
        <Timer />
      )}
    </div>
  );
};

const data = {
  banner:
    "https://res.cloudinary.com/yomaru/image/upload/h_2160,c_scale/v1641622736/pre-wedding/Copy_of_P1322666_e_d8zq08.webp",
  topLeft:
    "https://res.cloudinary.com/yomaru/image/upload/h_1080,c_scale/v1641532715/pre-wedding/Copy_of_P1322586_e_fybczl.webp",
  bottomRight:
    "https://res.cloudinary.com/yomaru/image/upload/h_1080,c_scale/v1641532709/pre-wedding/Copy_of_P1333156_e_gxpb0t.webp",
  // image 3 is the middle
  center:
    "https://res.cloudinary.com/yomaru/image/upload/h_1080,c_scale/v1641532713/pre-wedding/Copy_of_P1333043_e_nahexf.webp",
};

const Home: NextPage = () => {
  const { t } = useTranslation("index");

  return (
    <Layout>
      {/* the banner  */}
      <div className="w-full" id="banner">
        {/* aspect-[width/height] */}
        <div className="aspect-[4629/4000] lg:aspect-[4629/2603] relative w-full">
          <div className="absolute aspect-[4629/4000] lg:aspect-[4629/2603] bg-blue-200 w-full"></div>
          <Image
            src={data.banner}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 35%"
            className="absolute opacity-50"
          />
          {/* <div className="backdrop-grayscale h-10 w-10"></div> */}
          <div
            className="absolute flex items-center justify-center inset-0"
            data-aos="fade"
          >
            <div className="flex flex-col items-center justify-center space-y-3 md:space-y-10 w-full h-full ">
              <Text></Text>
              <p className="font-thankyou text-soapstone text-3xl  md:text-7xl drop-shadow whitespace-nowrap">
                Bryan & Fanny
              </p>
              <iframe
                className="w-3/4 md:w-1/2 aspect-[16/9]"
                src="https://www.youtube.com/embed/f9DoUJTM3IY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Link href="/info">
                <a>{t("info")}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* content  */}
      <div
        id="content"
        className="w-3/4 2xl:w-1/2 mt-10 flex flex-col items-center max-w-6xl relative"
      >
        {/* background images */}
        <div className="absolute w-32 lg:w-64 top-[25%] sm:top-1/2 -left-[20%]  sm:left-[10%] rotate-[-30deg] opacity-50">
          <Image src={Shoe} layout="responsive" className="" />
        </div>
        <div className="absolute w-32 lg:w-64 top-[68%] sm:top-[20%] right-[20%] opacity-50">
          <Image src={Ring} layout="responsive" className="" />
        </div>
        <div className="absolute w-32 lg:w-64 top-[100%] sm:top-[110%] right-4/5 sm:right-0 opacity-50">
          <Image src={Wine} layout="responsive" className="" />
        </div>

        <p className="mb-10 heading" data-aos="fade-up" data-aos-delay="50">
          {t("about_us")}
        </p>

        <div className="relative h-200 lg:h-300 w-full">
          <div className="absolute h-48 xs:h-56 sm:h-96 lg:h-144 w-full flex flex-row">
            <div className="relative h-full  aspect-[3/4]  ">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-xl h-full aspect-[3/4] ">
                <Image
                  src={data.topLeft}
                  layout="fill"
                  objectFit="cover"
                  data-aos="fade-left"
                ></Image>
              </div>
            </div>

            {/* description 1  */}
            <div id="description" className="pl-5 md:pl-10 lg:pl-20 lg:py-10 ">
              <p data-aos="fade-left" data-aos-delay="200">
                {t("des1")}
              </p>
            </div>
          </div>

          <div className="absolute  h-48 xs:h-56 sm:h-96 lg:h-144  bottom-0  flex flex-row-reverse items-end">
            <div className="relative h-full aspect-[3/4]  ">
              <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-xl h-full aspect-[3/4] ">
                <Image
                  src={data.bottomRight}
                  layout="fill"
                  objectFit="cover"
                  data-aos="fade-right"
                ></Image>
              </div>
            </div>

            {/* description 2 */}
            <div className="pr-5  md:pr-10 lg:pr-20 lg:py-10">
              <p data-aos="fade-right" data-aos-delay="200">
                {t("des2")}
              </p>
            </div>
          </div>

          <div className="absolute inset-0 top-1/2 left-1/2  h-64 w-48 lg:h-96 lg:w-72  transform -translate-x-1/2 -translate-y-1/2 drop-shadow-xl">
            <Image
              src={data.center}
              layout="fill"
              objectFit="cover"
              data-aos="fade-up"
              data-aos-delay="200"
            ></Image>
          </div>
        </div>
        {/* count down */}
        <CountDownSection></CountDownSection>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["common", "index", "timer"],
        userConfig
      )),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
