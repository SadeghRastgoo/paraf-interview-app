import { Badge } from "@/shared/components/badge";
import { HistoryIcon, ZapIcon } from "lucide-react";

interface Props {
  type: "invite" | "follow" | "withdraw";
}

function ActivityCard() {
  return (
    <div className="bg-content-body text-sm py-2 items-center px-3 rounded-full grid grid-cols-[50px_100px_1fr_100px_120px] gap-4">
      <div className="bg-background rounded-full size-9 flex justify-center items-center [&>*]:stroke-green-700">
        <ZapIcon />
      </div>
      <div>1232</div>
      <p className="text-sm">
        ارسال لینک "دعوت دوستان" و ثبت‌نام موفق دوست شما.
      </p>
      <div>
        <Badge variant={"secondary"}>موفق</Badge>
      </div>
      <div className="stroke-content-tertiary-inverse flex gap-1 text-content-tertiary-inverse items-center">
        <HistoryIcon className="ml-1 size-4" />
        <span>17:29</span>
        <span>-</span>
        <span>امروز</span>
      </div>
    </div>
  );
}

export { ActivityCard };
