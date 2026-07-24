import { Button } from "@/shared/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import { CoinsIcon, InfoIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type CoinsCardProps = {
  coins?: number | null;
};

function CoinsCard({ coins }: CoinsCardProps) {
  const coinCount = Number(coins ?? 0);
  const formattedCoins = coinCount.toLocaleString("fa-IR");
  const equivalentToman = (coinCount * 100).toLocaleString("fa-IR");

  return (
    <div className="grid bg-notice/10 grid-cols-[auto_1fr_50px] gap-2 shadow-lg rounded-3xl p-2 py-3">
      <div className="flex items-end">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost">
              <InfoIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              لورم ایپسوم ساز فارسی تنها ابزاری است که به طور همزمان از فارسی،
              عربی، انگلیسی و ترکی پشتیبانی می کند، خروجی آماده Tailwind و
              Bootstrap تولید می کند،
            </p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="text-sm flex flex-col justify-between py-0.5">
        <div className="flex gap-1">
          <span className="font-semibold">{formattedCoins}</span>
          <span className="text-content-secondary">سکه</span>
          <CoinsIcon className="size-5 stroke-content-tertiary-inverse" />
        </div>

        <p className="text-content-tertiary-inverse">
          <strong>{equivalentToman}</strong> تومان
        </p>
      </div>

      <div>
        <Image src="/coin.png" alt="" width={150} height={150} />
      </div>
    </div>
  );
}

export { CoinsCard };
