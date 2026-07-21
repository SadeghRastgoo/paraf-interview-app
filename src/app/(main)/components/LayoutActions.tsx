import { Button } from "@/shared/components/button";
import { Separator } from "@/shared/components/separator";
import {
  BellRingIcon,
  LanguagesIcon,
  LayoutGridIcon,
  ShoppingCartIcon,
} from "lucide-react";

function LayoutActions() {
  return (
    <div className="flex gap-4 items-center hidden lg:block">
      <Button variant={"ghost"} className="text-content-tertiary-inverse">
        فارسی / IRT
        <LanguagesIcon />
      </Button>

      <Button variant={"ghost"}>ثبت آگهی جدید</Button>

      <Separator orientation="vertical" className="bg-content-primary" />

      <Button variant={"ghost"}>
        <BellRingIcon />
      </Button>

      <Button variant={"ghost"}>
        <ShoppingCartIcon />
      </Button>

      <Button variant={"ghost"}>
        <LayoutGridIcon />
      </Button>
    </div>
  );
}

export { LayoutActions };
