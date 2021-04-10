// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import { Navbar } from "../components/Navbar";
import { UseWalletProvider } from "use-wallet";
import '../styles/globals.scss'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer/index';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { WalletErrorPopup } from '../components/WalletError';
import { Banner } from '../components/Banner';
import { MetaHead } from '../components/MetaHead';
import { currentChainId } from '../constant/index'

const theme = extendTheme({
  colors: {
    mttk: {
      100: "#542DE0",
      200: "#542DE0",
      300: "#542DE0",
      400: "#542DE0",
      500: "#542DE0",
      600: "#542DE0",
      700: "#542DE0",
      800: "#542DE0",
      900: "#542DE0",
    }
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return <UseWalletProvider chainId={currentChainId}
    connectors={{
      walletconnect: { rpcUrl: "https://bsc-dataseed.binance.org/" }
    }}>
    <ChakraProvider theme={theme}>
      <MetaHead />
      <Navbar />
      <Banner />
      <div className={styles.container}>
        <Component {...pageProps} />
        <Footer />
      </div>
      <WalletErrorPopup />
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
