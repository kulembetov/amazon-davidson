import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
      <Image
        src="/amazon-logo-2.webp"
        alt="logo"
        width={100}
        height={30}
        priority={true}
      />
    </Link>
  );
};

export default Logo;
