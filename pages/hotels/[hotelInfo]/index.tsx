import CustomHotelHeader from "@/components/headers/CustomHotelHeader";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Index({ hotelDetails }: { hotelDetails: any }) {
  const router = useRouter();

  return (
    <>
      <CustomHotelHeader
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
      />
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
