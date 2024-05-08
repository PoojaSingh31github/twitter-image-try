import CustomHotelHeader from "@/components/headers/CustomHotelHeader";
import Link from "next/link";
import React from "react";

type Props = {};

export default function index({}: Props) {
  return (
    <>
      <CustomHotelHeader
        hotelName={"jai bala ji "}
        metaDescription={"descrriptions"}
        metaImageUrl={
          "https://images.staybook.in/Staybook-Hotel-Jai-Balaji-New-Delhi-Railway-Station/StaybookJaibalaji_reception_1.jpg"
        }
        canonicalUrl={"https://twitter-image-try.vercel.app"}
      />
      <div>
        <Link href="/hotels">
          <button>hotel page</button>
        </Link>
      </div>
    </>
  );
}
