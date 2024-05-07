import Head from "next/head";

type Props = {
  hotelName: string;
  metaDescription: string;
  metaImageUrl: string;
  canonicalUrl: string;
};

export default function CustomHotelHeader(props: Props) {
  return (
    <Head>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.hotelName} />
      <meta name="twitter:site" content="@staybook" />
      <meta name="twitter:description" content={props.metaDescription} />
      <meta name="twitter:url" content={props.canonicalUrl} />
      <meta name="twitter:image" content={props.metaImageUrl} />
    </Head>
  );
}
