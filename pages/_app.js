import "../styles/globals.css";
import { Providers } from "../redux/provider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="../public/favicon.ico" />
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}

export default MyApp;
