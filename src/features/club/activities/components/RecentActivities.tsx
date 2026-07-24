"use client";

import { Button } from "@/shared/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { EyeIcon } from "lucide-react";
import { ActivityCard } from "./ActivityCard";
import { useRecentActivities } from "../hooks/useRecentActivities";

function RecentActivities() {
  const { data } = useRecentActivities();

  return (
    <div className="bg-background flex flex-col gap-8 p-5 lg:p-7 rounded-2xl">
      <header className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
          <h3 className="font-semibold text-lg text-nowrap">فعالیت های اخیر</h3>

          <Tabs
            dir="rtl"
            defaultValue="all"
            className="w-[80vw] sm:w-full overflow-y-hidden overflow-x-scroll sm:overflow-x-visible"
          >
            <TabsList>
              <TabsTrigger value="all">همه</TabsTrigger>
              <TabsTrigger value="points">امتیاز</TabsTrigger>
              <TabsTrigger value="coins">سکه</TabsTrigger>
              <TabsTrigger value="multi">دوگانه</TabsTrigger>
              <TabsTrigger value="withdraw-coin">
                برداشت
                <span className="hidden lg:inline">سکه</span>
              </TabsTrigger>
              <TabsTrigger value="transfer-coin">
                انتقال
                <span className="hidden lg:inline">سکه</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Button variant={"ghost"} className="mr-auto">
            لیست کامل
            <EyeIcon />
          </Button>
        </div>

        <p className="text-content-secondary text-sm">
          مروری بر آخرین فعالیت‌ها و دستاوردهات
        </p>
      </header>

      <main className="space-y-2">
        {data?.map((activity) => (
          <ActivityCard key={activity.id} {...activity} />
        ))}
      </main>
    </div>
  );
}

export { RecentActivities };
