/* eslint-disable react/jsx-key */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="./assets/favicon.ico" />
        <link
          rel="mask-icon"
          href="assets/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
