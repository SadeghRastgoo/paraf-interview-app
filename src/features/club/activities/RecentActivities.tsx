import { Button } from "@/shared/components/button";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/tabs";
import { EyeIcon } from "lucide-react";
import { ActivityCard } from "./ActivityCard";

function RecentActivities() {
  return (
    <div className="bg-background flex flex-col gap-8 p-7 rounded-2xl">
      <header className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row gap-2 items-start lg:items-center">
          <h3 className="font-semibold text-lg">فعالیت های اخیر</h3>
          <Tabs dir="rtl" defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">نمایش همه</TabsTrigger>
              <TabsTrigger value="points">امتیاز</TabsTrigger>
              <TabsTrigger value="coins">سکه</TabsTrigger>
              <TabsTrigger value="multi">دوگانه</TabsTrigger>
              <TabsTrigger value="withdraw-coin">برداشت سکه</TabsTrigger>
              <TabsTrigger value="transfer-coin">انتقال سکه</TabsTrigger>
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
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </main>
    </div>
  );
}

export { RecentActivities };
