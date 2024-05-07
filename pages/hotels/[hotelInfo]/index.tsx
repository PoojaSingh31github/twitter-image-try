import CustomHotelHeader from "@/components/headers/CustomHotelHeader";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";

export default function Index({ hotelDetails }: { hotelDetails: any }) {
  return (
    <>
      <CustomHotelHeader
        hotelName={"jai bala ji "}
        metaDescription={"descrriptions"}
        metaImageUrl={
          "https://staybook.in/_next/image?url=https%3A%2F%2Fimages.staybook.in%2FStaybook-Hotel-Jai-Balaji-New-Delhi-Railway-Station%2FStaybookJaibalaji_reception_1.jpg&w=384&q=75"
        }
        canonicalUrl={"staybook.in"}
      />
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
    </>
  );
}

async function getHotelDetails(hotelSlug: string) {
  try {
    const res = await axios.get(
      `https://staybook-api-server-mu3dpypziq-el.a.run.app/hotels/fetch/fetchHotelInfo?hotel_Id=${encodeURIComponent(
        hotelSlug
      )}`
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("Error fetching hotel details:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const hotelId = context.query.hotelInfo;
  const hotelSlug = typeof hotelId === "string" ? hotelId : "";
  const hotelDetails = await getHotelDetails(hotelSlug);
  //   console.log(
  //     hotelId,
  //     "hotel_Id",
  //     hotelSlug,
  //     "hotelSlug",
  //     hotelDetails,
  //     "hotelDetails"
  //   );

  return {
    props: {
      hotelDetails,
    },
  };
}
