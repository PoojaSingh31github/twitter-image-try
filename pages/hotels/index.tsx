import CustomHotelHeader from "@/components/headers/CustomHotelHeader";
import Link from "next/link";
import one from "../../public/img/1.jpeg";
import two from "../../public/img/2.jpeg";

export default function index() {
  return (
    <>
      <CustomHotelHeader
        hotelName={"jai bala ji "}
        metaDescription={"loremmmmmmmmmm"}
        metaImageUrl={"../../public/img/1.jpeg"}
        canonicalUrl={"staybook.in"}
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
