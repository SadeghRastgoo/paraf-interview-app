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
        "group relative overflow-hidden rounded-2xl border border-transparent bg-background shadow-lg",
        "px-8 py-10",
        "transition-all duration-500 ease-out",
        "hover:border-violet-400",
        "hover:bg-radial hover:from-background hover:to-requirement/20",
        "hover:shadow-[0_18px_45px_rgba(124,58,237,.18)]",
        className,
      )}
    >
      <div
        className="
          flex flex-col items-center text-center
          transition-all duration-500 ease-out
          group-hover:-translate-y-2
          group-hover:scale-[1.02]
          group-hover:[transform:perspective(1000px)_rotateX(4deg)]
        "
      >
        <Image
          src={icon}
          alt={title}
          width={100}
          height={100}
          className="mb-8 transition-all duration-500 group-hover:grayscale group-hover:-scale-x-100"
        />

        <h5 className="text-2xl font-bold transition-colors duration-300 group-hover:text-negative">
          {title}
        </h5>

        <div
          className="
            grid
            transition-all
            duration-500
            ease-out

            grid-rows-[0fr]
            opacity-0

            group-hover:grid-rows-[1fr]
            group-hover:opacity-100
          "
        >
          <div className="overflow-hidden">
            <p className="mt-6 text-lg leading-9 text-slate-700">
              {description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export { BenefitCard };
