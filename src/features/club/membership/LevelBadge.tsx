import { ArrowLeftIcon } from "lucide-react";

type Props = {
  icon: React.ReactNode;
  title: string;
  isFinalLevel?: boolean;
};

export function LevelBadge({ icon, title, isFinalLevel }: Props) {
  return (
    <div className={"flex items-center gap-2 py-2 text-sm"}>
      <span>{title}</span>

      {icon}

      {!isFinalLevel && (
        <ArrowLeftIcon className="stroke-content-primary mx-4 hidden lg:block" />
      )}
    </div>
  );
}
