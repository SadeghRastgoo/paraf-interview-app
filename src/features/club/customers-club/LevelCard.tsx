import { Button } from "@/shared/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/components/tooltip";
import { InfoIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function LevelCard() {
  return (
    <div className="grid grid-cols-[50px_1fr_auto] gap-2 shadow-lg rounded-3xl p-2 py-3">
      <div>
        <Image src="/cups/bronze-cup.png" alt="" width={100} height={100} />
      </div>

      <div className="text-sm flex flex-col justify-between py-0.5">
        <span className="font-semibold">سطح برنزی</span>

        <div className="flex gap-1">
          <span>124</span>
          <span className="text-content-tertiary-inverse">امتیاز</span>
          <ZapIcon className="size-5 stroke-content-tertiary-inverse" />
        </div>
      </div>

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
    </div>
  );
}

export { LevelCard };
