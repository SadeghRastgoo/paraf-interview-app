import { Container } from "@/shared/components/ui/container";
import { BenefitCard } from "./BenefitCard";
import { BenefitsData } from "../data/BenefitsData";

function ClubBenefits() {
  return (
    <section className="mt-6">
      <Container>
        <header>
          <h4 className="font-semibold text-2xl">
            ویژگی‌های <span className="text-informal">پاراف‌کلاب</span>
          </h4>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-6 w-11/12 mx-auto">
          {BenefitsData.map((bd) => (
            <BenefitCard
              key={bd.title}
              title={bd.title}
              description={bd.description}
              icon={bd.icon}
            />
          ))}
        </main>
      </Container>
    </section>
  );
}

export { ClubBenefits };
