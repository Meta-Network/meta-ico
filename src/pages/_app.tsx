// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { UseWalletProvider } from "use-wallet";
import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer';
import { ChakraProvider } from "@chakra-ui/react"


function MyApp({ Component, pageProps }: AppProps) {
  return <UseWalletProvider chainId={56}
    connectors={{
      walletconnect: { rpcUrl: "https://bsc-dataseed.binance.org/" }
    }}>
    <ChakraProvider>
      <Head>
        <title>Meta Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <Component {...pageProps} />
        <Footer />
      </div>
    </ChakraProvider>
  </UseWalletProvider>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
