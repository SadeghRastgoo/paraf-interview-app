"use client";

import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import { Container } from "@/shared/components/container";
import { Separator } from "@/shared/components/separator";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/components/tooltip";
import {
  CheckCircle2Icon,
  CheckIcon,
  CheckSquareIcon,
  ChevronLeftIcon,
  InfoIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import { LevelCard } from "./LevelCard";
import { CoinsCard } from "./CoinsCard";
import { getAllUserVitrin } from "./services/customers-club.service";
import { useEffect } from "react";

function CustomersClub() {
  const fn = async () => {
    try {
      await getAllUserVitrin();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fn();
  }, []);

  return (
    <Container>
      <header className="flex justify-between">
        <div className="flex items-center gap-3 pl-20 py-1 w-max bg-linear-to-r from-transparent via-background/70 to-transparent">
          <span className="text-xs">انتخاب باشگاه مشتریان:</span>

          <Tabs dir="rtl" defaultValue="profile">
            <TabsList>
              <TabsTrigger value="profile">پروفایل شخصی</TabsTrigger>
              <TabsTrigger value="pasargad-mobile">موبایل پاسارگاد</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex items-center gap-3 pl-8 pr-20 py-1 w-max bg-linear-to-r from-transparent via-background/70 to-transparent">
          <Button variant={"link"}>قوانین و مقررات</Button>
          <Button variant={"link"}>سوالات متداول شما</Button>
        </div>
      </header>

      <div className="bg-background rounded-2xl grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-14 mt-2 p-6">
        <div className="flex gap-6 items-center">
          <div className="shadow-lg p-2 rounded-2xl w-max">
            <Image
              src={`https://www.loremfaces.net/96/id/${1 + Math.floor(Math.random() * 5)}.jpg`}
              width={110}
              height={110}
              alt=""
              className="rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <span className="text-lg font-semibold">آرین رستگار</span>
              <CheckCircle2Icon className="stroke-informal" />
            </div>

            <div className="space-x-1 text-sm text-content-tertiary-inverse">
              <span className="text-content-secondary">تعمیرکار موبایل</span>
              <span>/</span>
              <span>مشهد, ایران</span>
            </div>

            <Badge variant={"secondary"}>مغازه دار</Badge>

            <div className="flex gap-1 items-center text-sm">
              <CheckSquareIcon className="stroke-content-tertiary-inverse size-5" />
              <span className="text-content-secondary">ماموریت انجام‌شده</span>
              <span className="font-semibold">17</span>
            </div>
          </div>
        </div>

        <Separator orientation="vertical" className="bg-content-primary" />

        <div className="flex flex-col gap-2 items-center">
          <Badge className="bg-negative-subtle text-negative">
            <InfoIcon />
            وقت کمی مونده، ماموریتت رو همین الان انجام بده.
          </Badge>

          <Button variant={"default"} className="bg-brand">
            مشاهده ماموریت
            <CheckSquareIcon />
          </Button>
        </div>

        <Separator orientation="vertical" className="bg-content-primary" />

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <LevelCard />
            <CoinsCard />
          </div>

          <Separator className="bg-content-primary" />

          <div className="flex gap-4 text-xs justify-between items-center">
            <Badge variant={"secondary"}>
              30 روز اخیر
              <ChevronLeftIcon />
            </Badge>

            <div className="flex text-content-secondary font-medium items-center gap-1">
              <Image
                src="/sale.png"
                alt=""
                width={50}
                height={50}
                className="size-8"
              />
              <p>سکه دریافتی از طرح تخفیف سکه‌ای:</p>
              <strong className="text-lg">561</strong>
              <span>سکه</span>
            </div>

            <div className="flex text-content-secondary font-medium items-center gap-1">
              <Image
                src="/cups/bronze-cup.png"
                alt=""
                width={50}
                height={50}
                className="size-8"
              />
              <p>معادل:</p>
              <strong className="text-lg text-black">56</strong>
              <span className="text-black">امتیاز</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export { CustomersClub };
