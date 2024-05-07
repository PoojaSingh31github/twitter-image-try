import { getHotelDetails } from "@/pages/api/hotelInfo/hotelImg";
import { GetServerSidePropsContext } from "next";

export default function Index({ hotelDetails }: { hotelDetails: any }) {
  return <div>hotel data : {JSON.stringify(hotelDetails)}</div>;
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
