"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  CheckCircle2Icon,
  CheckSquareIcon,
  ChevronLeftIcon,
  InfoIcon,
} from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Container } from "@/shared/components/ui/container";
import { Separator } from "@/shared/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { CoinsCard } from "./CoinsCard";
import { LevelCard } from "./LevelCard";
import { useUserVitrins } from "../hooks/useUserVitrins";
import { useUserVitrin } from "../hooks/useUserVitrin";

type LogoImage = {
  link: string;
};

function isLogoImage(value: unknown): value is LogoImage {
  return (
    typeof value === "object" &&
    value !== null &&
    "link" in value &&
    typeof (value as { link: unknown }).link === "string"
  );
}

function CustomersClub() {
  const { data: users = [], isLoading: isUsersLoading } = useUserVitrins();

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (!activeTab && users.length > 0) {
      setActiveTab(String(users[0].id));
    }
  }, [users, activeTab]);

  const {
    data: user,
    isLoading: isUserLoading,
    error,
  } = useUserVitrin(activeTab);

  if (isUsersLoading || (isUserLoading && !user)) {
    return (
      <Container>
        <div className="flex h-64 items-center justify-center">
          <p>در حال بارگذاری...</p>
        </div>
      </Container>
    );
  }

  if (error || !user) {
    return (
      <Container>
        <div className="flex h-64 items-center justify-center text-negative">
          <p>داده‌ای موجود نیست</p>
        </div>
      </Container>
    );
  }

  const userFullName = [user.user.firstName, user.user.lastName]
    .filter(Boolean)
    .join(" ");

  const businessActivityName =
    typeof user.businessActivity === "object" && user.businessActivity !== null
      ? (user.businessActivity as { name?: string }).name
      : undefined;

  const logoUrl = isLogoImage(user.logo)
    ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL ?? ""}${user.logo.link}`
    : "https://www.loremfaces.net/96/id/1";

  const location = [user.user.city.name, user.user.country.name]
    .filter(Boolean)
    .join(", ");

  const coins = Number(user.coins ?? 0);
  const coinsReceived = Number(user.coinsReceived ?? 0);
  const coinsEquivalent = Number(user.coinsEquivalent ?? 0);

  return (
    <Container>
      <header className="flex justify-between">
        <div className="w-max bg-linear-to-r from-transparent via-background/70 to-transparent py-1 pl-20">
          <div className="flex items-center gap-3">
            <span className="hidden whitespace-nowrap text-xs xl:inline">
              انتخاب باشگاه مشتریان:
            </span>

            <Tabs value={activeTab} onValueChange={setActiveTab} dir="rtl">
              <TabsList className="flex flex-wrap">
                {users.map((userItem) => (
                  <TabsTrigger key={userItem.id} value={String(userItem.id)}>
                    {userItem.companyName || "فروشگاه بدون نام"}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="hidden w-max items-center gap-3 bg-linear-to-r from-transparent via-background/70 to-transparent py-1 pl-8 pr-20 lg:flex">
          <Button variant="link">قوانین و مقررات</Button>
          <Button variant="link">سوالات متداول شما</Button>
        </div>
      </header>

      <div className="mt-2 grid items-center gap-6 rounded-2xl bg-background p-6 lg:grid-cols-[1fr_auto_.25fr_auto_1fr]">
        <div className="flex items-center gap-6">
          <div className="w-max rounded-2xl p-2 shadow-lg">
            <Image
              src={logoUrl}
              width={110}
              height={110}
              alt={user.companyName ?? ""}
              className="size-24 rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <span className="text-lg font-semibold">
                {userFullName || "کاربر"}
              </span>

              <CheckCircle2Icon className="stroke-informal" />
            </div>

            <div className="space-x-1 text-xs text-content-tertiary-inverse">
              <span className="text-content-secondary">
                {businessActivityName || "خدمات نامشخص"}
              </span>

              <span>/</span>

              <span>{location}</span>
            </div>

            <Badge variant="secondary">مغازه دار</Badge>

            <div className="flex items-center gap-1 text-xs">
              <CheckSquareIcon className="size-5 stroke-content-tertiary-inverse" />

              <span className="text-content-secondary">ماموریت انجام‌شده</span>

              <span className="font-semibold">{user.scores || 0}</span>
            </div>
          </div>
        </div>

        <Separator orientation="vertical" className="bg-content-primary" />

        <div className="flex flex-col items-center gap-2">
          <Badge className="bg-negative-subtle text-negative">
            <InfoIcon />
            وقت کمی مونده، ماموریتت رو همین الان انجام بده.
          </Badge>

          <Button className="bg-brand">
            مشاهده ماموریت
            <CheckSquareIcon />
          </Button>
        </div>

        <Separator orientation="vertical" className="bg-content-primary" />

        <div className="flex flex-col gap-4">
          <div className="grid gap-3 lg:grid-cols-1 xl:grid-cols-2">
            <LevelCard level={120} />
            <CoinsCard coins={coins} />
          </div>

          <Separator className="bg-content-primary" />

          <div className="flex flex-col items-center justify-between gap-2 text-xs lg:flex-row lg:gap-4">
            <Badge variant="secondary">
              ۳۰ روز اخیر
              <ChevronLeftIcon />
            </Badge>

            <div className="flex items-center font-medium text-content-secondary xl:gap-1">
              <Image
                src="/sale.png"
                alt=""
                width={50}
                height={50}
                className="size-5 2xl:size-8"
              />

              <p>
                سکه
                <span className="hidden 2xl:inline">
                  {" "}
                  از طرح تخفیف سکه‌ای دریافتی
                </span>
                :
              </p>

              <strong className="text-lg">{coinsReceived}</strong>

              <span className="hidden 2xl:inline">سکه</span>
            </div>

            <div className="flex items-center font-medium text-content-secondary 2xl:gap-1">
              <Image
                src="/cups/bronze-cup.png"
                alt=""
                width={50}
                height={50}
                className="size-5 2xl:size-8"
              />

              <p>معادل:</p>

              <strong className="text-lg text-black">{coinsEquivalent}</strong>

              <span className="text-black">امتیاز</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export { CustomersClub };
