import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'
import { LocaleProvider } from '../lib/locale'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Bryan and Fanny&apos;s wedding</title>
      <meta property="og:title" content="Bryan and Fanny's wedding" key="title" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <LocaleProvider>
        <Component {...pageProps} />
    </LocaleProvider>
  </>
}

export default MyApp
