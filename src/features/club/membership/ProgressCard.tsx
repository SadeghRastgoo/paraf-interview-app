import { Progress } from "@/shared/components/ui/progress";
import { ZapIcon } from "lucide-react";

type Props = {
  current: number;
  max: number;
};

function ProgressCard({ current, max }: Props) {
  const percentage = (current / max) * 100;

  return (
    <div className="relative flex-1 rounded-3xl border bg-requirement/10 backdrop-blur-md p-8">
      <div className="mb-10 flex justify-between">
        <div className="text-center">
          🏆
          <p className="mt-2 text-sm font-semibold">سطح برنزی</p>
          <span className="text-xs text-muted-foreground">0 امتیاز</span>
        </div>

        <div className="text-center">
          🏆
          <p className="mt-2 text-sm font-semibold">سطح بعدی</p>
          <span className="text-xs text-muted-foreground">{max} امتیاز</span>
        </div>
      </div>

      <div className="relative mb-10">
        {/* <Progress value={percentage} className="h-2" /> */}
        <div className="h-0.5 w-full bg-background rounded-full"></div>

        <div
          className="flex items-center gap-1 absolute -translate-x-1/2 -translate-y-1/2 rounded-full text-lg bg-violet-600 -bottom-14 px-3 py-1 text-white font-bold"
          style={{
            right: `${percentage}%`,
          }}
        >
          {current}
          <ZapIcon className="size-4 stroke-notice" />
        </div>
      </div>
    </div>
  );
}

export { ProgressCard };
