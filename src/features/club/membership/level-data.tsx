import { Trophy, Gem, Medal, Flag } from "lucide-react";
import Image from "next/image";

export const levels = [
  {
    id: 1,
    title: "سطح برنزی",
    icon: (
      <Image
        src={"/cups/bronze-cup.png"}
        alt=""
        width={50}
        height={50}
        className="size-8"
      />
    ),
    score: 0,
  },
  {
    id: 2,
    title: "سطح نقره‌ای",
    icon: (
      <Image
        src={"/cups/silver-cup-2.png"}
        alt=""
        width={50}
        height={50}
        className="size-8"
      />
    ),
    score: 400,
  },
  {
    id: 3,
    title: "سطح طلایی",
    icon: (
      <Image
        src={"/cups/golden-cup.png"}
        alt=""
        width={50}
        height={50}
        className="size-8"
      />
    ),
    score: 800,
  },
  {
    id: 4,
    title: "سطح الماس",
    icon: (
      <Image
        src={"/diamond.png"}
        alt=""
        width={50}
        height={50}
        className="size-8"
      />
    ),
    score: 1200,
  },
];
