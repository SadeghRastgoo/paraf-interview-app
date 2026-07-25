import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  icon: string;
  title: string;
  isFinalLevel?: boolean;
};

export function LevelBadge({ icon, title, isFinalLevel }: Props) {
  return (
    <div className={"flex items-center gap-2 py-2 text-sm"}>
      <span>{title}</span>

      <Image src={icon} alt="" width={30} height={30} />

      {!isFinalLevel && (
        <ArrowLeftIcon className="stroke-content-primary mx-4 hidden lg:block" />
      )}
    </div>
  );
}
