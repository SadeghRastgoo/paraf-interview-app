import type { LucideIcon } from "lucide-react";
import {
  ArrowDownCircleIcon,
  ArrowRightLeftIcon,
  Clock,
  CoinsIcon,
  GemIcon,
  TrophyIcon,
} from "lucide-react";
import {
  RecentActivitiesTypeEnum,
  RecentActivitySchema,
} from "../schemas/acitivites.schema";
import { cn } from "@/lib/utils";
import { Badge } from "@/shared/components/ui/badge";

const RECENT_ACTIVITIES_TASK_TYPES: Record<
  RecentActivitiesTypeEnum,
  {
    title: string;
    icon: LucideIcon;
    iconBgColor: string;
    hoverBgColor: string;
    currency: string;
  }
> = {
  BOTH: {
    title: "دوگانه",
    icon: GemIcon,
    iconBgColor: "group-hover:bg-violet-700 group-hover:text-violet-300",
    hoverBgColor: "to-violet-700/10 hover:border-violet-100/30",
    currency: "امتیاز/سکه",
  },
  COIN: {
    title: "سکه",
    icon: CoinsIcon,
    iconBgColor: "group-hover:bg-amber-700 group-hover:text-amber-500",
    hoverBgColor: "to-amber-700/10 hover:border-amber-700/30",
    currency: "سکه",
  },
  SCORE: {
    title: "امتیاز",
    icon: TrophyIcon,
    iconBgColor: "group-hover:bg-green-700 group-hover:text-green-500",
    hoverBgColor: "to-green-700/10 hover:border-green-700/30",
    currency: "امتیاز",
  },
  SPENTCOIN: {
    title: "برداشت سکه",
    icon: ArrowDownCircleIcon,
    iconBgColor: "group-hover:bg-red-700 group-hover:text-red-500",
    hoverBgColor: "to-red-700/10 hover:border-red-700/30",
    currency: "برداشت",
  },
  TRANSFERCOIN: {
    title: "انتقال سکه",
    icon: ArrowRightLeftIcon,
    iconBgColor: "group-hover:bg-sky-700 group-hover:text-sky-500",
    hoverBgColor: "to-sky-700/10 hover:border-sky-700/30",
    currency: "انتقال",
  },
};

function ActivityCard(activity: RecentActivitySchema) {
  const config = RECENT_ACTIVITIES_TASK_TYPES[activity.type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "bg-content-body group border border-transparent from-content-body hover:bg-linear-to-l transition-all duration-700 text-sm py-2 items-center px-3 rounded-full grid grid-cols-[50px_50px_1fr_80px] lg:grid-cols-[50px_100px_1fr_100px_120px] gap-4 hover:px-5",
        config.hoverBgColor,
      )}
    >
      <div
        className={cn(
          "size-9 rounded-full flex items-center justify-center transition-all duration-700 bg-white shadow",
          config.iconBgColor,
        )}
      >
        <Icon className="size-5" />
      </div>

      <div
        className={cn(
          "flex flex-col font-bold bg-transparent!",
          config.iconBgColor,
        )}
      >
        {activity.scoreAmount && (
          <div>
            {activity.scoreAmount}+{" "}
            <span className="hidden lg:inline">{config.currency}</span>
          </div>
        )}
        {activity.coinAmount && (
          <div>
            {activity.coinAmount}+{" "}
            <span className="hidden lg:inline">{config.currency}</span>
          </div>
        )}
      </div>

      <p>{activity.taskDescription}</p>

      <Badge
        variant={"secondary"}
        className="group-hover:border-content-brand-bold lg:block hidden"
      >
        موفق
      </Badge>

      {activity.createdAt && (
        <div className="text-xs flex gap-1 items-center font-medium text-content-tertiary-inverse group-hover:text-content-brand-bold">
          <Clock className="size-4" />
          {new Intl.DateTimeFormat("fa-IR", {
            month: "long",
            day: "numeric",
          }).format(new Date(activity.createdAt))}
          <span className="lg:block hidden">-</span>
          <span className="lg:block hidden">
            {new Intl.DateTimeFormat("fa-IR", {
              hour: "2-digit",
              minute: "2-digit",
            }).format(new Date(activity.createdAt))}
          </span>
        </div>
      )}
    </div>
  );
}

export { ActivityCard };
