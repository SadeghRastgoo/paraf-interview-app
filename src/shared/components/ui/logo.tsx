import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="min-w-max">
      <div className="flex gap-2 items-center">
        <Image src="/logo.svg" width={100} height={40} alt="" />
        <div className="flex-col text-sm flex text-content-brand-bold">
          <h1>بازار کالا و خدمات؛</h1>
          <span className="font-semibold">ساده، امن، بی‌مرز</span>
        </div>
      </div>
    </Link>
  );
}

export { Logo };
