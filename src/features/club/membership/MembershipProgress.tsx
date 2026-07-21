import { ProgressCard } from "./ProgressCard";
import { LevelBadge } from "./LevelBadge";
import { levels } from "./level-data";
import { Button } from "@/shared/components/button";
import { Container } from "@/shared/components/container";
import { CheckSquareIcon, ZapIcon } from "lucide-react";

export function MembershipProgress() {
  return (
    <Container>
      <div className="grid grid-cols-[1fr_260px] items-center max-w-6xl mx-auto gap-8">
        <div className="flex flex-col gap-4">
          <ProgressCard current={124} max={400} />

          <div className="flex justify-center gap-3 bg-background w-max mx-auto px-6 py-1.5 rounded-xl">
            {levels.map((level, index) => (
              <LevelBadge
                key={level.id}
                icon={level.icon}
                title={level.title}
                isFinalLevel={levels.length - 1 === index}
              />
            ))}
          </div>
        </div>

        <div className="rounded-full flex h-max flex-col gap-2 items-center justify-center border bg-requirement/80 backdrop-blur-md py-8 px-10 text-center border-r-background border-l-background">
          <div className="flex gap-2 items-center justify-center">
            <p className="text-sm">
              امتیاز لازم تا <strong>سطح نقره‌ای</strong>
            </p>

            <div className="bg-content-body flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold text-informal">
              <span>277+</span>
              <ZapIcon className="size-4" />
            </div>
          </div>

          <Button className="w-full bg-background border-brand text-brand">
            مأموریت‌ها
            <CheckSquareIcon />
          </Button>
        </div>
      </div>
    </Container>
  );
}
