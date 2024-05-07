import axios from "axios";
import { GetServerSidePropsContext } from "next";

export default function Index({ hotelDetails }: { hotelDetails: any }) {
  return (
    <div>
      hotel data : {JSON.stringify(hotelDetails.hotel_Image_Url, null, 2)}
    </div>
  );
}

async function getHotelDetails(hotelSlug: string) {
  try {
    const res = await axios.get(
      `https://staybook-api-server-mu3dpypziq-el.a.run.app/hotels/fetch/fetchHotelInfo?hotel_Id=${encodeURIComponent(
        hotelSlug
      )}`
    );
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

  return {
    props: {
      hotelDetails,
    },
  };
}
