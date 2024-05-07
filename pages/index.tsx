import Link from "next/link";
import React from "react";

type Props = {};

export default function index({}: Props) {
    return (<div>
        <Link href="/hotels">
        <button>hotel page</button> 
        </Link>
      
  </div>);
}
