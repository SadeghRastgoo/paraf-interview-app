import { Button } from "@/shared/components/button";

function ActivitiesChart() {
  return (
    <div className="bg-background flex flex-col gap-4 p-7 rounded-2xl">
      <header className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg">نمودار فعالیت ها</h3>
      </header>

      <div className="bg-content-primary flex flex-col gap-5 p-4 rounded-lg">
        <p className="text-sm">
          اخیراً کم‌فعالیت بودی. <br />
          برای حفظ سطح برنزی، بیشتر مشارکت کن! 👀
        </p>

        <div className="space-x-2 mr-auto">
          <Button className="bg-background border-brand text-brand">
            دعوت دوستان
          </Button>
          <Button className="bg-background border-brand text-brand">
            شرکت در نظرسنجی
          </Button>
        </div>
      </div>

      <p className="text-sm text-content-secondary">
        نمودار تغییرات امتیاز بر اساس فعالیت 6 ماهه شما
      </p>

      <h5 className="font-medium">
        فعالیت شما نسبت به ماه گذشته 35% کاهش یافته‌.
      </h5>
    </div>
  );
}

export { ActivitiesChart };
