import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <body className="text-sm-body-text md:text-sm-body-text-bold xl:text-xl-body-text-bold">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MPVHFDZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
        <Script src="https://checkout.razorpay.com/v1/checkout.ts" />
      </body>
    </Html>
  );
}
