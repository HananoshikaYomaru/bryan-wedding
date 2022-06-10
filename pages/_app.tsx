import "../styles/globals.css";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { MainProvider } from "../contexts/main";
import AOS from "aos";
import { useEffect } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });
  return (
    <>
      <Head>
        <title>Bryan and Fanny&apos;s wedding</title>
        <meta
          property="og:title"
          content="Bryan and Fanny's wedding"
          key="title"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <MainProvider>
        <Component {...pageProps} />
      </MainProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
