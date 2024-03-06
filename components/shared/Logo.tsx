import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ dark }: { dark?: boolean }) => {
  return (
    <Link href="/" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
      <Image
        src={dark ? "/amazon-logo-1.png" : "/amazon-logo-2.webp"}
        alt="logo"
        width={100}
        height={30}
        priority={true}
      />
    </Link>
  );
};

export default Logo;
