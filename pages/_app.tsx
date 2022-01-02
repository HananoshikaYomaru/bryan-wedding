import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Bryan and Fanny's wedding</title>
      <meta property="og:title" content="Bryan and Fanny's wedding" key="title" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
