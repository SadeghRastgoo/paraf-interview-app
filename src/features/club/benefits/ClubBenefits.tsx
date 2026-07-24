import { Container } from "@/shared/components/ui/container";
import { BenefitCard } from "./BenefitCard";

function ClubBenefits() {
  return (
    <section>
      <Container>
        <header>
          <h4 className="font-semibold text-2xl">
            ویژگی‌های <span className="text-informal">پاراف‌کلاب</span>
          </h4>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-6 w-11/12 mx-auto">
          <BenefitCard
            title="جوایز ویژه"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان."
            icon="/benefits/benefit-gift.png"
          />

          <BenefitCard
            title="پشتیبانی حرفه‌ای"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان."
            icon="/benefits/benefit-support.png"
          />

          <BenefitCard
            title="ارسال رایگان"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان."
            icon="/benefits/benefit-shipping.png"
          />

          <BenefitCard
            title="گزارش فروش"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان."
            icon="/benefits/benefit-report.png"
          />

          <BenefitCard
            title="رویدادهای ویژه"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان."
            icon="/benefits/benefit-events.png"
          />

          <BenefitCard
            title="شبکه همکاران"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان."
            icon="/benefits/benefit-connections.png"
          />
        </main>
      </Container>
    </section>
  );
}

export { ClubBenefits };
