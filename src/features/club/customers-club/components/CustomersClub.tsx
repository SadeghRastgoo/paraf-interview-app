"use client";

import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import { Container } from "@/shared/components/container";
import { Separator } from "@/shared/components/separator";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/tabs";
import {
  CheckCircle2Icon,
  CheckSquareIcon,
  ChevronLeftIcon,
  InfoIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LevelCard } from "./LevelCard";
import { CoinsCard } from "./CoinsCard";
import {
  getAllUserVitrin,
  getUserVitrinById,
} from "../services/customers-club.service";
import type {
  UserVitrinSchema,
  UserVitrinsSchema,
} from "../schemas/customers-club.schema";

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
  const [allUsersVitrin, setAllUsersVitrin] = useState<UserVitrinsSchema>([]);
  const [currentUserVitrin, setCurrentUserVitrin] =
    useState<UserVitrinSchema | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("");

  const fetchUserDetail = async (userId: string | number) => {
    setLoading(true);
    setError(null);

    try {
      const userDetail = await getUserVitrinById(userId);
      setCurrentUserVitrin(userDetail);
    } catch (err) {
      console.error("Error fetching user detail:", err);
      setError("Failed to load user details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const allUsers = await getAllUserVitrin();
        setAllUsersVitrin(allUsers);

        const users = Array.isArray(allUsers) ? allUsers : [];
        if (users.length > 0) {
          const firstUserId = String(users[0].id);
          setActiveTab(firstUserId);
          await fetchUserDetail(users[0].id);
        }
      } catch (err) {
        console.error("Error fetching all users:", err);
        setError("Failed to load customer data");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const handleTabChange = async (value: string) => {
    setActiveTab(value);
    await fetchUserDetail(value);
  };

  if (loading && !currentUserVitrin) {
    return (
      <Container>
        <div className="flex justify-center items-center h-64">
          <p>در حال بارگذاری...</p>
        </div>
      </Container>
    );
  }

  if (error || !currentUserVitrin) {
    return (
      <Container>
        <div className="flex justify-center items-center h-64 text-negative">
          <p>{error || "داده‌ای موجود نیست"}</p>
        </div>
      </Container>
    );
  }

  const user = currentUserVitrin;
  const users = allUsersVitrin;

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

  const hasPendingMission = user.hasPendingMission ?? false;
  const pendingMissionMessage =
    user.pendingMissionMessage ||
    "وقت کمی مونده، ماموریتت رو همین الان انجام بده.";
  const missionLink = user.missionLink || "/missions";

  const coins = Number(user.coins ?? 0);
  const coinsReceived = Number(user.coinsReceived ?? 0);
  const coinsEquivalent = Number(user.coinsEquivalent ?? 0);

  return (
    <Container>
      <header className="flex justify-between">
        <div className="flex items-center gap-3 pl-20 py-1 w-max bg-linear-to-r from-transparent via-background/70 to-transparent">
          <span className="text-xs whitespace-nowrap">
            انتخاب باشگاه مشتریان:
          </span>

          <Tabs value={activeTab} onValueChange={handleTabChange} dir="rtl">
            <TabsList className="flex flex-wrap">
              {users.map((userItem) => (
                <TabsTrigger key={userItem.id} value={String(userItem.id)}>
                  {userItem.companyName || "فروشگاه بدون نام"}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="items-center gap-3 pl-8 pr-20 py-1 w-max hidden lg:flex bg-linear-to-r from-transparent via-background/70 to-transparent">
          <Button variant={"link"}>قوانین و مقررات</Button>
          <Button variant={"link"}>سوالات متداول شما</Button>
        </div>
      </header>

      <div className="bg-background rounded-2xl grid lg:grid-cols-[1fr_auto_.25fr_auto_1fr] items-center gap-6 mt-2 p-6">
        <div className="flex gap-6 items-center">
          <div className="shadow-lg p-2 rounded-2xl w-max">
            <Image
              src={logoUrl}
              width={110}
              height={110}
              alt={userFullName || "User avatar"}
              className="rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <span className="text-lg font-semibold">
                {userFullName || "کاربر"}
              </span>
              {user.unionApprovalStatus === "APPROVED" && (
                <CheckCircle2Icon className="stroke-informal" />
              )}
            </div>

            <div className="space-x-1 text-xs text-content-tertiary-inverse">
              <span className="text-content-secondary">
                {businessActivityName || "خدمات نامشخص"}
              </span>
              <span>/</span>
              <span>{location}</span>
            </div>

            <Badge variant={"secondary"}>مغازه دار</Badge>

            <div className="flex gap-1 items-center text-xs">
              <CheckSquareIcon className="stroke-content-tertiary-inverse size-5" />
              <span className="text-content-secondary">ماموریت انجام‌شده</span>
              <span className="font-semibold">{user.scores || 0}</span>
            </div>
          </div>
        </div>

        <Separator orientation="vertical" className="bg-content-primary" />

        <div className="flex flex-col gap-2 items-center">
          {hasPendingMission && (
            <Badge className="bg-negative-subtle text-negative">
              <InfoIcon />
              {pendingMissionMessage}
            </Badge>
          )}

          <Button
            variant={"default"}
            className="bg-brand"
            onClick={() => {
              window.location.href = missionLink;
            }}
          >
            مشاهده ماموریت
            <CheckSquareIcon />
          </Button>
        </div>

        <Separator orientation="vertical" className="bg-content-primary" />

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <LevelCard level={120} />
            <CoinsCard coins={coins} />
          </div>

          <Separator className="bg-content-primary" />

          <div className="flex gap-2 lg:gap-4 text-xs flex-col lg:flex-row justify-between items-center">
            <Badge variant={"secondary"}>
              ۳۰ روز اخیر
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
              <strong className="text-lg">{coinsReceived}</strong>
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
