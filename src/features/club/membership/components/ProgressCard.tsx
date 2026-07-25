import Image from "next/image";
import { Check, ZapIcon } from "lucide-react";
import { levels } from "../data/level-data";

type Props = {
  current: number;
  max: number;
};

export function ProgressCard({ current, max }: Props) {
  const percentage = Math.min((current / max) * 100, 100);

  return (
    <div
      dir="ltr"
      className="relative overflow-hidden rounded-2xl border border-r-background border-l-background pt-40 bg-requirement/10 p-8 px-20 backdrop-blur-[3px]"
    >
      <div
        dir="rtl"
        className="absolute top-12 z-20 w-full right-0 px-10 left-0 flex items-start justify-between"
      >
        {levels.slice(0, 3).map((level) => (
          <div key={level.id} className="flex flex-col items-center">
            <Image
              src={level.icon}
              alt={level.title}
              width={70}
              height={70}
              className={"size-20"}
            />

            <div className="mt-6 flex h-8 w-8 items-center justify-center rounded-b-xl bg-informal-subtle text-informal/80 shadow">
              <Check className="size-5" strokeWidth={4} />
            </div>

            <h3 className="mt-3 text-sm font-bold text-content-tertiary-inverse">
              {level.title}
            </h3>

            <p dir="rtl" className="mt-1 text-xs text-content-tertiary-inverse">
              {level.maxScore === Infinity
                ? `${level.score}+`
                : `${level.score} تا ${level.maxScore}`}
            </p>
          </div>
        ))}
      </div>

      {/* Progressbar */}
      <div className="relative h-16">
        <div className="absolute top-2 left-0 right-0 h-0.5 bg-white/70" />

        <div
          className="absolute top-1 right-0 h-3 rounded-full bg-linear-to-l to-informal from-informal-subtle border border-informal/30 transition-all shadow"
          style={{ width: `${percentage}%` }}
        />

        <div
          className="absolute top-5 translate-x-1/2"
          style={{ right: `${percentage}%` }}
        >
          <div className="flex items-center gap-1 rounded-full bg-informal px-3 py-1 text-xl font-bold text-white shadow-lg">
            <ZapIcon className="size-5 text-yellow-400" />
            {current}
          </div>
        </div>
      </div>
    </div>
  );
}
