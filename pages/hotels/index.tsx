import CustomHotelHeader from "@/components/headers/CustomHotelHeader";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function index({ }: Props) {
   const router = useRouter();
  const handlehotels  = (hotelInfo: string) => {
    router.push(`/hotels/${hotelInfo}`);
  }
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
        <button onClick={() => handlehotels("jai bala ji")}>click</button>
      </section>
    </>
  );
}
