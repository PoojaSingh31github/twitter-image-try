import axios from "axios";

export async function getHotelDetails(hotelSlug: string) {
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
