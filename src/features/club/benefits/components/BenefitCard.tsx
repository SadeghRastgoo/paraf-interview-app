import Image from "next/image";
import { cn } from "@/lib/utils";

type BenefitCardProps = {
  icon: string;
  title: string;
  description: string;
  className?: string;
};

function BenefitCard({
  icon,
  title,
  description,
  className,
}: BenefitCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-transparent bg-background shadow-lg h-56",
        "px-8 py-10",
        "transition-all duration-500 ease-out",
        "hover:border-violet-400",
        "hover:bg-radial hover:from-background hover:to-requirement/20",
        className,
      )}
    >
      <div className="flex flex-col items-center text-center transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]">
        <Image
          src={icon}
          alt={title}
          width={100}
          height={100}
          className="transition-all size-20 duration-500 group-hover:grayscale group-hover:-scale-x-100 group-hover:-translate-y-6"
        />

        <h5 className="text-lg font-bold mt-2 transition-all duration-300 group-hover:text-negative group-hover:-translate-y-6">
          {title}
        </h5>

        <div className="mt-2 grid transition-all duration-500 h-4 group-hover:h-30 overflow-hidden ease-in-out grid-rows-[1fr] group-hover:-translate-y-5">
          <div className="overflow-hidden">
            <p className="text-xs text-slate-700 leading-5">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export { BenefitCard };
