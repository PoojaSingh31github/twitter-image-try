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

      {/* of tags */}
      <meta property="og:card" content="summary_large_image" />
      <meta property="og:title" content={props.hotelName} />
      <meta property="og:description" content={props.metaDescription} />
      <meta property="og:image" content={props.metaImageUrl} />
      <meta property="og:url" content={props.canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Staybook"/>
    </Head>
  );
}
