import CustomHotelHeader from "@/components/headers/CustomHotelHeader";
import Link from "next/link";
import one from "../../public/img/1.jpeg";
import two from "../../public/img/2.jpeg";

export default function index() {
  return (
    <>
      <CustomHotelHeader
        hotelName={"jai bala ji "}
        metaDescription={"hotel page"}
        metaImageUrl={
          "https://images.staybook.in/Staybook-Hotel-Jai-Balaji-New-Delhi-Railway-Station/StaybookJaibalaji_reception_1.jpg"
        }
        canonicalUrl={
          "https://twitter-image-try-poojasingh31githubs-projects.vercel.app/hotels"
        }
      />
      <section>
        <h1>hotel pageeee</h1>
        <Link href="/hotels/staybook-hotel-jai-balaji-new-delhi-railway-station-new-delhi">
          click
        </Link>
      </section>
    </>
  );
}
