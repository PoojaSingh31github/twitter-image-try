import CustomHotelHeader from "@/components/headers/CustomHotelHeader";
import Head from "next/head";
import Link from "next/link";
import React from "react";

type Props = {};

export default function index({}: Props) {
  return (
    <>
      {/* <CustomHotelHeader
        hotelName={"jai bala ji "}
        metaDescription={"descrriptions for hoome page"}
        metaImageUrl={
          "https://images.staybook.in/Staybook-Hotel-Jai-Balaji-New-Delhi-Railway-Station/StaybookJaibalaji_reception_1.jpg"
        }
        canonicalUrl={
          "https://twitter-image-try-poojasingh31githubs-projects.vercel.app"
        }
      /> */}
      <Head>
        {/* Open Graph */}
        <meta property="og:title" content="Title" />
        <meta property="og:site_name" content="Staybook" />
        <meta property="og:url" content="https://staybook.in" />
        <meta property="og:description" content="Lorem ipsum" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://staybook.in/_next/image?url=https%3A%2F%2Fimages.staybook.in%2FStaybook-Hotel-Jai-Balaji-New-Delhi-Railway-Station%2FStaybookJaibalaji_reception_1.jpg&w=384&q=75"
        />{" "}
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@staybook" />
        <meta name="twitter:description" content="Lorem ipsum" />
        <meta name="twitter:app:name:iphone" content="staybook" />
        <meta name="twitter:app:id:iphone" content="" />
        <meta name="twitter:app:name:ipad" content="staybook" />
        <meta name="twitter:app:id:ipad" content="" />
        <meta name="twitter:app:name:googleplay" content="staybook" />
        <meta name="twitter:app:id:googleplay" content="" />
        <meta name="twitter:app:country" content="" />
      </Head>
      <div>
        <Link href="/hotels">
          <button>hotel page</button>
        </Link>
      </div>
    </>
  );
}
