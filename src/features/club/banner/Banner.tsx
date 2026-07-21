import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <Link href={"/"} className="outline">
      <Image
        src={"/banner.jpg"}
        alt=""
        width={1920}
        height={1000}
        className="w-full h-full object-cover"
      />
    </Link>
  );
}

export { Banner };
