import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
