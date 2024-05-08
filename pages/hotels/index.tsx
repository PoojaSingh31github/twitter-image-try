import CustomHotelHeader from "@/components/headers/CustomHotelHeader";
import Head from "next/head";
import Link from "next/link";
export default function index() {
  return (
    <>
      {/* <CustomHotelHeader
        hotelName={"jai bala ji "}
        metaDescription={"hotel page"}
        metaImageUrl={
          "https://images.staybook.in/Staybook-Hotel-Jai-Balaji-New-Delhi-Railway-Station/StaybookJaibalaji_reception_1.jpg"
        }
        canonicalUrl={
          "https://twitter-image-try-poojasingh31githubs-projects.vercel.app/hotels"
        }
      /> */}
      <Head><meta property="og:title" content="Philippine Standard Geographic Code API" />
<meta property="og:site_name" content="Wareneutron - PSGC API" />
<meta property="og:description" content="API used for listing all the region, province, city, municipality, barangay, and its data. Philippine Standard Geographic Codes (PSGC) data came from Philippine Statistics Authority." />
<meta property="og:url" content="https://psgc-api.wareneutron.com/" />
<meta property="og:type" content="website" />
<meta property="og:image" content="/assets/wareneutron_psgc_api_opengraph.jpg" />
<meta property="og:image:alt" content="PSGC Banner" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="640" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:image:alt" content="PSGC API Banner" /></Head>
      <section>
        <h1>hotel pageeee</h1>
        <Link href="/hotels/staybook-hotel-jai-balaji-new-delhi-railway-station-new-delhi">
          click
        </Link>
      </section>
    </>
  );
}
