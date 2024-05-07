import CustomHotelHeader from "@/components/headers/CustomHotelHeader";
import Link from "next/link";

export default function index() {
  return (
    <>
      <CustomHotelHeader
        hotelName={"jai bala ji "}
        metaDescription={"loremmmmmmmmmm"}
        metaImageUrl={
          "https://staybook.in/_next/image?url=https%3A%2F%2Fimages.staybook.in%2FStaybook-Hotel-Jai-Balaji-New-Delhi-Railway-Station%2FStaybookJaibalaji_reception_1.jpg&w=384&q=75"
        }
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
