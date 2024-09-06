import React from "react";
import Head from "next/head";
import MainPage from "./MainPage";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Silly Monster: 1010 Piece Unique NFT Collection </title>
        <meta
          name="description"
          content="Silly Monster is a unique NFT collection of 3d rendered, 1010 adorable monster characters. Learn more about our roadmap & mint your rare NFT now."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/f4c86d63da1abea5ce2f41af/script.js"
        ></script>
      </Head>
      <script id="gtm" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5XH5P6M2');
      `}
      </script>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5XH5P6M2"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
      <main>
        <MainPage />
      </main>
    </React.Fragment>
  );
}
