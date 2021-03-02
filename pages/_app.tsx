// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import { UseWalletProvider } from "use-wallet";
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <UseWalletProvider chainId={56}
    connectors={{
      walletconnect: { rpcUrl: "https://bsc-dataseed.binance.org/" }
    }}>
      <Component {...pageProps} />
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
