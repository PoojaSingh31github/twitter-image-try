import CustomHotelHeader from "@/components/headers/CustomHotelHeader";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Index({ hotelDetails }: { hotelDetails: any }) {
  const router = useRouter();
  return (
    <>
      {/* <CustomHotelHeader
        hotelName={
          hotelDetails.hotel_Name
            ? hotelDetails.hotel_Name
            : "Staybook hotel name"
        }
        metaDescription={
          hotelDetails.hotel_Landmark
            ? hotelDetails.hotel_Landmark
            : "lorem ipsum"
        }
        metaImageUrl={
          hotelDetails.hotel_Image_Url
            ? hotelDetails.hotel_Image_Url
            : "https://images.staybook.in/Staybook-Hotel-Jai-Balaji-New-Delhi-Railway-Station/StaybookJaibalaji_reception_1.jpg"
        }
        canonicalUrl={`https://twitter-image-try.vercel.app//hotels/${router.query.hotelInfo}`}
      /> */}
      <Head>
        <meta
          property="og:title"
          content="Philippine Standard Geographic Code API"
        />
        <meta property="og:site_name" content="Wareneutron - PSGC API" />
        <meta
          property="og:description"
          content="API used for listing all the region, province, city, municipality, barangay, and its data. Philippine Standard Geographic Codes (PSGC) data came from Philippine Statistics Authority."
        />
        <meta property="og:url" content="https://psgc-api.wareneutron.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/assets/wareneutron_psgc_api_opengraph.jpg"
        />
        <meta property="og:image:alt" content="PSGC Banner" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image:alt" content="PSGC API Banner" />
      </Head>
      <section>
        <div>
          <Image
            width={126}
            height={126}
            src={hotelDetails.hotel_Image_Url}
            alt="img"
          />
          <p>{hotelDetails.hotel_Name}</p>
          <p>{hotelDetails.hotel_Description_List}</p>
        </div>
      </section>
    </>
  );
}

async function getHotelDetails(hotelSlug: string) {
  try {
    const res = await axios.get(
      `https://staybook-api-server-mu3dpypziq-uc.a.run.app/hotels/fetch/fetchHotelInfo?hotel_Id=${encodeURIComponent(
        hotelSlug
      )}`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching hotel details:", error);
    throw error;
  }
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const hotelId = context.query.hotelInfo;
  const hotelSlug = typeof hotelId === "string" ? hotelId : "";
  const hotelDetails = await getHotelDetails(hotelSlug);

  return {
    props: {
      hotelDetails,
    },
  };
}
