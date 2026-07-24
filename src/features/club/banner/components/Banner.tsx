import Image from "next/image";

function Banner() {
  return (
    <div>
      <Image
        src={"/banner.jpg"}
        alt=""
        width={1920}
        height={1000}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}

export { Banner };
